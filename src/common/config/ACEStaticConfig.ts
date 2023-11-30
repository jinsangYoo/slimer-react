import {AceConfiguration} from '../../acone/aceconfiguration'
import type {ACEPlatform} from '../../acone/aceconfiguration'
import IACECommonAPI from '../parameter/IACECommonAPI'
import IACEParameterUtil from '../parameter/IACEParameterUtil'
import type {ACSCallback, ACEResponseToCaller} from '../constant/ACEPublicStaticConfig'

export default interface ACEStaticConfig {
  _commonAPI: IACECommonAPI

  configure(configuration: AceConfiguration, callback: ACSCallback | undefined): void
  configure(configuration: AceConfiguration): Promise<ACEResponseToCaller>
  configure(configuration: AceConfiguration, callback?: ACSCallback | undefined): Promise<ACEResponseToCaller> | void

  isDebug(): boolean
  getEnablePrivacyPolicy(): boolean
  getKey(): string
  setKey(value: string): void
  getPlatform(): ACEPlatform

  getParameterUtil(): IACEParameterUtil | undefined
  getCommonAPI(): IACECommonAPI | undefined
}
