import ACOTask from '../task/ACOTask'
import {ITaskParams} from '../../common/task/ITaskParams'
import {ACEResponseToCaller} from '../../common/constant/ACEPublicStaticConfig'
import ACELog from '../../common/logger/ACELog'
import ACECONSTANT from '../../common/constant/ACEConstant'
import {
  getBrowserName,
  isEqualSelfWindowAndParentWindow,
  isSupportNativeSDK,
  isIOS,
  isAOS,
  sendLoadedToIOS,
  printInterfaceForAOS,
} from '../../common/util'

export default class APIForOnLoad extends ACOTask {
  private static _p1TAG = 'APIForOnLoad'
  protected key: string
  protected origin: string

  public constructor(params: ITaskParams) {
    super(params)
    ACELog.d(APIForOnLoad._p1TAG, 'in constructor, params:', params)
    this.key = params.payload.key ?? ACECONSTANT.EMPTY
    this.origin = params.payload.origin ?? ACECONSTANT.EMPTY
  }

  public doWork(callback: ((error?: object, result?: ACEResponseToCaller) => void) | undefined) {
    super.doWork(callback)
    ACELog.d(APIForOnLoad._p1TAG, 'doWork')

    ACELog.d(APIForOnLoad._p1TAG, `isSupportNativeSDK(): ${isSupportNativeSDK()}`)
    ACELog.d(APIForOnLoad._p1TAG, `getBrowserName(): ${getBrowserName()}`)
    ACELog.d(APIForOnLoad._p1TAG, `isEqualSelfWindowAndParentWindow(): ${isEqualSelfWindowAndParentWindow()}`)

    if (isSupportNativeSDK()) {
      ACELog.d(APIForOnLoad._p1TAG, 'SupportNativeSDK')
      if (isIOS()) {
        sendLoadedToIOS()
      } else if (isAOS()) {
        printInterfaceForAOS()
      } else {
        ACELog.d(APIForOnLoad._p1TAG, 'not detect platform.')
      }
    } else {
      if (!isEqualSelfWindowAndParentWindow()) {
        let paramToWindowParentPostMessage = {
          type: 'ACS.reqReady',
          token: -1,
          location: self.location.toString(),
          uniqueKey: this.key,
        }
        ACELog.d(APIForOnLoad._p1TAG, 'paramToWindowParentPostMessage:', paramToWindowParentPostMessage)
        window.parent.postMessage(paramToWindowParentPostMessage, this.origin)
      } else {
        ACELog.d(APIForOnLoad._p1TAG, 'maybe root for position.')
      }
    }
  }

  public didWork(callback: ((error?: object, result?: ACEResponseToCaller) => void) | undefined): void {
    super.didWork(callback)
    ACELog.d(APIForOnLoad._p1TAG, 'didWork')
    this.doneWork(callback)
  }

  public doneWork(callback: ((error?: object, result?: ACEResponseToCaller) => void) | undefined) {
    super.doneWork(callback)
    ACELog.d(APIForOnLoad._p1TAG, 'doneWork')
  }
}
