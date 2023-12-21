import ACOTask from '../task/ACOTask'
import {ITaskParams} from '../../common/task/ITaskParams'
import type {ACSCallback} from '../../common/constant/ACEPublicStaticConfig'
import ACELog from '../../common/logger/ACELog'
import ACECONSTANT from '../../common/constant/ACEConstant'
import {getBrowserName, isTopWindow} from '../../common/util'
import ACSPostMessageType from '../../common/constant/ACSPostMessageType'
import type {ACEResponseToCaller} from '../../common/constant/ACEPublicStaticConfig'
import {ACEResultCode, ACEConstantResultForCallback} from '../../common/constant/ACEPublicStaticConfig'
import {makeSuccessCallback, makeFailCallback} from '../../common/util'

export default class APIForOnLoad extends ACOTask {
  private static _p1TAG = 'APIForOnLoad'
  protected key: string
  protected pageName?: string
  protected parentOrigin: string[]

  public constructor(params: ITaskParams) {
    super(params)
    ACELog.d(APIForOnLoad._p1TAG, 'in constructor, params:', params)
    this.key = params.payload.key ?? ACECONSTANT.EMPTY
    this.pageName = params.payload.pageName
    this.parentOrigin = params.payload.origin ?? []
  }

  public doWork(callback: ACSCallback | undefined) {
    super.doWork(callback)
    ACELog.d(APIForOnLoad._p1TAG, 'doWork')

    ACELog.d(APIForOnLoad._p1TAG, `getBrowserName(): ${getBrowserName()}`)
    ACELog.d(APIForOnLoad._p1TAG, `isTopWindow(): ${isTopWindow()}`)

    if (!isTopWindow()) {
      let paramToWindowParentPostMessage = {
        type: ACSPostMessageType.reqReady,
        token: -1,
        location: self.location.origin.toString(),
        payload: {
          uniqueKey: this.key,
          eventName: this.pageName,
        },
      }
      ACELog.d(APIForOnLoad._p1TAG, 'paramToWindowParentPostMessage:', paramToWindowParentPostMessage)
      this.parentOrigin.map(origin => {
        window.parent.postMessage(paramToWindowParentPostMessage, origin)
      })
      if (callback) {
        const res: ACEResponseToCaller = {
          taskHash: `${this._logSource}::0013`,
          code: ACEResultCode.Success,
          // @ts-ignore
          result: ACEConstantResultForCallback[ACEConstantResultForCallback.Success],
          message: `Postmessage to window.parent(${ACSPostMessageType.reqReady}, parentOrigin:${this.parentOrigin.join(
            ', ',
          )}).`,
          apiName: this.getDescription(),
        }
        callback(undefined, res)
      }
    } else {
      ACELog.d(APIForOnLoad._p1TAG, 'maybe root for position.')
      this.failed({
        // @ts-ignore
        result: ACEConstantResultForCallback[ACEConstantResultForCallback.Failed],
        message: 'Maybe root for position.',
      })
      if (callback) {
        const res: ACEResponseToCaller = {
          taskHash: `${this._logSource}::0014`,
          code: ACEResultCode.MaybeRootForPosition,
          // @ts-ignore
          result: ACEConstantResultForCallback[ACEConstantResultForCallback.Failed],
          message: 'Maybe root for position.',
          apiName: this.getDescription(),
        }
        callback(undefined, res)
      }
    }
  }

  public didWork(callback: ACSCallback | undefined): void {
    super.didWork(callback)
    ACELog.d(APIForOnLoad._p1TAG, 'didWork')
    if (callback) {
      if (this._error) {
        callback(this.getNetworkError(), makeFailCallback(this))
      } else {
        callback(undefined, makeSuccessCallback(this))
      }
    }
  }

  public failed(err: any) {
    super.failed(err)
    ACELog.d(APIForOnLoad._p1TAG, 'failed')
  }
}
