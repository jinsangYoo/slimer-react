import {AceConfiguration} from '../../acone/aceconfiguration'
import type {ACEPlatform} from '../../acone/aceconfiguration'

export default class Configuration {
  private _debug: boolean
  private _key: string
  private _enablePrivacyPolicy: boolean
  private _platform: ACEPlatform
  private static instance: Configuration

  public constructor() {
    this._enablePrivacyPolicy = false
    this._debug = true
    this._key = 'empty'
    this._platform = AceConfiguration.PLATFORM.DEFAULT
  }

  public static getInstance(): Configuration {
    return this.instance || (this.instance = new this())
  }

  public configure(configuration: AceConfiguration): void {
    this._key = configuration.key
    if (configuration.platform) this._platform = configuration.platform
    if (configuration.enablePrivacyPolicy) this._enablePrivacyPolicy = configuration.enablePrivacyPolicy
    if (configuration.debug) this._debug = configuration.debug
  }

  public static isDebug(): boolean {
    return Configuration.getInstance()._debug
  }
  public static getEnablePrivacyPolicy(): boolean {
    return Configuration.getInstance()._enablePrivacyPolicy
  }
  public static getKey(): string {
    return Configuration.getInstance()._key
  }
  public static getPlatform(): ACEPlatform {
    return Configuration.getInstance()._platform
  }

  public static getConfiguration(): Configuration {
    return Configuration.getInstance()
  }
}
