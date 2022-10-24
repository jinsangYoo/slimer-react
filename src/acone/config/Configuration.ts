import {AceConfiguration} from '../../acone/aceconfiguration'

export default class Configuration {
  private _debug: boolean
  private _key: string
  private _enablePrivacyPolicy: boolean
  private static instance: Configuration

  public constructor() {
    this._enablePrivacyPolicy = false
    this._debug = true
    this._key = 'empty'
  }

  public static getInstance(): Configuration {
    return this.instance || (this.instance = new this())
  }

  public configure(configuration: AceConfiguration): void {
    this._key = configuration.key
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

  public static getConfiguration(): Configuration {
    return Configuration.getInstance()
  }
}
