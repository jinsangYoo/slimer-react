import type {AxiosResponseHeaders} from 'axios'
import {AxiosResponse} from 'axios'

export default class ACENetworkResult {
  private _responseCode: number
  private _responseBody: string
  private _responseHeaders: AxiosResponseHeaders

  public constructor(response: AxiosResponse) {
    this._responseCode = response.status
    this._responseBody = Object.assign(response.data)
    this._responseHeaders = Object.assign(response.headers)
  }

  public getCode(): number {
    return this._responseCode
  }

  public getBody(): string {
    return this._responseBody
  }

  public getHeaders(): AxiosResponseHeaders {
    return this._responseHeaders
  }
}
