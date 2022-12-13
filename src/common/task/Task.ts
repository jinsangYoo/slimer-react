import {ITaskParams} from './ITaskParams'
import {AxiosResponse} from 'axios'
import ACENetworkResult from '../http/ACENetworkResult'
import {
  ACEResponseToCaller,
  NetworkResultToResponseToCaller,
  NetworkErrorToResponseToCaller,
} from '../constant/ACEPublicStaticConfig'
import ACELog from '../logger/ACELog'

export default class Task {
  // private static _c_TAG = 'Task'
  protected _date: number
  protected _response: ACENetworkResult
  protected _error: JSON

  protected constructor(params: ITaskParams) {
    this._date = Date.now()
  }

  public doWork(callback: ((error?: object, result?: ACEResponseToCaller) => void) | undefined) {}

  public didWork(callback: ((error?: object, result?: ACEResponseToCaller) => void) | undefined): void {}

  public doneWork(callback: ((error?: object, result?: ACEResponseToCaller) => void) | undefined) {}

  protected completed(response: AxiosResponse) {
    this._response = new ACENetworkResult(response)
  }

  protected failed(err: any) {
    this._error = JSON.parse(JSON.stringify(err))
  }

  public getCreateTime(): number {
    return this._date
  }

  public getTaskHash(): string {
    return this.getCreateTime().valueOf().toString()
  }

  public getNetworkResult(): ACENetworkResult | undefined {
    return this._response
  }

  public getNetworkError(): JSON | undefined {
    return this._error
  }

  public getNetworkResultToResponseToCaller(): NetworkResultToResponseToCaller {
    if (this._response) {
      if (ACELog.isDevMode()) {
        return {
          config: this._response ?? {},
        }
      } else {
        return {
          config: {},
        }
      }
    } else {
      return {
        config: {},
      }
    }
  }

  public getNetworkErrorToResponseToCaller(): NetworkErrorToResponseToCaller {
    if (this._error) {
      if (ACELog.isDevMode()) {
        return {
          message: this._error['message'] ?? '',
          name: this._error['name'] ?? '',
          config: this._error['config'] ?? {},
        }
      } else {
        return {
          message: this._error['message'] ?? '',
          name: this._error['name'] ?? '',
        }
      }
    } else {
      return {
        message: '',
        name: '',
      }
    }
  }
}
