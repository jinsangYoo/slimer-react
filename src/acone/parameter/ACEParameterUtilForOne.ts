import ACEParametersForOne from './ACEParametersForOne'
import IACEParameterUtil from '../../common/parameter/IACEParameterUtil'
import ACEParameterUtil from '../../common/parameter/ACEParameterUtil'
import ACECONSTANT from '../../common/constant/ACEConstant'
import ACOneConstantInteger from '../constant/ACOneConstantInteger'
import ACOneConstant from '../constant/ACOneConstant'
import SESSION from '../../common/constant/Session'
import ACEntityForST from './ACEntityForST'
import ACEntityForVT from './ACEntityForVT'
import {
  ACEResponseToCaller,
  ACEConstantResultForCallback,
  ACEResultCode,
  ACEGender,
  ACEMaritalStatus,
  DetailOfSDK,
  STVT,
} from '../../common/constant/ACEPublicStaticConfig'
import {isEmpty, onlyLetteringAtStartIndex, stringToNumber} from '../../common/util/TextUtils'
import ACELog from '../../common/logger/ACELog'
import {getRandom6CharForSTVT} from '../../common/util/NumberUtil'
import ParameterAfterSend from '../constant/ParameterAfterSend'
import {ResultAfterSaveInStorage} from './ResultAfterSaveInStorage'
import IACBuyMode from '../constant/IACBuyMode'
import JN from '../constant/JN'
import ACEofAPIForOne from '../constant/ACEofAPIForOne'
import {AceConfiguration} from '../aceconfiguration'
import ControlTowerManager from '../../common/controltower/ControlTowerManager'
import {LIB_VERSION} from '../../version'
import Incoming from '../../common/constant/Incoming'
import ACOneConstantSt from '../constant/ACOneConstantSt'

export default class ACEParameterUtilForOne implements IACEParameterUtil {
  private static _TAG = 'paramUtilForOne'
  private static instance: ACEParameterUtilForOne
  private _enablePrivacyPolicy: boolean

  public static getInstance(): ACEParameterUtilForOne {
    return this.instance || (this.instance = new this())
  }

  private constructor() {
    this._enablePrivacyPolicy = false
  }
  loadUniqueKeyForSDK(): void {
    ACEParametersForOne.getInstance().setPcStampWhenNotStored()
  }
  setFirstLogParameters(): void {
    throw new Error('Method not implemented.')
  }
  setLogSource(value: number): void {
    throw new Error('Method not implemented.')
  }
  getSdkDetails(value: AceConfiguration): DetailOfSDK {
    const _parametersForOne = ACEParametersForOne.getInstance()
    const _controlTowerManager = ControlTowerManager.getInstance()
    return {
      statuses: {
        configuration: {
          ...value,
        },
        controlTower: {
          isCompletePolicy: _controlTowerManager.getIsCompletePolicy(),
          isForceStop: _controlTowerManager.isEnableForceStop(),
          isInstallReferrerWaitDone: false,
          isSDKEnabled: _controlTowerManager.isEnableByPolicy(),
        },
      },
      internal: {
        adeld: _parametersForOne.getADELD(),
        adid: _parametersForOne.getADID(),
        vt: this.getVT().getObjectForTS(),
        versions: ACEParameterUtil.getSdkVersionWithPatch(),
      },
      result: ACEConstantResultForCallback.Success,
    }
  }

  setAdvertisingIdentifier(advertisingIdentifier: string): void {
    ACEParametersForOne.getInstance().setADID(advertisingIdentifier)
  }

  isDuplicateInstallReferrer(value: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      ACEParametersForOne.getInstance()
        .getInstallReferrer()
        .then(result => {
          ACELog.d(ACEParameterUtilForOne._TAG, `result: ${JSON.stringify(result)}, new referrer: ${value}`)
          if (!isEmpty(result.getValue)) {
            ACELog.d(ACEParameterUtilForOne._TAG, 'Already stored referrer.')
            if (result.getValue == value) {
              ACELog.d(ACEParameterUtilForOne._TAG, 'Same referrer')
            } else {
              resolve(true)
              return
            }
          }
          reject(false)
        })
        .catch(err => {
          ACELog.d(ACEParameterUtilForOne._TAG, `err: ${JSON.stringify(err)}`)
          reject(false)
        })
    })
  }

  getTS(): STVT {
    return {
      st: this.getST().getObjectForTS(),
      vt: this.getVT().getObjectForTS(),
    }
  }

  setTS(ts: STVT) {
    const _parametersForOne = ACEParametersForOne.getInstance()
    _parametersForOne.setSTVTtoST(ts.st)
    _parametersForOne.setSTVTtoVT(ts.vt)
  }

  updateByPostMessage(key: string, callback: (eventName?: string) => void, eventName?: string, ts?: STVT): void {
    const _parametersForOne = ACEParametersForOne.getInstance()
    _parametersForOne.setMID(key)

    if (ts) {
      this.setTS(ts)
      this.saveVT_toInStorage(this.getVT(), (error?: Error | null, result?: ResultAfterSaveInStorage) => {
        if (error) {
          ACELog.e(ACEParameterUtilForOne._TAG, 'Fail to update for ts.', error)
        } else if (result) {
          ACELog.d(ACEParameterUtilForOne._TAG, 'Done to update for ts.')
          ACELog.d(ACEParameterUtilForOne._TAG, `result.getKey: ${result.getKey}`, JSON.parse(result.getValue))
          callback(eventName)
        }
      })
    }
  }

  didUpdateByPostMessage(): void {
    const st = this.getST()
    if (st.getGetTS() !== ACOneConstantSt.DefaultTS) {
      this.setKeepSession()
    }
    this.setInnerIncomingRI()
    this.setSTS(st.getStartTSGoldMaster())
  }

  public initParameters(
    key: string,
    enablePrivacyPolicy: boolean,
    callback: ((error?: Error, result?: ACEResponseToCaller) => void) | undefined,
  ): void
  public initParameters(key: string, enablePrivacyPolicy: boolean): Promise<ACEResponseToCaller>
  public initParameters(
    key: string,
    enablePrivacyPolicy: boolean,
    callback?: ((error?: Error, result?: ACEResponseToCaller) => void) | undefined,
  ): Promise<ACEResponseToCaller> | void {
    this._enablePrivacyPolicy = enablePrivacyPolicy
    const _parametersForOne = ACEParametersForOne.getInstance()
    _parametersForOne.getCE()
    _parametersForOne.setDM(ACEParameterUtil.getResolution())
    _parametersForOne.setMID(key)
    _parametersForOne.setIsNeedSetNewSession(false)
    _parametersForOne.setPatch(ACECONSTANT.PATCH)
    _parametersForOne.setRE(ACOneConstantInteger.DefaultRE)
    _parametersForOne.setURL(document.referrer)
    _parametersForOne.setREF(document.referrer)
    this.makeAndSetRI()
    this.loadSV()
    _parametersForOne.getUDF1()
    _parametersForOne.getUDF2()
    _parametersForOne.getUDF3()

    this.setSTS(ACECONSTANT.ZERO)
    _parametersForOne.setADELD(false)

    this.setNewSession()

    const promiseWorkLoadVT = this.loadVT()
    return new Promise((resolve, reject) => {
      Promise.all([promiseWorkLoadVT])
        .then(res => {
          ACELog.d(ACEParameterUtilForOne._TAG, 'Promise.all res:', res)

          this.getVT()
          this.loadUniqueKeyForSDK()
          // ACELog.d(ACEParameterUtilForOne._TAG, 'Promise.all vt:', this.getVT())

          const response: ACEResponseToCaller = {
            taskHash: '0003',
            code: ACEResultCode.Success,
            result: ACEConstantResultForCallback.Success,
            message: 'SDK init step one done',
            apiName: 'init',
          }
          if (callback) {
            callback(undefined, response)
          } else {
            resolve(response)
          }
        })
        .catch(err => {
          ACELog.d(ACEParameterUtilForOne._TAG, 'Promise.all err:', err)

          const response: ACEResponseToCaller = {
            taskHash: '0004',
            code: ACEResultCode.FailAfterRequest,
            result: ACEConstantResultForCallback.Failed,
            message: 'SDK init step one fail',
            apiName: 'init',
          }
          if (callback) {
            callback(err, response)
          } else {
            reject(response)
          }
        })
    })
  }

  public getBuyMode(): string {
    return ACEParametersForOne.getInstance().getMD()
  }

  public setBuyMode(value: string): void {
    ACEParametersForOne.getInstance().setMD(value)
  }

  public clearBuyMode(): void {
    ACEParametersForOne.getInstance().setMD(IACBuyMode.Unknown)
  }

  public setKeyword(value: string): void {
    ACEParametersForOne.getInstance().setSKEY(value)
  }

  public clearKeyword(): void {
    this.setKeyword(ACECONSTANT.EMPTY)
  }

  public getKW(): string {
    return ACEParametersForOne.getInstance().getKW()
  }

  public setKW(value: string): void {
    ACEParametersForOne.getInstance().setKW(value)
  }

  public clearKW(): void {
    ACEParametersForOne.getInstance().setKW(ACECONSTANT.EMPTY)
  }

  public setJN(value: number): void {
    var _jn = JN.Unknown
    switch (value) {
      case ACEofAPIForOne.Join:
        _jn = JN.Join
        break
      case ACEofAPIForOne.Leave:
        _jn = JN.Withdraw
        break
    }
    ACEParametersForOne.getInstance().setJN(_jn)
  }

  public clearJn(): void {
    this.setJN(-1)
  }

  public clearMemberKey(): void {
    ACEParametersForOne.getInstance().setMemberKey(ACECONSTANT.EMPTY)
  }

  public setMemberKey(value: string): void {
    ACEParametersForOne.getInstance().setMemberKey(value)
  }

  public getOrderNumber(): string {
    return ACEParametersForOne.getInstance().getONUM()
  }

  public setOrderNumber(value: string): void {
    ACEParametersForOne.getInstance().setONUM(value)
  }

  public clearOrderNumber(): void {
    ACEParametersForOne.getInstance().setONUM(ACECONSTANT.EMPTY)
  }

  public getPaymentMethod(): string {
    return ACEParametersForOne.getInstance().getPayMethod()
  }

  public setPaymentMethod(value: string): void {
    ACEParametersForOne.getInstance().setPayMethod(value)
  }

  public clearPayMethod(): void {
    ACEParametersForOne.getInstance().setPayMethod(ACECONSTANT.EMPTY)
  }

  public setProduct(value: string): void {
    ACEParametersForOne.getInstance().setLL(value)
  }

  public clearProduct(): void {
    ACEParametersForOne.getInstance().setLL(ACECONSTANT.EMPTY)
  }

  public clearProductId(): void {
    ACEParametersForOne.getInstance().setProductId(ACECONSTANT.EMPTY)
  }

  public setProductId(value: string): void {
    ACEParametersForOne.getInstance().setProductId(value)
  }

  public clearProductName(): void {
    ACEParametersForOne.getInstance().setPD(ACECONSTANT.EMPTY)
  }

  public setProductName(value: string): void {
    ACEParametersForOne.getInstance().setPD(value)
  }

  public clearProductCategoryName(): void {
    ACEParametersForOne.getInstance().setCT(ACECONSTANT.EMPTY)
  }

  public setProductCategoryName(value: string): void {
    ACEParametersForOne.getInstance().setCT(value)
  }

  public clearProductPrice(): void {
    ACEParametersForOne.getInstance().setAMT(ACECONSTANT.EMPTY)
  }

  public setProductPrice(value: string): void {
    ACEParametersForOne.getInstance().setAMT(value)
  }

  //#region RI
  public isOuterIncomingRI(): boolean {
    const _parametersForOne = ACEParametersForOne.getInstance()
    return _parametersForOne.getRI() === Incoming.Outer
  }

  public setInnerIncomingRI(): void {
    const _parametersForOne = ACEParametersForOne.getInstance()
    _parametersForOne.setRI(Incoming.Inner)
  }

  public makeAndSetRI(): void {
    const _parametersForOne = ACEParametersForOne.getInstance()
    _parametersForOne.setRI(this.makeRI())
  }

  private makeRI(): string {
    if (document.referrer) {
      let url = document.referrer
      let refDomain = url.match(/:\/\/(.[^/]+)/)

      return refDomain && refDomain.length > 1 && refDomain[1] === ACEParameterUtil.getPackageNameOrBundleID()
        ? Incoming.Inner
        : Incoming.Outer
    }

    return Incoming.Outer
  }
  //#endregion

  //#region Session
  public isFirstLog(): boolean {
    return this.getSession() == SESSION.NEW
  }

  public resetSessionAndParameterAfterSend(): void {
    this.resetSessionAndParameterAfterSendWithParams(undefined)
  }

  public resetSessionAndParameterAfterSendWithParams(params?: ParameterAfterSend): Promise<boolean> {
    if (this.isFirstLog()) {
      this.setKeepSession()
    }

    if (this.isOuterIncomingRI()) {
      this.setInnerIncomingRI()
    }

    if (params) {
      const _st = params.st
      const _vt = params.vt
      if (_st) {
        if (_vt) {
          return new Promise((resolve, reject) => {
            this.saveST_toInStorage(_st)
              .then(result => {
                ACELog.d(ACEParameterUtilForOne._TAG, 'resetSession::save willUpdate St')
                ACELog.d(
                  ACEParameterUtilForOne._TAG,
                  `resetSession::result: ${result.getKey}`,
                  JSON.parse(result.getValue),
                )
                return this.saveVT_toInStorage(_vt)
              })
              .then(result => {
                ACELog.d(ACEParameterUtilForOne._TAG, 'resetSession::save willUpdate Vt')
                ACELog.d(
                  ACEParameterUtilForOne._TAG,
                  `resetSession::result: ${result.getKey}`,
                  JSON.parse(result.getValue),
                )
                resolve(true)
              })
              .catch(err => {
                ACELog.d(ACEParameterUtilForOne._TAG, 'resetSession::fail willUpdate S/Vt.')
                ACELog.d(ACEParameterUtilForOne._TAG, 'resetSession::err', err)
                reject(false)
              })
          })
        } else {
          return new Promise((resolve, reject) => {
            this.saveST_toInStorage(_st)
              .then(result => {
                ACELog.d(ACEParameterUtilForOne._TAG, 'resetSession::save willUpdate St')
                ACELog.d(
                  ACEParameterUtilForOne._TAG,
                  `resetSession::result: ${result.getKey}`,
                  JSON.parse(result.getValue),
                )
                resolve(true)
              })
              .catch(err => {
                ACELog.d(ACEParameterUtilForOne._TAG, 'resetSession::fail willUpdate only St.')
                ACELog.d(ACEParameterUtilForOne._TAG, 'resetSession::err', err)
                reject(false)
              })
          })
        }
      }

      if (_vt) {
        return new Promise((resolve, reject) => {
          this.saveVT_toInStorage(_vt)
            .then(result => {
              ACELog.d(ACEParameterUtilForOne._TAG, 'resetSession::save willUpdate Vt')
              ACELog.d(
                ACEParameterUtilForOne._TAG,
                `resetSession::result: ${result.getKey}`,
                JSON.parse(result.getValue),
              )
              resolve(true)
            })
            .catch(err => {
              ACELog.d(ACEParameterUtilForOne._TAG, 'resetSession::fail willUpdate only Vt.')
              ACELog.d(ACEParameterUtilForOne._TAG, 'resetSession::err', err)
              reject(false)
            })
        })
      }
    }

    return new Promise((resolve, reject) => {
      ACELog.d(ACEParameterUtilForOne._TAG, 'not save S/Vt.')
      resolve(true)
    })
  }

  public setNewSession(): void {
    ACEParametersForOne.getInstance().setVK(SESSION.NEW)
  }

  public getSession(): number {
    return ACEParametersForOne.getInstance().getVK()
  }

  public setKeepSession(): void {
    ACEParametersForOne.getInstance().setVK(SESSION.KEEP)
  }
  //#endregion

  //#region src
  public clearSRC(): void {
    ACEParametersForOne.getInstance().setSRC(ACECONSTANT.EMPTY)
  }

  public getSRC(): string {
    return ACEParametersForOne.getInstance().getSRC()
  }

  public setSRC(value: string): void {
    ACEParametersForOne.getInstance().setSRC(value)
  }
  //#endregion

  //#region Update ST & VT
  public updateSTnVT(willUpdateVt: ACEntityForVT): Promise<object> {
    const _now = new Date()
    const _randomString = getRandom6CharForSTVT()
    if (this.isFirstLog()) {
      this.setStartTS(_now, _randomString)
      this.setSTS(this.getStartTSGoldMaster())

      if (this.getVT().isEmptyAtVTS()) {
        ACELog.d(ACEParameterUtilForOne._TAG, 'update vts')
        this.setVTSButNotStorage(_now, _randomString)
      } else {
        ACELog.d(ACEParameterUtilForOne._TAG, `vts is >>${this.getVT().getVTS()}<<`)
      }
      this.setVTSAtObject(willUpdateVt, _now, _randomString)

      const visitCount = this.getVisitCount()
      ACELog.d(ACEParameterUtilForOne._TAG, `visitCount is >>${visitCount}<<`)
      if (visitCount == 0) {
        ACELog.d(ACEParameterUtilForOne._TAG, 'visitCount is 0')
        this.setVisitCountAtObject(willUpdateVt, 2)
      } else {
        this.setVisitCountAtObject(willUpdateVt, visitCount + 1)
      }

      if (this.getVT().isEmptyAtBuyTimeTS()) {
        this.setBuyTimeTSButNotStorage(_now.valueOf().toString(), _randomString)
        this.setBuyTimeTSAtObject(willUpdateVt, _now.valueOf().toString(), _randomString)
        this.setBuyCountAtObject(willUpdateVt, 1)
      }
    } else {
      ACELog.d(ACEParameterUtilForOne._TAG, `not firstLog: ${this.getSession()}, ${SESSION[this.getSession()]}`)
    }
    this.setGetTS(_now, _randomString)
    return this.saveVT_toInStorage(this.getVT())
  }
  //#endregion

  //#region ST
  public getST(): ACEntityForST {
    return ACEParametersForOne.getInstance().getST()
  }

  public setGetTS(value: Date, random6Value: string): void {
    const _parametersForOne = ACEParametersForOne.getInstance()
    _parametersForOne.getST().setGetTS(value)
    _parametersForOne.getST().setRandom6ForGetTS(random6Value)
  }

  public makeInsenginetTS(): void {
    this.setInsenginetTS(new Date(), getRandom6CharForSTVT())
  }

  public setInsenginetTS(value: Date, random6Value: string): void {
    const _parametersForOne = ACEParametersForOne.getInstance()
    _parametersForOne.getST().setInsenginetTS(value)
    _parametersForOne.getST().setRandom6ForInsenginetTS(random6Value)
  }

  public saveST_toInStorage(
    st: ACEntityForST,
    callback: (error?: Error | null, result?: ResultAfterSaveInStorage) => void,
  ): void
  public saveST_toInStorage(st: ACEntityForST): Promise<ResultAfterSaveInStorage>
  public saveST_toInStorage(
    st: ACEntityForST,
    callback?: (error?: Error | null, result?: ResultAfterSaveInStorage) => void,
  ): Promise<ResultAfterSaveInStorage> | void {
    return ACEParametersForOne.getInstance().saveST_toInStorage(st, callback)
  }

  public setStartTS(value: Date, random6Value: string): void {
    const _parametersForOne = ACEParametersForOne.getInstance()
    _parametersForOne.getST().setStartTS(value)
    _parametersForOne.getST().setRandom6ForStartTS(random6Value)
  }

  public getStartTSGoldMaster(): string {
    const _parametersForOne = ACEParametersForOne.getInstance()
    return _parametersForOne.getST().getStartTSGoldMaster()
  }

  public getSTS(): string {
    return ACEParametersForOne.getInstance().getSTS()
  }

  public setSTS(value: string): void {
    return ACEParametersForOne.getInstance().setSTS(value)
  }
  //#endregion

  public clearSV(): void {
    ACEParametersForOne.getInstance().setSV(ACECONSTANT.EMPTY)
  }

  public loadSV(): void {
    ACEParametersForOne.getInstance().setSV(this.makeSV())
  }

  public makeSV(): string {
    return `${ACOneConstant.DefaultServiceCode}${LIB_VERSION}${ACOneConstant.DefaultNotCustomSDKForCustomer}`
  }

  public setTP(value: string): void {
    ACEParametersForOne.getInstance().setTP(value)
  }

  public setURL(value: string): void {
    value = onlyLetteringAtStartIndex(value)
    const _parametersForOne = ACEParametersForOne.getInstance()
    _parametersForOne.setURL(`${ACEParameterUtil.getPackageNameOrBundleID()}/${value}`)
  }

  public updateUrlToRef(value: string): void {
    const _parametersForOne = ACEParametersForOne.getInstance()
    _parametersForOne.setREF(_parametersForOne.getURL())
    this.setURL(value)
  }

  public clearREF(): void {
    ACEParametersForOne.getInstance().clearREF()
  }

  public setRefWithBundleID(value: string): void {
    if (isEmpty(value)) {
      value = ACECONSTANT.EMPTY
    }
    ACELog.d(ACEParameterUtilForOne._TAG, `value: >>${value}<<`)
    value = onlyLetteringAtStartIndex(value)
    ACELog.d(ACEParameterUtilForOne._TAG, `>>${ACEParameterUtil.getPackageNameOrBundleID()}/${value}<<`)
    ACEParametersForOne.getInstance().setREF(`${ACEParameterUtil.getPackageNameOrBundleID()}/${value}`)
  }

  public setRefForTel(value: string): void {
    if (isEmpty(value)) {
      value = ACECONSTANT.EMPTY
    }
    ACELog.d(ACEParameterUtilForOne._TAG, `value: >>${value}<<`)
    value = onlyLetteringAtStartIndex(value)
    ACELog.d(ACEParameterUtilForOne._TAG, `>>tel:${value}<<`)
    ACEParametersForOne.getInstance().setREF(`tel:${value}`)
  }

  // #region VT
  public setBuyCountAtObject(willUpdateVt: ACEntityForVT, value: number): void {
    willUpdateVt.setBuyCount(value)
  }

  public getBuyTimeTS(): string {
    return ACEParametersForOne.getInstance().getVT().getBuyTimeTS()
  }

  public setBuyTimeTSButNotStorage(value: string, random: string): void {
    this.getVT().setBuyTimeTS(value)
    this.getVT().setRandom6ForBuyTimeTS(random)
  }

  public setBuyTimeTSAtObject(willUpdateVt: ACEntityForVT, value: string, random: string): void {
    willUpdateVt.setBuyTimeTS(value)
    willUpdateVt.setRandom6ForBuyTimeTS(random)
  }

  public getVisitCount(): number {
    return stringToNumber(this.getVT().getVisitCount(), 10)
  }

  public setVisitCountAtObject(willUpdateVt: ACEntityForVT, value: number): void {
    willUpdateVt.setVisitCount(value)
  }

  public getVT(): ACEntityForVT {
    return ACEParametersForOne.getInstance().getVT()
  }

  public loadVT(callback: (error?: Error | null, result?: object) => void): void
  public loadVT(): Promise<object>
  public loadVT(callback?: (error?: Error | null, result?: object) => void): Promise<object> | void {
    return ACEParametersForOne.getInstance().loadVT(callback)
  }

  public setVTSButNotStorage(value: Date, random: string): void {
    this.getVT().setVTS(value)
    this.getVT().setRandom6ForVTS(random)
  }

  public setVTSAtObject(willUpdateVt: ACEntityForVT, value: Date, random: string): void {
    willUpdateVt.setVTS(value)
    willUpdateVt.setRandom6ForVTS(random)
  }

  public saveVT_toInStorage(
    vt: ACEntityForVT,
    callback: (error?: Error | null, result?: ResultAfterSaveInStorage) => void,
  ): void
  public saveVT_toInStorage(vt: ACEntityForVT): Promise<ResultAfterSaveInStorage>
  public saveVT_toInStorage(
    vt: ACEntityForVT,
    callback?: (error?: Error | null, result?: ResultAfterSaveInStorage) => void,
  ): Promise<ResultAfterSaveInStorage> | void {
    return ACEParametersForOne.getInstance().saveVT_toInStorage(vt, callback)
  }
  // #endregion

  //#region User
  public getUserAge(): number {
    return ACEParametersForOne.getInstance().getAG()
  }

  public setUserAge(value: number): void {
    ACEParametersForOne.getInstance().setAG(value)
  }

  public clearUserAge(): void {
    this.setUserAge(0)
  }

  public getUserGender(): ACEGender {
    return ACEGender[ACEParametersForOne.getInstance().getGD()]
  }

  public setUserGender(value: ACEGender): void {
    ACEParametersForOne.getInstance().setGD(value)
  }

  public clearUserGender(): void {
    this.setUserGender(ACEGender.Unknown)
  }

  public getLoginUserID(): string {
    return ACEParametersForOne.getInstance().getID()
  }

  public setLoginUserID(value: string): void {
    if (!isEmpty(value) && this._enablePrivacyPolicy) {
      value = ACOneConstant.EnabledPrivacyPolicyUserID
    }

    ACEParametersForOne.getInstance().setID(value)
  }

  public clearLoginUserID(): void {
    ACEParametersForOne.getInstance().setID(ACECONSTANT.EMPTY)
  }

  public getJoinOrLeaveUserID(): string {
    return ACEParametersForOne.getInstance().getUserID()
  }

  public setJoinOrLeaveUserID(value: string): void {
    if (!isEmpty(value) && this._enablePrivacyPolicy) {
      value = ACOneConstant.EnabledPrivacyPolicyUserID
    }

    ACEParametersForOne.getInstance().setUserID(value)
  }

  public clearJoinOrLeaveUserID(): void {
    ACEParametersForOne.getInstance().setUserID(ACECONSTANT.EMPTY)
  }

  public getUserMaritalStatus(): ACEMaritalStatus {
    return ACEMaritalStatus[ACEParametersForOne.getInstance().getMR()]
  }

  public setUserMaritalStatus(value: ACEMaritalStatus): void {
    ACEParametersForOne.getInstance().setMR(value)
  }

  public clearUserMaritalStatus(): void {
    this.setUserMaritalStatus(ACEMaritalStatus.Unknown)
  }
  //#endregion

  public setterForString(key: string, value: string): void {}

  public getParamsToObjectForLogSend(): object {
    return ACEParametersForOne.getInstance().getParamsToObjectForLogSend()
  }
}
