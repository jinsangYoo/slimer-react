import { SDKMode, NetworkMode } from '../constant/SDKMode';
export default class ControlTower {
    private static _pTAG;
    protected _sdk_mode: SDKMode;
    protected _network_mode: NetworkMode;
    protected _isCompletePolicy: boolean;
    protected _isInstallReferrerDone: boolean;
    protected _isSDKForceStop: boolean;
    protected _isSDKEnabled: boolean;
    private static instance;
    static getInstance(): ControlTower;
    constructor();
    reset(): void;
    getIsCompletePolicy(): boolean;
    setIsCompletePolicy(isCompletePolicy: boolean, isSucceedRequestPolicy: boolean): void;
    protected isDisabled(): boolean;
    setSDKDisable(): void;
    isEnableByPolicy(): boolean;
    getIsSDKEnabled(): boolean;
    getSDKMode(): SDKMode;
    setSDKMode(value: SDKMode): void;
    getNetworkMode(): NetworkMode;
    setNetworkMode(value: NetworkMode): void;
    enableForceStop(): void;
    setDevSDKMode(): void;
    setProductionSDKMode(): void;
    static getDefaultNetworkMode(): NetworkMode;
}
