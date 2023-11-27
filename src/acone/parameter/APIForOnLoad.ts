import ACOTask from '../task/ACOTask'
import {ITaskParams} from '../../common/task/ITaskParams'
import {ACEResponseToCaller} from '../../common/constant/ACEPublicStaticConfig'
import ACELog from '../../common/logger/ACELog'
import ACECONSTANT from '../../common/constant/ACEConstant'
import {getBrowserName, isEqualSelfWindowAndParentWindow} from '../../common/util'
import ACSPostMessageType from '../../common/constant/ACSPostMessageType'

export default class APIForOnLoad extends ACOTask {
  private static _p1TAG = 'APIForOnLoad'
  protected key: string
  protected parentOrigin: string[]

  public constructor(params: ITaskParams) {
    super(params)
    ACELog.d(APIForOnLoad._p1TAG, 'in constructor, params:', params)
    this.key = params.payload.key ?? ACECONSTANT.EMPTY
    this.parentOrigin = params.payload.origin ?? []
  }

  public doWork(callback: ((error?: object, result?: ACEResponseToCaller) => void) | undefined) {
    super.doWork(callback)
    ACELog.d(APIForOnLoad._p1TAG, 'doWork')

    ACELog.d(APIForOnLoad._p1TAG, `getBrowserName(): ${getBrowserName()}`)
    ACELog.d(APIForOnLoad._p1TAG, `isEqualSelfWindowAndParentWindow(): ${isEqualSelfWindowAndParentWindow()}`)

    if (!isEqualSelfWindowAndParentWindow()) {
      let paramToWindowParentPostMessage = {
        type: ACSPostMessageType.reqReady,
        token: -1,
        location: self.location.origin.toString(),
        uniqueKey: this.key,
      }
      ACELog.d(APIForOnLoad._p1TAG, 'paramToWindowParentPostMessage:', paramToWindowParentPostMessage)
      ACELog.d(APIForOnLoad._p1TAG, `this.parentOrigin:${this.parentOrigin.join(',')}`)
      this.parentOrigin.map(origin => {
        window.parent.postMessage(paramToWindowParentPostMessage, origin)
      })
    } else {
      ACELog.d(APIForOnLoad._p1TAG, 'maybe root for position.')
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
