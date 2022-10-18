import {AxiosResponse} from 'axios'

export default class ACENetworkResult {
  private _responseCode: number
  private _responseBody: string
  private _responseHeaders: Map<string, string>

  public constructor(response: AxiosResponse) {
    this._responseCode = response.status
    this._responseBody = response.data
    this._responseHeaders = response.headers
  }

  public getCode(): number {
    return this._responseCode
  }

  public getBody(): string {
    return this._responseBody
  }

  public getHeaders(): Map<string, string> {
    return this._responseHeaders
  }
}
