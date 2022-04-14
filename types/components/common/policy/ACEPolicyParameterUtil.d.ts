import ACENetworkResult from '../http/ACENetworkResult';
export default class ACEPolicyParameterUtil {
    private static _TAG;
    private static instance;
    private static readonly REPEAT_PULLING_INTERVAL_SECOND_DEFAULT;
    private static REPEAT_PULLING_INTERVAL_SECOND;
    static getInstance(): ACEPolicyParameterUtil;
    private constructor();
    savePolicy(result: ACENetworkResult): void;
}
