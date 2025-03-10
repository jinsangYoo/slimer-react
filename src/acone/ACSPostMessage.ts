import {isEmpty, onlyAlphabetOrNumberAtStringEndIndex, getDateToString} from '../common/util'
import ACELog from '../common/logger/ACELog'
import {getRandomIntInclusive} from '../common/util'
import type {
  ACSForMessage,
  MessageForIFrame,
  PayloadForTS,
  PayloadForAdTracking,
  RequestReady,
  PayloadForReqReady,
  PayloadForResReady,
  PayloadForOnLoad,
  PayloadForNative,
  VersionForMessage,
} from '../common/constant/PostMessage'
import ACSPostMessageType from '../common/constant/ACSPostMessageType'
import ACECommonStaticConfig from '../common/config/ACECommonStaticConfig'
import ACECONSTANT from '../common/constant/ACEConstant'
import ACEConstantInteger from '../common/constant/ACEConstantInteger'
import ADID from '../common/constant/ADID'
import ACEReducerForOne from './parameter/ACEReducerForOne'
import {QueueManager} from '../common/queue'
import {ACParams} from './acparam'
import {STVT} from '../common/constant/ACEPublicStaticConfig'

export default class ACSPostMessage {
  private static _TAG = 'ACS.PM'
  private static instance: ACSPostMessage
  private _messageChannels: Map<string, MessageChannel> | null
  private _requestReadys: Map<string, RequestReady> | null
  private _originSet: Set<string>

  constructor() {}

  public static getInstance(): ACSPostMessage {
    return this.instance || (this.instance = new this())
  }

  //#region token
  private static getToken() {
    return ACSPostMessage.getInstance().getToken()
  }

  private getToken() {
    return `${getDateToString()}|${getRandomIntInclusive(0, 1000)}`
  }
  //#endregion

  //#region printDependency
  public static printDependencies() {
    ACSPostMessage.getInstance().printMessageChannels()
    ACSPostMessage.getInstance().printOrigins()
    ACSPostMessage.getInstance().printRequestReadies()
  }

  private printMessageChannels() {
    if (!this._messageChannels) {
      ACELog.d(ACSPostMessage._TAG, 'MessageChannels is empty.')
      return
    }
    ACELog.d(ACSPostMessage._TAG, `MessageChannels size: ${this._messageChannels.size}`)
    ACELog.d(ACSPostMessage._TAG, 'MessageChannels keys: ', Array.from(this._messageChannels.keys()))
  }

  private printOrigins() {
    if (!this._originSet) {
      ACELog.i(ACSPostMessage._TAG, 'origins is empty.')
      return
    }

    ACELog.i(ACSPostMessage._TAG, `origins size: ${this._originSet.size}`)
    ACELog.i(ACSPostMessage._TAG, 'origins keys: ', Array.from(this._originSet.keys()))
  }

  private printRequestReadies() {
    if (!this._requestReadys) {
      ACELog.i(ACSPostMessage._TAG, 'RequestReadies is empty.')
      return
    }
    ACELog.i(ACSPostMessage._TAG, `RequestReadies size: ${this._requestReadys.size}`)
    this._requestReadys.forEach((value, key) => {
      ACELog.d(ACSPostMessage._TAG, `RequestReadies keys: ${key}, value: ${value.destinationDomain}`)
    })
  }
  //#endregion

  //#region iframeRef
  public static addDependency(
    iframeRef: React.RefObject<HTMLIFrameElement>,
    destinationDomain: string,
    latency?: number,
  ) {
    ACSPostMessage.getInstance().addOrigin(destinationDomain)
    let _latency = latency === undefined ? 100 : latency
    setTimeout(() => {
      const _token = ACSPostMessage.getToken()
      ACSPostMessage.getInstance().addIframeRef(
        iframeRef,
        destinationDomain,
        {
          type: ACSPostMessageType.didAddByOnLoad,
          token: _token,
          location: self.location.origin.toString(),
          version: ACEConstantInteger.VersionOfPostMessage,
        },
        _token,
      )
    }, _latency)
  }

  private callbackUpdateByPostMessage = (eventName?: string) => {
    ACECommonStaticConfig.didUpdateByPostMessage()
    !isEmpty(eventName) &&
      ACEReducerForOne.plWithPage((error?: object, innerResult?: any) => {
        if (error) {
          ACELog.w(ACSPostMessage._TAG, 'Fail to send pl after update for ts.', error)
          QueueManager.push(ACParams.init(ACParams.TYPE.EVENT, eventName))
        } else if (innerResult) {
          ACELog.d(ACSPostMessage._TAG, 'Done to send pl after update for ts.', innerResult)
        }
      }, eventName)
  }

  private addIframeRef(
    iframeRef: React.RefObject<HTMLIFrameElement>,
    destinationDomain: string,
    messageObj: ACSForMessage,
    token: string,
  ) {
    const _messageChannel = new MessageChannel()
    if (!this._messageChannels) {
      this._messageChannels = new Map<string, MessageChannel>()
    }
    this._messageChannels.set(token, _messageChannel)
    ACELog.d(ACSPostMessage._TAG, `addIframeRef::destinationDomain: ${destinationDomain}, messageObj: `, messageObj)
    iframeRef.current?.contentWindow?.postMessage(messageObj, destinationDomain, [_messageChannel.port2])

    const reqOnLoadInOnMessage = (
      params: {
        type: 'ACS.reqOnLoad'
        payload: PayloadForOnLoad
      } & MessageForIFrame &
        VersionForMessage,
    ) => {
      ACELog.d(ACSPostMessage._TAG, 'reqOnLoadInOnMessage::params: ', params)

      if (!this._messageChannels?.has(params.token)) return
      this._messageChannels?.get(params.token)?.port1.postMessage({
        type: ACSPostMessageType.resOnLoad,
        token: params.token,
        location: self.location.origin.toString(),
        version: ACEConstantInteger.VersionOfPostMessage,
        payload: {
          key: ACECommonStaticConfig.getKey(),
          device: ACECONSTANT.DEVICE,
          eventName: params.payload.eventName,
          adid: ACECommonStaticConfig.getParameterUtil()?.getAdvertisingIdentifier().advertisingIdentifier,
          adeld: ACECommonStaticConfig.getParameterUtil()?.getAdvertisingIdentifier().isAdvertisingTrackingEnabled,
          ts: ACECommonStaticConfig.getParameterUtil()?.getTS(),
        },
      })
    }
    const resOnLoadInOnMessage = (
      params: {
        type: 'ACS.resOnLoad'
        payload: {
          key: string
          device: string
          ts?: PayloadForTS
        } & PayloadForOnLoad &
          PayloadForAdTracking
      } & MessageForIFrame &
        VersionForMessage,
    ) => {
      ACELog.d(ACSPostMessage._TAG, 'finish::resOnLoadInOnMessage::params: ', params)
      this.setAdvertisingIdentifier(params.payload.adeld, params.payload.adid)
      ACECommonStaticConfig.updateByPostMessage(
        params.payload.key,
        this.callbackUpdateByPostMessage,
        params.payload.eventName,
        params.payload.ts ? {...params.payload.ts} : undefined,
      )
    }

    _messageChannel.port1.onmessage = (event: MessageEvent<ACSForMessage>) => {
      ACELog.i(
        ACSPostMessage._TAG,
        `_messageChannel.port1.onmessage::event.data: ${JSON.stringify(event.data, null, 2)}`,
      )

      switch (event.data.type) {
        case ACSPostMessageType.reqOnLoad:
          reqOnLoadInOnMessage(event.data)
          break
        case ACSPostMessageType.resOnLoad:
          resOnLoadInOnMessage(event.data)
          break
        default:
          ACELog.d(ACSPostMessage._TAG, 'in port1.onmessage::event.data: ', event.data)
          break
      }
    }
  }

  public static addOriginArray(origins: string[] | undefined) {
    origins?.map((origin: string) => {
      ACSPostMessage.addOrigin(origin)
    })
  }

  public static addOrigin(origin: string | undefined) {
    if (!isEmpty(origin)) {
      ACSPostMessage.getInstance().addOrigin(origin as string)
    }
  }

  private addOrigin(destinationDomain: string) {
    if (!this._originSet) {
      this._originSet = new Set<string>()
    }
    if (!isEmpty(destinationDomain)) {
      let _destinationDomain = onlyAlphabetOrNumberAtStringEndIndex(destinationDomain)
      if (!this._originSet.has(_destinationDomain)) {
        this._originSet.add(_destinationDomain)
      }
    }
  }

  private hasOrigin(destinationDomain: string): boolean {
    if (this._originSet) {
      return (
        this._originSet.has(destinationDomain) ||
        this._originSet.has(onlyAlphabetOrNumberAtStringEndIndex(destinationDomain))
      )
    }

    return false
  }

  public static removeDependencices() {
    ACSPostMessage.getInstance().removeAllMessageChannels()
    ACSPostMessage.getInstance().removeAllOrigins()
    ACSPostMessage.getInstance().removeAllRequestReady()
  }

  private removeAllMessageChannels() {
    if (!this._messageChannels) return
    this._messageChannels.forEach(({port1}) => {
      port1.close()
      port1.onmessage = null
    })
    this._messageChannels.clear()
    this._messageChannels = null
  }

  private removeAllOrigins() {
    if (!this._originSet) {
      return
    }
    this._originSet.clear()
  }
  //#endregion

  //#region RequestReady
  public static addRequestReady(
    identity: string,
    iframeRef: React.RefObject<HTMLIFrameElement>,
    destinationDomain: string,
  ): boolean {
    return ACSPostMessage.getInstance().addRequestReady(identity, iframeRef, destinationDomain)
  }

  private addRequestReady(identity: string, iframeRef: React.RefObject<HTMLIFrameElement>, destinationDomain: string) {
    if (isEmpty(identity) || isEmpty(destinationDomain)) {
      ACELog.e(
        ACSPostMessage._TAG,
        'Please check parameters.',
        new Error(`Invalid identity: ${identity}, destinationDomain: ${destinationDomain}`),
      )
      return false
    }

    if (!this._requestReadys) {
      this._requestReadys = new Map<string, RequestReady>()
    }
    if (this._requestReadys.has(identity)) {
      ACELog.e(ACSPostMessage._TAG, `Already did to add identity: ${identity}`, {
        destinationDomain: destinationDomain,
      })
      return false
    }
    this.addOrigin(destinationDomain)
    ACELog.i(ACSPostMessage._TAG, `Did Accept reqReady information: ${identity}`, {
      destinationDomain: destinationDomain,
    })
    this._requestReadys.set(identity, {iframeRef, destinationDomain: destinationDomain})
    return true
  }

  private removeAllRequestReady() {
    if (!this._requestReadys) {
      return
    }
    this._requestReadys.clear()
  }
  //#endregion

  //#region postMessage
  public static handleMessage(e: Event) {
    return ACSPostMessage.getInstance().handleMessage(e)
  }

  private handleMessage(e: Event) {
    const _event = e as MessageEvent<ACSForMessage>
    let [port2] = _event.ports || []
    const postMessage = (message: ACSForMessage) => {
      if (!port2) {
        ACELog.d(ACSPostMessage._TAG, 'Invalid port2.')
        ACELog.d(ACSPostMessage._TAG, "Don't send postMessage by port2: ", message)
        return
      }
      ACELog.d(ACSPostMessage._TAG, 'Send postMessage by port2:', message)
      port2.postMessage(message)
    }
    const didAddByOnLoadInHandleMessage = (
      params: {type: 'ACS.didAddByOnLoad'} & MessageForIFrame & VersionForMessage,
    ) => {
      ACELog.d(ACSPostMessage._TAG, 'didAddByOnLoadInHandleMessage::params:', params)
      postMessage({
        type: ACSPostMessageType.reqOnLoad,
        token: params.token,
        location: global.location.origin.toString(),
        version: ACEConstantInteger.VersionOfPostMessage,
        payload: {},
      })
    }
    const injectToReactInHandleMessage = (
      params: {
        type: 'ACS.injectToReact'
        payload: PayloadForNative & PayloadForOnLoad & PayloadForAdTracking
      } & MessageForIFrame,
    ) => {
      ACELog.d(ACSPostMessage._TAG, 'injectToReactInHandleMessage::params:', params)

      let _didTS: STVT | undefined
      if (params.payload.ts && !isEmpty(params.payload.ts)) {
        ACELog.d(ACSPostMessage._TAG, 'injectToReactInHandleMessage::params.payload.ts:', JSON.parse(params.payload.ts))
        let _willParseTS = JSON.parse(params.payload.ts)
        _didTS = {
          st: {
            getts: _willParseTS.st.getts,
            insenginets: _willParseTS.st.insenginets,
            referts: _willParseTS.st.referts,
            startts: _willParseTS.st.startts,
          },
          vt: {
            vts: _willParseTS.vt.vts,
            visitCount: _willParseTS.vt.visitCount.toString(),
            buyTimeTS: _willParseTS.vt.buyTimeTS,
            buyCount: _willParseTS.vt.buyCount.toString(),
            pcStamp: _willParseTS.vt.pcStamp,
          },
        }
      }

      this.setAdvertisingIdentifier(params.payload.adeld, params.payload.adid)
      ACECommonStaticConfig.updateByPostMessage(
        params.payload.key,
        this.callbackUpdateByPostMessage,
        params.payload.eventName,
        _didTS,
      )
    }
    const reqOnLoadInHandleMessage = (
      params: {
        type: 'ACS.reqOnLoad'
      } & MessageForIFrame &
        VersionForMessage,
    ) => {
      ACELog.i(ACSPostMessage._TAG, 'reqOnLoadInHandleMessage::params:', params)
    }
    const resOnLoadInHandleMessage = (
      params: {
        type: 'ACS.resOnLoad'
        payload: {
          key: string
          device: string
          ts?: PayloadForTS
        } & PayloadForAdTracking
      } & MessageForIFrame &
        VersionForMessage,
    ) => {
      ACELog.i(ACSPostMessage._TAG, 'resOnLoadInHandleMessage::params:', params)
    }
    const reqReadyInHandleMessage = (
      params: {
        type: 'ACS.reqReady'
        payload: PayloadForReqReady
      } & MessageForIFrame &
        VersionForMessage,
    ) => {
      if (!this._requestReadys || !this._requestReadys.has(params.payload.uniqueKey)) {
        return
      }
      const {iframeRef, destinationDomain} = this._requestReadys.get(params.payload.uniqueKey) as RequestReady
      const _token = this.getToken()
      this.addIframeRef(
        iframeRef,
        destinationDomain,
        {
          type: ACSPostMessageType.resReady,
          token: _token,
          location: self.location.origin.toString(),
          version: ACEConstantInteger.VersionOfPostMessage,
          payload: {
            key: ACECommonStaticConfig.getKey(),
            device: ACECONSTANT.DEVICE,
            uniqueKey: params.payload.uniqueKey,
            eventName: params.payload.eventName,
            adid: ACECommonStaticConfig.getParameterUtil()?.getAdvertisingIdentifier().advertisingIdentifier,
            adeld: ACECommonStaticConfig.getParameterUtil()?.getAdvertisingIdentifier().isAdvertisingTrackingEnabled,
            ts: ACECommonStaticConfig.getParameterUtil()?.getTS(),
          },
        },
        _token,
      )
    }
    const resReadyInHandleMessage = (
      params: {
        type: 'ACS.resReady'
        payload: {
          key: string
          device: string
          ts?: PayloadForTS
        } & PayloadForResReady &
          PayloadForAdTracking
      } & MessageForIFrame &
        VersionForMessage,
    ) => {
      ACELog.d(ACSPostMessage._TAG, 'finish::resReadyInHandleMessage::params:', params)
      this.setAdvertisingIdentifier(params.payload.adeld, params.payload.adid)
      ACECommonStaticConfig.updateByPostMessage(
        params.payload.key,
        this.callbackUpdateByPostMessage,
        params.payload.eventName,
        params.payload.ts ? {...params.payload.ts} : undefined,
      )
    }

    if (ACELog.isDevMode() && this.isACSPostMessageFormat(_event)) {
      ACELog.d(ACSPostMessage._TAG, 'handleMessage::params:', _event.data)
    }
    if (!this.hasOrigin(_event.origin) || _event.data.type === undefined) return
    switch (_event.data.type) {
      case ACSPostMessageType.didAddByOnLoad:
        didAddByOnLoadInHandleMessage(_event.data)
        break
      case ACSPostMessageType.injectToReact:
        injectToReactInHandleMessage(_event.data)
        break
      case ACSPostMessageType.reqOnLoad:
        reqOnLoadInHandleMessage(_event.data)
        break
      case ACSPostMessageType.resOnLoad:
        resOnLoadInHandleMessage(_event.data)
        break
      case ACSPostMessageType.reqReady:
        reqReadyInHandleMessage(_event.data)
        break
      case ACSPostMessageType.resReady:
        resReadyInHandleMessage(_event.data)
        break
      default:
        break
    }
  }

  private isACSPostMessageFormat(_event: MessageEvent<ACSForMessage>) {
    if (_event.data.type !== undefined && _event.data.location !== undefined) return true
    return false
  }
  //#endregion

  private setAdvertisingIdentifier(
    isAdvertisingTrackingEnabled: string | undefined,
    advertisingIdentifier: string | undefined,
  ) {
    let _adeld = !isEmpty(isAdvertisingTrackingEnabled) && isAdvertisingTrackingEnabled === ADID.enable ? true : false
    let _adid = !isEmpty(advertisingIdentifier) ? (advertisingIdentifier as string) : ADID.defaultADID
    ACECommonStaticConfig.setAdvertisingIdentifier(_adeld, _adid)
  }
}
