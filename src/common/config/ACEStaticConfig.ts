import {AceConfiguration} from '../../acone/aceconfiguration'
import type {ACEPlatform} from '../../acone/aceconfiguration'
import IACECommonAPI from '../parameter/IACECommonAPI'
import IACEParameterUtil from '../parameter/IACEParameterUtil'
import {ACEResponseToCaller} from '../constant/ACEPublicStaticConfig'

export default interface ACEStaticConfig {
  _commonAPI: IACECommonAPI

  configure(
    configuration: AceConfiguration,
    callback: ((error?: Error, result?: ACEResponseToCaller) => void) | undefined,
  ): void
  configure(configuration: AceConfiguration): Promise<ACEResponseToCaller>
  configure(
    configuration: AceConfiguration,
    callback?: ((error?: Error, result?: ACEResponseToCaller) => void) | undefined,
  ): Promise<ACEResponseToCaller> | void

  isDebug(): boolean
  getEnablePrivacyPolicy(): boolean
  getKey(): string
  setKey(value: string): void
  getPlatform(): ACEPlatform

  getParameterUtil(): IACEParameterUtil | undefined
  getCommonAPI(): IACECommonAPI | undefined
}
