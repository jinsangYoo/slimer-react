import ACECONSTANT from '../../common/constant/ACEConstant'
import {objectForST} from '../../common/constant/ACEPublicStaticConfig'
import ACOneConstantSt from '../constant/ACOneConstantSt'
import {validateTS, parse} from '../../common/util/TimeStampUtil'
// import ACELog from '../../common/logger/ACELog'

export default class ACEntityForST {
  // private static _TAG = 'st'
  private _map: Map<string, string>

  public constructor() {
    this._map = new Map<string, string>()
    this._map.set(ACOneConstantSt.KeyGetTS, ACOneConstantSt.DefaultTS)
    this._map.set(ACOneConstantSt.KeyRandom6ForGetTS, ACECONSTANT.EMPTY)

    this._map.set(ACOneConstantSt.KeyInsenginetTS, ACOneConstantSt.DefaultTS)
    this._map.set(ACOneConstantSt.KeyRandom6ForInsenginetTS, ACECONSTANT.EMPTY)

    this._map.set(ACOneConstantSt.KeyRTS, ACOneConstantSt.DefaultTS)
    this._map.set(ACOneConstantSt.KeyRandom6ForRTS, ACECONSTANT.EMPTY)

    this._map.set(ACOneConstantSt.KeyStartTS, ACOneConstantSt.DefaultTS)
    this._map.set(ACOneConstantSt.KeyRandom6ForStartTS, ACECONSTANT.EMPTY)
  }

  public getMap(): Map<string, string> {
    return this._map
  }

  public setDeepCopy(value: Map<string, string>) {
    if (this._map) {
      if (this._map.size > 0) this._map.clear()
    }
    const _getTS = value.get(ACOneConstantSt.KeyGetTS) ?? ACOneConstantSt.DefaultTS
    this._map.set(ACOneConstantSt.KeyGetTS, _getTS)
    const _getTSRandom = value.get(ACOneConstantSt.KeyRandom6ForGetTS) ?? ACECONSTANT.EMPTY
    this._map.set(ACOneConstantSt.KeyRandom6ForGetTS, _getTSRandom)

    const _insenginetTS = value.get(ACOneConstantSt.KeyInsenginetTS) ?? ACOneConstantSt.DefaultTS
    this._map.set(ACOneConstantSt.KeyInsenginetTS, _insenginetTS)
    const _insenginetTSRandom = value.get(ACOneConstantSt.KeyRandom6ForInsenginetTS) ?? ACECONSTANT.EMPTY
    this._map.set(ACOneConstantSt.KeyRandom6ForInsenginetTS, _insenginetTSRandom)

    const _rTS = value.get(ACOneConstantSt.KeyRTS) ?? ACOneConstantSt.DefaultTS
    this._map.set(ACOneConstantSt.KeyRTS, _rTS)
    const _rTSRandom = value.get(ACOneConstantSt.KeyRandom6ForRTS) ?? ACECONSTANT.EMPTY
    this._map.set(ACOneConstantSt.KeyRandom6ForRTS, _rTSRandom)

    const _startTS = value.get(ACOneConstantSt.KeyStartTS) ?? ACOneConstantSt.DefaultTS
    this._map.set(ACOneConstantSt.KeyStartTS, _startTS)
    const _startTSRandom = value.get(ACOneConstantSt.KeyRandom6ForStartTS) ?? ACECONSTANT.EMPTY
    this._map.set(ACOneConstantSt.KeyRandom6ForStartTS, _startTSRandom)
  }

  public getAssembleParams(): string {
    const _getTS = this.getGetTSGoldMaster()
    const _insenginetTS = this.getInsenginetTSGoldMaster()
    const _rTS = this.getRTSGoldMaster()
    const _startTS = this.getStartTSGoldMaster()
    return `${_startTS}|${_getTS}|${_rTS}|${_insenginetTS}`
  }

  // #region GoldMaster
  public getGetTSGoldMaster(): string {
    const _getTS = this.getGetTS()
    const _random = this.getRandom6ForGetTS()

    return `${_getTS}${_random}`
  }

  public getInsenginetTSGoldMaster(): string {
    const _insenginetTS = this.getInsenginetTS()
    const _random = this.getRandom6ForInsenginetTS()

    return `${_insenginetTS}${_random}`
  }

  public getRTSGoldMaster(): string {
    const _rTS = this.getRTS()
    const _random = this.getRandom6ForRTS()

    return `${_rTS}${_random}`
  }

  public getStartTSGoldMaster(): string {
    const _startTS = this.getStartTS()
    const _random = this.getRandom6ForStartTS()

    return `${_startTS}${_random}`
  }
  // #endregion

  // #region GetTS
  public getGetTS(): string {
    return this._map.get(ACOneConstantSt.KeyGetTS) ?? ACOneConstantSt.DefaultTS
  }

  public setGetTS(value: Date): void {
    this._map.set(ACOneConstantSt.KeyGetTS, value.valueOf().toString())
  }

  public getRandom6ForGetTS(): string {
    return this._map.get(ACOneConstantSt.KeyRandom6ForGetTS) ?? ACECONSTANT.EMPTY
  }

  public setRandom6ForGetTS(value: string): void {
    this._map.set(ACOneConstantSt.KeyRandom6ForGetTS, value)
  }
  // #endregion

  // #region InsenginetTS
  public getInsenginetTS(): string {
    return this._map.get(ACOneConstantSt.KeyInsenginetTS) ?? ACOneConstantSt.DefaultTS
  }

  public setInsenginetTS(value: Date): void {
    this._map.set(ACOneConstantSt.KeyInsenginetTS, value.valueOf().toString())
  }

  public getRandom6ForInsenginetTS(): string {
    return this._map.get(ACOneConstantSt.KeyRandom6ForInsenginetTS) ?? ACECONSTANT.EMPTY
  }

  public setRandom6ForInsenginetTS(value: string): void {
    this._map.set(ACOneConstantSt.KeyRandom6ForInsenginetTS, value)
  }
  // #endregion

  // #region RTS
  public getRTS(): string {
    return this._map.get(ACOneConstantSt.KeyRTS) ?? ACOneConstantSt.DefaultTS
  }

  public setRTS(value: Date): void {
    this._map.set(ACOneConstantSt.KeyRTS, value.valueOf().toString())
  }

  public getRandom6ForRTS(): string {
    return this._map.get(ACOneConstantSt.KeyRandom6ForRTS) ?? ACECONSTANT.EMPTY
  }

  public setRandom6ForRTS(value: string): void {
    this._map.set(ACOneConstantSt.KeyRandom6ForRTS, value)
  }
  // #endregion

  // #region StartTS
  public getStartTS(): string {
    return this._map.get(ACOneConstantSt.KeyStartTS) ?? ACOneConstantSt.DefaultTS
  }

  public setStartTS(value: Date): void {
    this._map.set(ACOneConstantSt.KeyStartTS, value.valueOf().toString())
  }

  public getRandom6ForStartTS(): string {
    return this._map.get(ACOneConstantSt.KeyRandom6ForStartTS) ?? ACECONSTANT.EMPTY
  }

  public setRandom6ForStartTS(value: string): void {
    this._map.set(ACOneConstantSt.KeyRandom6ForStartTS, value)
  }
  // #endregion

  public toJSON(): object {
    return {
      ac1_getTS: this.getGetTS(),
      ac1_random6GetTS: this.getRandom6ForGetTS(),

      ac1_insenginetTS: this.getInsenginetTS(),
      ac1_random6InsenginetTS: this.getRandom6ForInsenginetTS(),

      ac1_rTS: this.getRTS(),
      ac1_random6RTS: this.getRandom6ForRTS(),

      ac1_startTS: this.getStartTS(),
      ac1_random6StartTS: this.getRandom6ForStartTS(),
    }
  }

  public getObjectForTS(): objectForST {
    return {
      getts: this.getGetTSGoldMaster(),
      insenginets: this.getInsenginetTSGoldMaster(),
      referts: this.getRTSGoldMaster(),
      startts: this.getStartTSGoldMaster(),
    }
  }

  public setObjectForTS(value: objectForST): void {
    this.parseForTS(ACOneConstantSt.KeyGetTS, ACOneConstantSt.KeyRandom6ForGetTS, value.getts)
    this.parseForTS(ACOneConstantSt.KeyInsenginetTS, ACOneConstantSt.KeyRandom6ForInsenginetTS, value.insenginets)
    this.parseForTS(ACOneConstantSt.KeyRTS, ACOneConstantSt.KeyRandom6ForRTS, value.referts)
    this.parseForTS(ACOneConstantSt.KeyStartTS, ACOneConstantSt.KeyRandom6ForStartTS, value.startts)
  }

  private parseForTS(tsKey: string, randomKey: string, timestamp: string): void {
    const _result = validateTS(timestamp) ? parse(timestamp) : undefined
    this._map.set(tsKey, _result ? _result.ts : ACOneConstantSt.DefaultTS)
    this._map.set(randomKey, _result ? _result.random : ACECONSTANT.EMPTY)
  }
}
