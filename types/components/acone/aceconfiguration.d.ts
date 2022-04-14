export declare type ACEPlatform = 'ACONE';
export declare type IAceConfiguration = {
    init: (key: string, type?: ACEPlatform, debug?: boolean, enablePrivacyPolicy?: boolean) => AceConfiguration;
    PLATFORM: {
        DEFAULT: ACEPlatform;
    };
    toJSONString(): string;
};
export declare type AceConfiguration = {
    key: string;
    platform?: ACEPlatform;
    debug?: boolean;
    enablePrivacyPolicy?: boolean;
};
export declare const AceConfiguration: IAceConfiguration;
