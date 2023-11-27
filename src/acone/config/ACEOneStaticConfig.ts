import {AceConfiguration} from '../../acone/aceconfiguration'
import type {ACEPlatform} from '../../acone/aceconfiguration'
import ACEStaticConfig from '../../common/config/ACEStaticConfig'
import ACEParameterUtilForOne from '../parameter/ACEParameterUtilForOne'
import IACECommonAPI from '../../common/parameter/IACECommonAPI'
import ACEInternalAPIForOne from '../parameter/ACEInternalAPIForOne'
import IACEParameterUtil from '../../common/parameter/IACEParameterUtil'
import {ACEResponseToCaller} from '../../common/constant/ACEPublicStaticConfig'
import Configuration from './Configuration'

export default class ACEOneStaticConfig implements ACEStaticConfig {
  _commonAPI: IACECommonAPI

  public constructor() {
    this._commonAPI = new ACEInternalAPIForOne()
  }

  public configure(
    configuration: AceConfiguration,
    callback: ((error?: Error, result?: ACEResponseToCaller) => void) | undefined,
  ): void
  public configure(configuration: AceConfiguration): Promise<ACEResponseToCaller>
  public configure(
    configuration: AceConfiguration,
    callback?: ((error?: Error, result?: ACEResponseToCaller) => void) | undefined,
  ): Promise<ACEResponseToCaller> | void {
    Configuration.getInstance().configure(configuration)
    return ACEParameterUtilForOne.getInstance().initParameters(
      Configuration.getKey(),
      Configuration.getEnablePrivacyPolicy(),
      callback,
    )
  }
  isDebug(): boolean {
    return Configuration.isDebug()
  }
  getEnablePrivacyPolicy(): boolean {
    return Configuration.getEnablePrivacyPolicy()
  }
  getKey(): string {
    return Configuration.getKey()
  }
  getPlatform(): ACEPlatform {
    return Configuration.getPlatform()
  }
  getCommonAPI(): IACECommonAPI | undefined {
    if (this._commonAPI) {
      return this._commonAPI
    }

    return undefined
  }
  getParameterUtil(): IACEParameterUtil | undefined {
    return ACEParameterUtilForOne.getInstance()
  }
}
