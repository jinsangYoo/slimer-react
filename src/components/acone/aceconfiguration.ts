export type ACEPlatform = 'ACONE'

export type IAceConfiguration = {
  init: (key: string, type?: ACEPlatform, debug?: boolean, enablePrivacyPolicy?: boolean) => AceConfiguration
  PLATFORM: {
    DEFAULT: ACEPlatform
  }
  toJSONString(): string
}

export type AceConfiguration = {
  key: string
  platform?: ACEPlatform
  debug?: boolean
  enablePrivacyPolicy?: boolean
}

export const AceConfiguration: IAceConfiguration = {
  PLATFORM: {
    DEFAULT: 'ACONE',
  },
  init(
    key: string,
    platform = AceConfiguration.PLATFORM.DEFAULT,
    debug = true,
    enablePrivacyPolicy = false,
  ): AceConfiguration {
    return {platform, key, debug, enablePrivacyPolicy}
  },
  toJSONString(): string {
    return JSON.stringify(this)
  },
}
