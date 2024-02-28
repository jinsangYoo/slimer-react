import {ITaskParams} from '../../common/task/ITaskParams'
import ACEofAPIForOne from '../../acone/constant/ACEofAPIForOne'
import {AxiosResponse} from 'axios'
import ACENetworkResult from '../../common/http/ACENetworkResult'
import type {
  ACSCallback,
  NetworkResultToResponseToCaller,
  NetworkErrorToResponseToCaller,
} from '../../common/constant/ACEPublicStaticConfig'
import ACELog from '../../common/logger/ACELog'
import Task from '../../common/task/Task'
import ITask from '../../common/task/ITask'

export default class ACOTask extends Task implements ITask {
  private static _aco_TAG = 'ACOTask'
  protected _logSource: ACEofAPIForOne

  protected constructor(params: ITaskParams) {
    super(params)

    this._logSource = params.type
  }

  public doWork(callback: ACSCallback | undefined) {
    super.doWork(callback)
    ACELog.d(ACOTask._aco_TAG, `doWork: ${ACEofAPIForOne[this._logSource]}`)
  }

  public didWork(callback: ACSCallback | undefined): void {
    super.didWork(callback)
    ACELog.d(ACOTask._aco_TAG, `didWork: ${ACEofAPIForOne[this._logSource]}`)
  }

  public doneWork(callback: ACSCallback | undefined) {
    super.doneWork(callback)
    ACELog.d(ACOTask._aco_TAG, `doneWork: ${ACEofAPIForOne[this._logSource]}`)
  }

  protected completed(response: AxiosResponse) {
    super.completed(response)
    ACELog.d(ACOTask._aco_TAG, `completed: ${ACEofAPIForOne[this._logSource]}`)
  }

  protected failed(err: any) {
    super.failed(err)
    ACELog.d(ACOTask._aco_TAG, `failed: ${ACEofAPIForOne[this._logSource]}`, err)
  }

  //#region overrides
  public getLogSource(): number {
    return this._logSource
  }

  public getDescription(): string {
    return ACEofAPIForOne[this._logSource]
  }
  //#endregion

  public getCreateTime(): number {
    return super.getCreateTime()
  }

  public getTaskHash(): string {
    return super.getTaskHash()
  }

  public getNetworkResult(): ACENetworkResult | undefined {
    return super.getNetworkResult()
  }

  public getNetworkError(): JSON | undefined {
    return super.getNetworkError()
  }

  public getNetworkResultToResponseToCaller(): NetworkResultToResponseToCaller {
    return super.getNetworkResultToResponseToCaller()
  }

  public getNetworkErrorToResponseToCaller(): NetworkErrorToResponseToCaller {
    return super.getNetworkErrorToResponseToCaller()
  }
}
