import {ACParams} from '../../acone/acparam'
import {ACEResponseToCaller} from '../constant/ACEPublicStaticConfig'

export default interface IACECommonAPI {
  requestPolicy(key: string, callback: (error?: object, result?: ACEResponseToCaller) => void): void
  requestPolicy(key: string): Promise<ACEResponseToCaller>
  requestPolicy(
    key: string,
    callback?: (error?: object, result?: ACEResponseToCaller) => void,
  ): Promise<ACEResponseToCaller> | void

  send(value: ACParams, callback: (error?: object, result?: object) => void): void
  send(value: ACParams): Promise<object>
  send(value: ACParams, callback?: (error?: object, result?: object) => void): Promise<object> | void
}
