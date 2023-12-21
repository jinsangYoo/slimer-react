import {ITaskParams} from './ITaskParams'
import {AxiosResponse} from 'axios'
import ACENetworkResult from '../http/ACENetworkResult'
import type {
  ACSCallback,
  NetworkResultToResponseToCaller,
  NetworkErrorToResponseToCaller,
} from '../constant/ACEPublicStaticConfig'
import ACELog from '../logger/ACELog'

export default class Task {
  protected _date: number
  protected _response: ACENetworkResult
  protected _error: JSON

  protected constructor(params: ITaskParams) {
    this._date = Date.now()
  }

  public doWork(callback: ACSCallback | undefined) {}

  public didWork(callback: ACSCallback | undefined): void {}

  public doneWork(callback: ACSCallback | undefined) {}

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
          // @ts-ignore
          message: this._error['message'] ?? '',
          // @ts-ignore
          name: this._error['name'] ?? '',
          // @ts-ignore
          config: this._error['config'] ?? {},
        }
      } else {
        return {
          // @ts-ignore
          message: this._error['message'] ?? '',
          // @ts-ignore
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
