import ACOTask from '../task/ACOTask'
import {ITaskParams} from '../../common/task/ITaskParams'
import {ACEResponseToCaller} from '../../common/constant/ACEPublicStaticConfig'
import ACELog from '../../common/logger/ACELog'
import {getBrowserName, isEqualSelfWindowAndParentWindow, isSupportNativeSDK} from '../../common/util'

export default class APIForOnLoad extends ACOTask {
  private static _p1TAG = 'APIForOnLoad'

  public constructor(params: ITaskParams) {
    super(params)
    ACELog.d(APIForOnLoad._p1TAG, 'in constructor, params:', params)
  }

  public doWork(callback: ((error?: object, result?: ACEResponseToCaller) => void) | undefined) {
    super.doWork(callback)
    ACELog.d(APIForOnLoad._p1TAG, 'doWork')

    ACELog.d(APIForOnLoad._p1TAG, `isSupportNativeSDK(): ${isSupportNativeSDK()}`)
    ACELog.d(APIForOnLoad._p1TAG, `getBrowserName(): ${getBrowserName()}`)
    ACELog.d(APIForOnLoad._p1TAG, `isEqualSelfWindowAndParentWindow(): ${isEqualSelfWindowAndParentWindow()}`)

    if (isSupportNativeSDK()) {
    } else {
      if (!isEqualSelfWindowAndParentWindow()) {
        // window.postMessage
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
