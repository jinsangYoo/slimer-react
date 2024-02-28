import {SDKMode, NetworkMode} from '../constant/SDKMode'
import {ACEPlatform, AceConfiguration} from '../../acone/aceconfiguration'
import ControlTower from './ControlTower'
import ACEControlTowerForOne from '../../acone/controltower/ACEControlTowerForOne'
import ACELog from '../logger/ACELog'

export default class ControlTowerManager {
  private static _TAG = 'CTM'
  private _platform: ACEPlatform
  private _controlTower: ControlTower

  private static instance: ControlTowerManager

  public static getInstance(): ControlTowerManager
  public static getInstance(platform?: ACEPlatform): ControlTowerManager {
    return this.instance || (this.instance = new this(platform))
  }

  public constructor(platform: ACEPlatform = AceConfiguration.PLATFORM.DEFAULT) {
    if (platform) {
      this._platform = platform
    }

    switch (this._platform) {
      default:
        this._controlTower = new ACEControlTowerForOne()
        break
    }
  }

  public getIsCompletePolicy(): boolean {
    return this._controlTower.getIsCompletePolicy()
  }

  public setIsCompletePolicy(isCompletePolicy: boolean, isSucceedRequestPolicy: boolean) {
    this._controlTower.setIsCompletePolicy(isCompletePolicy, isSucceedRequestPolicy)
  }

  protected isDisabled(): boolean {
    const currentIsCompletePolicy = this.getIsCompletePolicy()
    const currentIsSDKEnabled = this.getIsSDKEnabled()
    ACELog.d(
      ControlTowerManager._TAG,
      `getIsCompletePolicy(): ${currentIsCompletePolicy}, getIsSDKEnabled(): ${currentIsSDKEnabled}`,
    )

    if (currentIsCompletePolicy && !currentIsSDKEnabled) {
      ACELog.d(ControlTowerManager._TAG, 'SDK is disabled.')
      return true
    }

    return false
  }

  protected getIsSDKEnabled(): boolean {
    return this._controlTower.getIsSDKEnabled()
  }

  public setSDKDisable(): void {
    this._controlTower.setSDKDisable()
  }

  public isEnableByPolicy(): boolean {
    return this._controlTower.isEnableByPolicy()
  }

  public getSDKMode(): SDKMode {
    return this._controlTower.getSDKMode()
  }

  public setSDKMode(value: SDKMode): void {
    this._controlTower.setSDKMode(value)
  }

  public getNetworkMode(): NetworkMode {
    return this._controlTower.getNetworkMode()
  }

  public setNetworkMode(value: NetworkMode): void {
    this._controlTower.setNetworkMode(value)
  }

  public enableForceStop(): void {
    this._controlTower.enableForceStop()
  }

  public isEnableForceStop(): boolean {
    return this._controlTower.isEnableForceStop()
  }

  public isDevSDKMode(): boolean {
    return this._controlTower.isDevSDKMode()
  }

  public setDevSDKMode(): void {
    this._controlTower.setDevSDKMode()
  }

  public setProductionSDKMode(): void {
    this._controlTower.setProductionSDKMode()
  }

  public setHomeDevNetworkMode(): void {
    this._controlTower.setNetworkMode(NetworkMode.HOME_dev)
  }

  public printNetworkMode(): string {
    switch (this._controlTower.getNetworkMode()) {
      case NetworkMode.COMPANY_dev:
        return 'COMPANY_dev'
      case NetworkMode.HOME_dev:
        return 'HOME_dev'
      case NetworkMode.Pro:
        return 'Pro'
      default:
        return 'unknown'
    }
  }

  public succeedRequestPolicy(): void {
    this._controlTower.setIsCompletePolicy(true, true)
  }

  public failedRequestPolicy(): void {
    this._controlTower.setIsCompletePolicy(true, false)
  }

  public reset(): void {
    return this._controlTower.reset()
  }

  //#region static
  public static getIsSDKEnabled(): boolean {
    return ControlTowerManager.getInstance().getIsSDKEnabled()
  }

  public static getCurrentSDKkModeName(): string {
    return SDKMode[ControlTowerManager.getInstance().getSDKMode()]
  }

  public static getCurrentNetworkModeName(): string {
    return NetworkMode[ControlTowerManager.getInstance().getNetworkMode()]
  }

  public static getDefaultNetworkMode(): NetworkMode {
    return ControlTower.getDefaultNetworkMode()
  }

  public static setDefaultNetworkMode(): void {
    ControlTowerManager.getInstance().setNetworkMode(ControlTowerManager.getDefaultNetworkMode())
  }

  public static isDevSDKMode(): boolean {
    return ControlTowerManager.getInstance().isDevSDKMode()
  }

  public static setDevSDKMode(): void {
    ControlTowerManager.getInstance().setDevSDKMode()
  }

  public static getIsCompletePolicy(): boolean {
    return ControlTowerManager.getInstance().getIsCompletePolicy()
  }

  public static isEnableByPolicy(): boolean {
    return ControlTowerManager.getInstance().isEnableByPolicy()
  }

  public static isEnableForceStop(): boolean {
    return ControlTowerManager.getInstance().isEnableForceStop()
  }

  public static reset(): void {
    return ControlTowerManager.getInstance().reset()
  }
  //#endregion
}
