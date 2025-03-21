import ACECONSTANT from '../../common/constant/ACEConstant'
import ACOneConstantVt from '../constant/ACOneConstantVt'
import {getRandom6CharForSTVT} from '../../common/util/NumberUtil'
import ACELog from '../../common/logger/ACELog'
import {objectForVT} from '../../common/constant/ACEPublicStaticConfig'
import ACOneConstantInteger from '../constant/ACOneConstantInteger'
import {validateTS, parse, validateCount, parseCountToString} from '../../common/util/TimeStampUtil'

export default class ACEntityForVT {
  private static _TAG = 'vt'
  private _map: Map<string, string>

  public constructor() {
    this._map = new Map<string, string>()
    this._map.set(ACOneConstantVt.KeyVTS, ACOneConstantVt.DefaultTS)
    this._map.set(ACOneConstantVt.KeyRandom6ForVTS, ACECONSTANT.EMPTY)

    this._map.set(ACOneConstantVt.KeyVisitCount, ACECONSTANT.ZERO)

    this._map.set(ACOneConstantVt.KeyBuyTimeTS, ACOneConstantVt.DefaultTS)
    this._map.set(ACOneConstantVt.KeyRandom6ForBuyTimeTS, ACECONSTANT.EMPTY)

    this._map.set(ACOneConstantVt.KeyBuyCount, ACECONSTANT.ZERO)

    this._map.set(ACOneConstantVt.KeyPcStamp, ACOneConstantVt.DefaultTS)
    this._map.set(ACOneConstantVt.KeyRandom6ForPcStamp, ACECONSTANT.EMPTY)
  }

  public getMap(): Map<string, string> {
    return this._map
  }

  public setDeepCopy(value: Map<string, string>) {
    if (this._map) {
      if (this._map.size > 0) this._map.clear()
    }
    const _vts = value.get(ACOneConstantVt.KeyVTS) ?? ACOneConstantVt.DefaultTS
    this._map.set(ACOneConstantVt.KeyVTS, _vts)
    const _vtsRandom = value.get(ACOneConstantVt.KeyRandom6ForVTS) ?? ACECONSTANT.EMPTY
    this._map.set(ACOneConstantVt.KeyRandom6ForVTS, _vtsRandom)

    const _visitCount = value.get(ACOneConstantVt.KeyVisitCount) ?? ACECONSTANT.ZERO
    this._map.set(ACOneConstantVt.KeyVisitCount, _visitCount)

    const _buyTimeTS = value.get(ACOneConstantVt.KeyBuyTimeTS) ?? ACOneConstantVt.DefaultTS
    this._map.set(ACOneConstantVt.KeyBuyTimeTS, _buyTimeTS)
    const _buyTimeTSRandom = value.get(ACOneConstantVt.KeyRandom6ForBuyTimeTS) ?? ACECONSTANT.EMPTY
    this._map.set(ACOneConstantVt.KeyRandom6ForBuyTimeTS, _buyTimeTSRandom)

    const _buyCount = value.get(ACOneConstantVt.KeyBuyCount) ?? ACECONSTANT.ZERO
    this._map.set(ACOneConstantVt.KeyBuyCount, _buyCount)

    const _pcStamp = value.get(ACOneConstantVt.KeyPcStamp) ?? ACOneConstantVt.DefaultTS
    this._map.set(ACOneConstantVt.KeyPcStamp, _pcStamp)
    const _pcStampRandom = value.get(ACOneConstantVt.KeyRandom6ForPcStamp) ?? ACECONSTANT.EMPTY
    this._map.set(ACOneConstantVt.KeyRandom6ForPcStamp, _pcStampRandom)
  }

  public setDeepCopyForJSON(value: JSON) {
    if (this._map) {
      if (this._map.size > 0) this._map.clear()
    }
    // @ts-ignore
    const _vts = value[ACOneConstantVt.KeyVTS] ?? ACOneConstantVt.DefaultTS
    this._map.set(ACOneConstantVt.KeyVTS, _vts)
    // @ts-ignore
    const _vtsRandom = value[ACOneConstantVt.KeyRandom6ForVTS] ?? ACECONSTANT.EMPTY
    this._map.set(ACOneConstantVt.KeyRandom6ForVTS, _vtsRandom)

    // @ts-ignore
    const _visitCount = value[ACOneConstantVt.KeyVisitCount] ?? ACECONSTANT.ZERO
    this._map.set(ACOneConstantVt.KeyVisitCount, _visitCount)

    // @ts-ignore
    const _buyTimeTS = value[ACOneConstantVt.KeyBuyTimeTS] ?? ACOneConstantVt.DefaultTS
    this._map.set(ACOneConstantVt.KeyBuyTimeTS, _buyTimeTS)
    // @ts-ignore
    const _buyTimeTSRandom = value[ACOneConstantVt.KeyRandom6ForBuyTimeTS] ?? ACECONSTANT.EMPTY
    this._map.set(ACOneConstantVt.KeyRandom6ForBuyTimeTS, _buyTimeTSRandom)

    // @ts-ignore
    const _buyCount = value[ACOneConstantVt.KeyBuyCount] ?? ACECONSTANT.ZERO
    this._map.set(ACOneConstantVt.KeyBuyCount, _buyCount)

    // @ts-ignore
    const _pcStamp = value[ACOneConstantVt.KeyPcStamp] ?? ACOneConstantVt.DefaultTS
    this._map.set(ACOneConstantVt.KeyPcStamp, _pcStamp)
    // @ts-ignore
    const _pcStampRandom = value[ACOneConstantVt.KeyRandom6ForPcStamp] ?? ACECONSTANT.EMPTY
    this._map.set(ACOneConstantVt.KeyRandom6ForPcStamp, _pcStampRandom)
  }

  public getAssembleParams(): string {
    const _vts = this.getVTSGoldMaster()
    const _visitCount = this.getVisitCount()
    const _buyTimeTS = this.getBuyTimeTSGoldMaster()
    const _buyCount = this.getBuyCount()
    const _pcStamp = this.getPcStampGoldMaster()
    return `${_vts}|${_visitCount}|${_buyTimeTS}|${_buyCount}|${_pcStamp}`
  }

  // #region GoldMaster
  public getVTSGoldMaster(): string {
    const _vts = this.getVTS()
    const _random = this.getRandom6ForVTS()

    return `${_vts}${_random}`
  }

  public getBuyTimeTSGoldMaster(): string {
    const _buyTimeTS = this.getBuyTimeTS()
    const _random = this.getRandom6ForBuyTimeTS()

    return `${_buyTimeTS}${_random}`
  }

  public getPcStampGoldMaster(): string {
    const _pcStamp = this.getPcStamp()
    const _random = this.getRandom6ForPcStamp()

    return `${_pcStamp}${_random}`
  }
  // #endregion

  // #region vts
  public isEmptyAtVTS(): boolean {
    const _vts = this.getVTS()
    if (_vts == ACOneConstantVt.DefaultTS) {
      return true
    } else {
      return false
    }
  }

  public getVTS(): string {
    return this._map.get(ACOneConstantVt.KeyVTS) ?? ACOneConstantVt.DefaultTS
  }

  public setVTS(value: Date): void {
    this._map.set(ACOneConstantVt.KeyVTS, value.valueOf().toString())
  }

  public getRandom6ForVTS(): string {
    return this._map.get(ACOneConstantVt.KeyRandom6ForVTS) ?? ACECONSTANT.ZERO
  }

  public setRandom6ForVTS(value: string): void {
    this._map.set(ACOneConstantVt.KeyRandom6ForVTS, value)
  }
  // #endregion

  // #region VisitCount
  public getVisitCount(): string {
    return this._map.get(ACOneConstantVt.KeyVisitCount) ?? ACECONSTANT.ZERO
  }

  public setVisitCount(value: number): void {
    value = value > ACOneConstantInteger.VtVisitCountMax ? ACOneConstantInteger.VtVisitCountMax : value
    this._map.set(ACOneConstantVt.KeyVisitCount, value.toString())
  }
  // #endregion

  // #region BuyTimeTS
  public isEmptyAtBuyTimeTS(): boolean {
    const _buyTimeTS = this.getBuyTimeTS()
    if (_buyTimeTS == ACOneConstantVt.DefaultTS) {
      return true
    } else {
      return false
    }
  }

  public getBuyTimeTS(): string {
    return this._map.get(ACOneConstantVt.KeyBuyTimeTS) ?? ACOneConstantVt.DefaultTS
  }

  public setBuyTimeTS(value: string): void {
    this._map.set(ACOneConstantVt.KeyBuyTimeTS, value)
  }

  public getRandom6ForBuyTimeTS(): string {
    return this._map.get(ACOneConstantVt.KeyRandom6ForBuyTimeTS) ?? ACECONSTANT.ZERO
  }

  public setRandom6ForBuyTimeTS(value: string): void {
    this._map.set(ACOneConstantVt.KeyRandom6ForBuyTimeTS, value)
  }
  // #endregion

  // #region BuyCount
  public getBuyCount(): string {
    return this._map.get(ACOneConstantVt.KeyBuyCount) ?? ACECONSTANT.ZERO
  }

  public setBuyCount(value: number): void {
    this._map.set(ACOneConstantVt.KeyBuyCount, value.toString())
  }
  // #endregion

  // #region pcstamp
  public getPcStamp(): string {
    return this._map.get(ACOneConstantVt.KeyPcStamp) ?? ACOneConstantVt.DefaultTS
  }

  public setPcStamp(value: number): void {
    this._map.set(ACOneConstantVt.KeyPcStamp, value.toString())
  }

  public getRandom6ForPcStamp(): string {
    return this._map.get(ACOneConstantVt.KeyRandom6ForPcStamp) ?? ACECONSTANT.ZERO
  }

  public setRandom6ForPcStamp(value: string): void {
    this._map.set(ACOneConstantVt.KeyRandom6ForPcStamp, value)
  }

  public setPcStampWhenNotStored() {
    const _pcStamp = this.getPcStamp()
    if (_pcStamp == ACOneConstantVt.DefaultTS) {
      this.setPcStamp(Date.now())
      this.setRandom6ForPcStamp(getRandom6CharForSTVT())
      ACELog.d(ACEntityForVT._TAG, `maked pcStamp: ${this.getPcStampGoldMaster()}`)
    } else {
      ACELog.d(ACEntityForVT._TAG, `existed pcStamp: ${this.getPcStampGoldMaster()}`)
    }
  }
  // #endregion

  public toJSON(): object {
    return {
      ac1_buyCount: this.getBuyCount(),

      ac1_buyTimeTS: this.getBuyTimeTS(),
      ac1_random6BuyTimeTS: this.getRandom6ForBuyTimeTS(),

      ac1_visitCount: this.getVisitCount(),

      ac1_vTS: this.getVTS(),
      ac1_random6VTS: this.getRandom6ForVTS(),

      ac1_pcStamp: this.getPcStamp(),
      ac1_random6pcStamp: this.getRandom6ForPcStamp(),
    }
  }

  public getObjectForTS(): objectForVT {
    return {
      vts: this.getVTSGoldMaster(),
      visitCount: this.getVisitCount(),
      buyTimeTS: this.getBuyTimeTSGoldMaster(),
      buyCount: this.getBuyCount(),
      pcStamp: this.getPcStampGoldMaster(),
    }
  }

  public setObjectForTS(value: objectForVT): void {
    this.parseForTS(ACOneConstantVt.KeyVTS, ACOneConstantVt.KeyRandom6ForVTS, value.vts)
    this.parseForTS(ACOneConstantVt.KeyBuyTimeTS, ACOneConstantVt.KeyRandom6ForBuyTimeTS, value.buyTimeTS)
    this.parseForTS(ACOneConstantVt.KeyPcStamp, ACOneConstantVt.KeyRandom6ForPcStamp, value.pcStamp)

    this.parseForCount(ACOneConstantVt.KeyVisitCount, value.visitCount)
    this.parseForCount(ACOneConstantVt.KeyBuyCount, value.buyCount)
  }

  private parseForTS(tsKey: string, randomKey: string, timestamp: string): void {
    const _result = validateTS(timestamp) ? parse(timestamp) : undefined
    this._map.set(tsKey, _result ? _result.ts : ACOneConstantVt.DefaultTS)
    this._map.set(randomKey, _result ? _result.random : ACECONSTANT.EMPTY)
  }

  private parseForCount(tsKey: string, value: string): void {
    const _result = validateCount(value) ? parseCountToString(value) : undefined
    this._map.set(tsKey, _result ?? ACECONSTANT.ZERO)
  }
}
