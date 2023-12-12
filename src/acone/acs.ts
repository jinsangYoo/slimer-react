import {ACParams} from './acparam'
import {AceConfiguration} from './aceconfiguration'
import ACECommonStaticConfig from '../common/config/ACECommonStaticConfig'
import ACEReducerForOne from './parameter/ACEReducerForOne'
import ControlTowerManager from '../common/controltower/ControlTowerManager'
import type {ACSCallback, ACEResponseToCaller, DetailOfSDK} from '../common/constant/ACEPublicStaticConfig'
import {ACEConstantResultForCallback, ACEResultCode} from '../common/constant/ACEPublicStaticConfig'
import ACELog from '../common/logger/ACELog'
import NetworkUtils from '../common/http/NetworkUtills'
import {decode, getQueryForKey, isEmpty} from '../common/util/TextUtils'
import ACECONSTANT from '../common/constant/ACEConstant'
import ACEParameterUtil from '../common/parameter/ACEParameterUtil'
import ACSPostMessage from './ACSPostMessage'
import {QueueManager} from '../common/queue'

export class ACS {
  private static _TAG = 'ACS'
  private static instance: ACS

  public static getInstance(): ACS {
    return this.instance || (this.instance = new this())
  }

  constructor() {
    ACSPostMessage.addOrigin(self.location.origin.toString())
  }

  //#region configure of SDK
  public static configure(value: AceConfiguration, callback: ACSCallback): void
  public static configure(value: AceConfiguration): Promise<ACEResponseToCaller>
  public static configure(value: AceConfiguration, callback?: ACSCallback): Promise<ACEResponseToCaller> | void {
    return ACS.getInstance().configure(value, callback)
  }

  private callbackForTaskInQueue = (error?: object, innerResult?: ACEResponseToCaller) => {
    if (error) {
      ACELog.d(ACS._TAG, 'Fail while process queue task.', error)
    } else {
      ACELog.d(ACS._TAG, 'Done send for task in queue.', innerResult ?? {})
    }
  }

  private callbackForQueue = (param: ACParams | undefined) => {
    if (param && ControlTowerManager.isEnableByPolicy()) {
      ACELog.d(ACS._TAG, `Start task what pop waitQueue. ${param.type}`)
      ACS._send(param, this.callbackForTaskInQueue)
    }
  }

  configure(value: AceConfiguration, callback: ACSCallback | undefined): void
  configure(value: AceConfiguration): Promise<ACEResponseToCaller>
  configure(value: AceConfiguration, callback?: ACSCallback | undefined): Promise<ACEResponseToCaller> | void {
    if (callback) {
      const callbackAtInit = (error?: object, innerResult?: ACEResponseToCaller) => {
        if (error) {
          callback(new Error(`0000, Can not init SDK.`), innerResult)
        } else {
          callback(undefined, innerResult)
          QueueManager.pop(this.callbackForQueue)
        }
      }

      ACECommonStaticConfig.configure(value, callbackAtInit)
    } else {
      return new Promise((resolveToOut, rejectToOut) => {
        ACECommonStaticConfig.configure(value)
          .then(res => {
            resolveToOut(res)
          })
          .then(unUsed => {
            ACELog.d(ACS._TAG, '0000::configure::then:')
            QueueManager.pop(this.callbackForQueue)
          })
          .catch(err => {
            ACELog.d(ACS._TAG, '0000::configure::catch:', err)
            rejectToOut(err)
          })
      })
    }
  }
  //#endregion

  //#region send of public
  public static send(value: ACParams, callback: ACSCallback): void
  public static send(value: ACParams): Promise<ACEResponseToCaller>
  public static send(value: ACParams, callback?: ACSCallback): Promise<ACEResponseToCaller> | void {
    ACELog.d(ACS._TAG, `send::getIsCompletePolicy: ${ControlTowerManager.getIsCompletePolicy()}`)
    if (!ControlTowerManager.getIsCompletePolicy()) {
      this._pushAtQueue(value)
      const result: ACEResponseToCaller = {
        taskHash: `${value.type}::0405`,
        code: ACEResultCode.NotReceivePolicy,
        result: ACEConstantResultForCallback.Failed,
        message: 'Not receive policy for SDK. It will send after init.',
        apiName: value.type,
      }

      if (callback) {
        callback(new Error('Not receive policy for SDK. It will send after init.'), result)
        return
      } else {
        return new Promise((resolveToOut, rejectToOut) => {
          rejectToOut(result)
        })
      }
    }

    ACELog.d(ACS._TAG, `send::isEnableByPolicy: ${ControlTowerManager.isEnableByPolicy()}`)
    if (!ControlTowerManager.isEnableByPolicy()) {
      this._pushAtQueue(value)
      const result: ACEResponseToCaller = {
        taskHash: `${value.type}::0406`,
        code: ACEResultCode.DisabledByPolicy,
        result: ACEConstantResultForCallback.Failed,
        message: 'Disabled by policy of SDK. It will send after init.',
        apiName: value.type,
      }

      if (callback) {
        callback(new Error('Disabled by policy of SDK. It will send after init.'), result)
        return
      } else {
        return new Promise((resolveToOut, rejectToOut) => {
          rejectToOut(result)
        })
      }
    }

    if (QueueManager.isLock()) {
      this._pushAtQueue(value)
      const result: ACEResponseToCaller = {
        taskHash: `${value.type}::0409`,
        code: ACEResultCode.TooBusyWillSendAfterDone,
        result: ACEConstantResultForCallback.Failed,
        message: 'Too busy. It will send after done.',
        apiName: value.type,
      }

      if (callback) {
        callback(new Error('Too busy. It will send after done.'), result)
        return
      } else {
        return new Promise((resolveToOut, rejectToOut) => {
          rejectToOut(result)
        })
      }
    }
    return ACS._send(value, callback)
  }
  //#endregion

  //#region detail of SDK
  public static isEnableSDK(): boolean {
    return ControlTowerManager.getIsSDKEnabled()
  }

  public static getSdkVersion(): string {
    return ACEParameterUtil.getSdkVersionWithPatchToJsonStringify()
  }

  public static getPackageNameOrBundleID(): string | undefined {
    return ACEParameterUtil.getPackageNameOrBundleID()
  }

  public static getSdkDetails(): DetailOfSDK {
    return ACECommonStaticConfig.getSdkDetails()
  }
  //#endregion

  //#region private methods
  private static _pushAtQueue(value: ACParams): void {
    if (value.type === ACParams.TYPE.ONLOAD) QueueManager.pushAtFirst(value)
    else QueueManager.push(value)
  }

  private static _send(value: ACParams, callback: ACSCallback | undefined): void
  private static _send(value: ACParams): Promise<ACEResponseToCaller>
  private static _send(value: ACParams, callback?: ACSCallback | undefined): Promise<ACEResponseToCaller> | void {
    QueueManager.toggleLock()
    ACELog.i(ACS._TAG, 'ACParams is ', value)

    if (callback) {
      const callbackForCB = (error?: object, innerResult?: ACEResponseToCaller) => {
        if (error) {
          ACELog.d(ACS._TAG, 'fail to send', error)
          callback(new Error(`0001, Can not use ${value.type} api.`))
        } else {
          callback(undefined, innerResult)
        }
        QueueManager.toggleLock()
        QueueManager.pop(this.getInstance().callbackForQueue)
      }

      NetworkUtils.isNetworkAvailable()
        .then(isConnected => {
          ACELog.d(ACS._TAG, `isNetworkAvailable::in then::isConnected: ${isConnected}`)
          if (isConnected) {
            switch (value.type) {
              case ACParams.TYPE.APPEAR_PRODUCT:
                ACEReducerForOne.appearProduct(
                  callbackForCB,
                  value.name,
                  value.memberKey,
                  value.productId,
                  value.productName,
                  value.productCategoryName,
                  value.productPrice,
                )
                break
              case ACParams.TYPE.BUY_CANCEL:
              case ACParams.TYPE.BUY_DONE:
                ACEReducerForOne.buy(
                  value.type,
                  callbackForCB,
                  value.name,
                  value.memberKey,
                  value.orderNumber,
                  value.payMethodName,
                  value.products,
                )
                break
              case ACParams.TYPE.ADDCART:
              case ACParams.TYPE.DELCART:
                ACEReducerForOne.cart(value.type, callbackForCB, value.memberKey, value.products)
                break
              case ACParams.TYPE.EVENT:
                ACEReducerForOne.plWithPage(callbackForCB, value.name)
                break
              case ACParams.TYPE.JOIN:
                ACEReducerForOne.join(callbackForCB, value.name, value.userId)
                break
              case ACParams.TYPE.LEAVE:
                ACEReducerForOne.leave(callbackForCB, value.name, value.userId)
                break
              case ACParams.TYPE.LINK:
                ACEReducerForOne.link(callbackForCB, value.name, value.linkName, value.memberKey)
                break
              case ACParams.TYPE.LOGIN:
                ACEReducerForOne.login(
                  callbackForCB,
                  value.name,
                  value.userAge,
                  value.userGender,
                  value.userId,
                  value.userMaritalStatus,
                )
                break
              case ACParams.TYPE.ONLOAD:
                if (value.origin === null || value.origin === undefined) {
                  const result: ACEResponseToCaller = {
                    taskHash: `${value.type}::0411`,
                    code: ACEResultCode.InvalidACParamValues,
                    result: ACEConstantResultForCallback.Failed,
                    message: 'Invalid value in ACParam.origin value.',
                    apiName: value.type,
                  }

                  QueueManager.toggleLock()
                  QueueManager.pop(this.getInstance().callbackForQueue)
                  callback(undefined, result)
                  return
                }
                ACSPostMessage.addOriginArray(value.origin)
                ACEReducerForOne.onLoad(callbackForCB, value.key, value.name, value.origin)
                break
              case ACParams.TYPE.PUSH:
                ACEReducerForOne.push(callbackForCB, value.data, value.push)
                break
              case ACParams.TYPE.REFERRER:
                const _keyword = getQueryForKey(decode(value.keyword ?? ACECONSTANT.EMPTY), ACECONSTANT.ReferrerKeyName)
                if (isEmpty(_keyword)) {
                  const result: ACEResponseToCaller = {
                    taskHash: `${value.type}::0410`,
                    code: ACEResultCode.InvalidACParamValues,
                    result: ACEConstantResultForCallback.Failed,
                    message: 'Invalid value in ACParam object.',
                    apiName: value.type,
                  }

                  QueueManager.toggleLock()
                  QueueManager.pop(this.getInstance().callbackForQueue)
                  callback(undefined, result)
                  return
                }
                ACEReducerForOne.referrer(callbackForCB, _keyword)
                break
              case ACParams.TYPE.SEARCH:
                ACEReducerForOne.search(callbackForCB, value.name, value.keyword)
                break
              case ACParams.TYPE.TEL:
                ACEReducerForOne.tel(callbackForCB, value.name, value.memberKey, value.tel)
                break
            }
          } else {
            const result: ACEResponseToCaller = {
              taskHash: `${value.type}::0407`,
              code: ACEResultCode.NotConnectToTheInternet,
              result: ACEConstantResultForCallback.Failed,
              message: 'Not connect to the internet.',
              apiName: value.type,
            }

            QueueManager.toggleLock()
            QueueManager.pop(this.getInstance().callbackForQueue)
            callback(undefined, result)
          }
        })
        .catch(err => {
          ACELog.e(ACS._TAG, 'isNetworkAvailable::in catch::err', err)
          const result: ACEResponseToCaller = {
            taskHash: `${value.type}::0408`,
            code: ACEResultCode.UnknownConnectStateToTheInternet,
            result: ACEConstantResultForCallback.Failed,
            message: 'Unknown connect state to the internet.',
            apiName: value.type,
          }

          QueueManager.toggleLock()
          QueueManager.pop(this.getInstance().callbackForQueue)
          callback(undefined, result)
        })
    } else {
      return new Promise((resolveToOut, rejectToOut) => {
        const callbackForPromise = (error?: object, innerResult?: ACEResponseToCaller) => {
          if (error) {
            if (innerResult) {
              rejectToOut(innerResult)
            } else {
              rejectToOut(new Error(`0002, Can not use ${value.type} api.`))
            }
          } else {
            if (innerResult) resolveToOut(innerResult)
          }
          QueueManager.toggleLock()
          QueueManager.pop(this.getInstance().callbackForQueue)
        }

        NetworkUtils.isNetworkAvailable()
          .then(isConnected => {
            ACELog.d(ACS._TAG, `isNetworkAvailable::in then::isConnected: ${isConnected}`)
            if (isConnected) {
              switch (value.type) {
                case ACParams.TYPE.APPEAR_PRODUCT:
                  ACEReducerForOne.appearProduct(
                    callbackForPromise,
                    value.name,
                    value.memberKey,
                    value.productId,
                    value.productName,
                    value.productCategoryName,
                    value.productPrice,
                  )
                  break
                case ACParams.TYPE.BUY_CANCEL:
                case ACParams.TYPE.BUY_DONE:
                  ACEReducerForOne.buy(
                    value.type,
                    callbackForPromise,
                    value.name,
                    value.memberKey,
                    value.orderNumber,
                    value.payMethodName,
                    value.products,
                  )
                  break
                case ACParams.TYPE.ADDCART:
                case ACParams.TYPE.DELCART:
                  ACEReducerForOne.cart(value.type, callbackForPromise, value.memberKey, value.products)
                  break
                case ACParams.TYPE.EVENT:
                  ACEReducerForOne.plWithPage(callbackForPromise, value.name)
                  break
                case ACParams.TYPE.JOIN:
                  ACEReducerForOne.join(callbackForPromise, value.name, value.userId)
                  break
                case ACParams.TYPE.LEAVE:
                  ACEReducerForOne.leave(callbackForPromise, value.name, value.userId)
                  break
                case ACParams.TYPE.LINK:
                  ACEReducerForOne.link(callbackForPromise, value.name, value.linkName, value.memberKey)
                  break
                case ACParams.TYPE.LOGIN:
                  ACEReducerForOne.login(
                    callbackForPromise,
                    value.name,
                    value.userAge,
                    value.userGender,
                    value.userId,
                    value.userMaritalStatus,
                  )
                  break
                case ACParams.TYPE.ONLOAD:
                  if (value.origin === null || value.origin === undefined) {
                    const result: ACEResponseToCaller = {
                      taskHash: `${value.type}::0411`,
                      code: ACEResultCode.InvalidACParamValues,
                      result: ACEConstantResultForCallback.Failed,
                      message: 'Invalid value in ACParam.origin value.',
                      apiName: value.type,
                    }

                    QueueManager.toggleLock()
                    QueueManager.pop(this.getInstance().callbackForQueue)
                    rejectToOut(result)
                    return
                  }
                  ACSPostMessage.addOriginArray(value.origin)
                  ACEReducerForOne.onLoad(callbackForPromise, value.key, value.name, value.origin)
                  break
                case ACParams.TYPE.PUSH:
                  ACEReducerForOne.push(callbackForPromise, value.data, value.push)
                  break
                case ACParams.TYPE.REFERRER:
                  const _keyword = getQueryForKey(
                    decode(value.keyword ?? ACECONSTANT.EMPTY),
                    ACECONSTANT.ReferrerKeyName,
                  )
                  if (isEmpty(_keyword)) {
                    const result: ACEResponseToCaller = {
                      taskHash: `${value.type}::0410`,
                      code: ACEResultCode.InvalidACParamValues,
                      result: ACEConstantResultForCallback.Failed,
                      message: 'Invalid value in ACParam object.',
                      apiName: value.type,
                    }

                    QueueManager.toggleLock()
                    QueueManager.pop(this.getInstance().callbackForQueue)
                    rejectToOut(result)
                    return
                  }
                  ACEReducerForOne.referrer(callbackForPromise, _keyword)
                  break
                case ACParams.TYPE.SEARCH:
                  ACEReducerForOne.search(callbackForPromise, value.name, value.keyword)
                  break
                case ACParams.TYPE.TEL:
                  ACEReducerForOne.tel(callbackForPromise, value.name, value.memberKey, value.tel)
                  break
              }
            } else {
              const result: ACEResponseToCaller = {
                taskHash: `${value.type}::0407`,
                code: ACEResultCode.NotConnectToTheInternet,
                result: ACEConstantResultForCallback.Failed,
                message: 'Not connect to the internet.',
                apiName: value.type,
              }

              rejectToOut(result)
              QueueManager.toggleLock()
              QueueManager.pop(this.getInstance().callbackForQueue)
            }
          })
          .catch(err => {
            ACELog.e(ACS._TAG, 'isNetworkAvailable::in catch::err', err)
            const result: ACEResponseToCaller = {
              taskHash: `${value.type}::0408`,
              code: ACEResultCode.UnknownConnectStateToTheInternet,
              result: ACEConstantResultForCallback.Failed,
              message: 'Unknown connect state to the internet.',
              apiName: value.type,
            }

            QueueManager.toggleLock()
            rejectToOut(result)
          })
      })
    }
  }
  //#endregion

  //#region AdvertisingIdentifier
  public static setAdvertisingIdentifier(isAdvertisingTrackingEnabled: boolean, advertisingIdentifier: string): void {
    ACECommonStaticConfig.setAdvertisingIdentifier(isAdvertisingTrackingEnabled, advertisingIdentifier)
  }
  //#endregion

  //#region AceWebViewInterface
  public static getKey(): string {
    return ACECommonStaticConfig.getKey()
  }

  public static getTS(): string {
    const parameterUtil = ACECommonStaticConfig.getParameterUtil()
    return parameterUtil ? JSON.stringify(parameterUtil.getTS()) : '{}'
  }
  //#endregion

  //#region ACSPostMessage wrappers
  public static addDependency(
    iframeRef: React.RefObject<HTMLIFrameElement>,
    destinationDomain: string,
    latency?: number,
  ) {
    ACSPostMessage.addDependency(iframeRef, destinationDomain, latency)
  }

  public static addRequestReady(
    identity: string,
    iframeRef: React.RefObject<HTMLIFrameElement>,
    destinationDomain: string,
  ): boolean {
    return ACSPostMessage.addRequestReady(identity, iframeRef, destinationDomain)
  }

  public static removeDependencices() {
    ACSPostMessage.removeDependencices()
  }

  public static printDependencies() {
    ACSPostMessage.printDependencies()
  }

  public static addOrigin(domain: string | undefined) {
    ACSPostMessage.addOrigin(domain)
  }

  public static handleMessage(e: Event) {
    return ACSPostMessage.handleMessage(e)
  }
  //#endregion
}
