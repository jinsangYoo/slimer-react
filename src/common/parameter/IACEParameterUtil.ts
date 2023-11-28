import {AceConfiguration} from '../../acone/aceconfiguration'
import {DetailOfSDK, STVT} from '../constant/ACEPublicStaticConfig'
import {ResultAfterSaveInStorage} from '../../acone/parameter/ResultAfterSaveInStorage'

export default interface IACEParameterUtil {
  loadUniqueKeyForSDK(): void
  setFirstLogParameters(): void
  setLogSource(value: number): void

  getSession(): number
  setKeepSession(): void
  setNewSession(): void

  setterForString(key: string, value: string): void

  getSdkDetails(value: AceConfiguration): DetailOfSDK

  setAdvertisingIdentifier(advertisingIdentifier: string): void

  isDuplicateInstallReferrer(value: string): Promise<boolean>

  getTS(): STVT
  setTS(ts: STVT): void
  updateByPostMessage(
    key: string,
    callback: (error?: Error | null, result?: ResultAfterSaveInStorage) => void,
    ts?: STVT,
  ): void
  didUpdateByPostMessage(): void
}
