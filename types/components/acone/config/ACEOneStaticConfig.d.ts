import { AceConfiguration } from '../../acone/aceconfiguration';
import ACEStaticConfig from '../../common/config/ACEStaticConfig';
import IACECommonAPI from '../../common/parameter/IACECommonAPI';
import IACEParameterUtil from '../../common/parameter/IACEParameterUtil';
import { ACEResponseToCaller } from '../../common/constant/ACEPublicStaticConfig';
export default class ACEOneStaticConfig implements ACEStaticConfig {
    _debug: boolean;
    _key: string;
    _commonAPI: IACECommonAPI;
    private _enablePrivacyPolicy;
    constructor();
    configure(configuration: AceConfiguration, callback: ((error?: Error, result?: ACEResponseToCaller) => void) | undefined): void;
    configure(configuration: AceConfiguration): Promise<ACEResponseToCaller>;
    isDebug(): boolean;
    getEnablePrivacyPolicy(): boolean;
    getKey(): string;
    getCommonAPI(): IACECommonAPI | undefined;
    getParameterUtil(): IACEParameterUtil | undefined;
}
