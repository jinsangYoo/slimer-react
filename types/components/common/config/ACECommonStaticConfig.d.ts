import { AceConfiguration } from '../../acone/aceconfiguration';
import IACEParameterUtil from '../parameter/IACEParameterUtil';
import { ACEResponseToCaller } from '../constant/ACEPublicStaticConfig';
export default class ACECommonStaticConfig {
    private static _TAG;
    private static _staticConfigImpl;
    private static _platform;
    static configure(configuration: AceConfiguration, callback: ((error?: Error, result?: ACEResponseToCaller) => void) | undefined): void;
    static configure(configuration: AceConfiguration): Promise<ACEResponseToCaller>;
    private static validateForAceConfiguration;
    static isDebug(): boolean;
    static getEnablePrivacyPolicy(): boolean;
    static getKey(): string;
    static getParameterUtil(): IACEParameterUtil | undefined;
    static setAdvertisingIdentifier(advertisingIdentifier: string): void;
}
