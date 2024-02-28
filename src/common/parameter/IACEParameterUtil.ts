import {AceConfiguration} from '../../acone/aceconfiguration'
import {AdvertisingIdentifierInSDK, DetailOfSDK, STVT} from '../constant/ACEPublicStaticConfig'

export default interface IACEParameterUtil {
  loadUniqueKeyForSDK(): void
  setFirstLogParameters(): void
  setLogSource(value: number): void

  getSession(): number
  setKeepSession(): void
  setNewSession(): void

  setterForString(key: string, value: string): void

  getSdkDetails(value: AceConfiguration): DetailOfSDK

  getAdvertisingIdentifier(): AdvertisingIdentifierInSDK
  setAdvertisingIdentifier(isAdvertisingTrackingEnabled: boolean, advertisingIdentifier: string): void

  isDuplicateInstallReferrer(value: string): Promise<boolean>

  getTS(): STVT
  setTS(ts: STVT): void
  updateByPostMessage(key: string, callback: (eventName?: string) => void, eventName?: string, ts?: STVT): void
  didUpdateByPostMessage(): void
}
