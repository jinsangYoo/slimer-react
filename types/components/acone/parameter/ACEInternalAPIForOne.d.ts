import { ACParams } from '../acparam';
import IACECommonAPI from '../../common/parameter/IACECommonAPI';
import { ACEResponseToCaller } from '../../common/constant/ACEPublicStaticConfig';
export default class ACEInternalAPIForOne implements IACECommonAPI {
    constructor();
    requestPolicy(callback: (error?: object, result?: ACEResponseToCaller) => void): void;
    requestPolicy(): Promise<ACEResponseToCaller>;
    send(value: ACParams, callback: (error?: object, result?: object) => void): void;
    send(value: ACParams): Promise<object>;
}
