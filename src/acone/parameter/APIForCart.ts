import ACOTask from '../task/ACOTask'
import {ITaskParams} from '../../common/task/ITaskParams'
import {ACENetwork} from '../../common/http/ACENetwork'
import {AxiosResponse} from 'axios'
import {makeSuccessCallbackWithNetworkResult, makeFailCallbackWithNetworkResult} from '../../common/util'
import type {ACSCallback, ACEResponseToCaller} from '../../common/constant/ACEPublicStaticConfig'
import ACELog from '../../common/logger/ACELog'
import ACEParameterUtilForOne from './ACEParameterUtilForOne'
import TP from '../constant/TP'
import {ACEResultCode, ACEConstantResultForCallback} from '../../common/constant/ACEPublicStaticConfig'
import ACEntityForVT from './ACEntityForVT'
import {ACProduct} from '../acproduct'
import {acproductToURLForOne} from '../../common/util/ACProductUtil'
import ACEofAPIForOne from '../constant/ACEofAPIForOne'
import IACBuyMode from '../constant/IACBuyMode'
import ACECONSTANT from '../../common/constant/ACEConstant'

export default class APIForCart extends ACOTask {
  private static _TAG = 'APIForCart'

  protected _willUpdateVt?: ACEntityForVT
  private memberKey: string
  private products: ACProduct[]
  public constructor(params: ITaskParams) {
    super(params)
    ACELog.d(APIForCart._TAG, 'in constructor, params:', params)
    this.memberKey = params.payload.memberKey ?? ACECONSTANT.EMPTY
    this.products = Array.from(params.payload.products ?? [])
  }

  public doWork(callback: ACSCallback | undefined) {
    super.doWork(callback)
    ACELog.d(APIForCart._TAG, 'doWork')

    const _parameterUtilForOne = ACEParameterUtilForOne.getInstance()
    _parameterUtilForOne.setMemberKey(this.memberKey)
    _parameterUtilForOne.setTP(TP.CART)
    switch (this.getLogSource()) {
      case ACEofAPIForOne.AddInCart:
        _parameterUtilForOne.setBuyMode(IACBuyMode.AddProductAtCart)
        break
      case ACEofAPIForOne.DeleteInCart:
        _parameterUtilForOne.setBuyMode(IACBuyMode.RemoveProductAtCart)
        break
    }
    _parameterUtilForOne.setProduct(acproductToURLForOne(this.products, this.getLogSource()))
    _parameterUtilForOne
      .loadVT()
      .then(response => {
        ACELog.d(APIForCart._TAG, 'Done load vt.', response)
        ACELog.d(APIForCart._TAG, 'vt after loadVT()', _parameterUtilForOne.getVT())
        return _parameterUtilForOne.updateSTnVT(this.assignWillUpdateVt())
      })
      .then(response => {
        ACELog.d(APIForCart._TAG, 'Done update st and vt.', response)
        ACELog.d(APIForCart._TAG, 'vt after updateSTnVT()', _parameterUtilForOne.getVT())
        if (callback) {
          const res: ACEResponseToCaller = {
            taskHash: `${this._logSource}::0011`,
            code: ACEResultCode.Success,
            // @ts-ignore
            result: ACEConstantResultForCallback[ACEConstantResultForCallback.Success],
            message: 'Done update st and vt.',
            apiName: this.getDescription(),
          }
          callback(undefined, res)
        }
      })
      .catch(err => {
        ACELog.d(APIForCart._TAG, 'Fail load st and vt.', err)
        if (callback) {
          const res: ACEResponseToCaller = {
            taskHash: `${this._logSource}::0012`,
            code: ACEResultCode.FailLoadVT,
            // @ts-ignore
            result: ACEConstantResultForCallback[ACEConstantResultForCallback.Failed],
            message: 'Fail load vt.',
            apiName: this.getDescription(),
          }
          callback(err, res)
        }
      })
  }

  public didWork(callback: ACSCallback | undefined): void {
    super.didWork(callback)
    ACELog.d(APIForCart._TAG, 'didWork')

    ACENetwork.requestToLog(
      response => {
        ACELog.d(APIForCart._TAG, 'in requestToLog, completed')
        this.completed(response)
        this.doneWork(callback)
      },
      err => {
        ACELog.d(APIForCart._TAG, 'in requestToLog, failed')
        this.failed(err)
        this.doneWork(callback)
      },
    )
  }

  public completed(response: AxiosResponse) {
    super.completed(response)
    ACELog.d(APIForCart._TAG, 'completed')
  }

  public failed(err: any) {
    super.failed(err)
    ACELog.d(APIForCart._TAG, 'failed')
  }

  public doneWork(callback: ACSCallback | undefined) {
    super.doneWork(callback)
    ACELog.d(APIForCart._TAG, 'doneWork')
    const _parameterUtilForOne = ACEParameterUtilForOne.getInstance()
    _parameterUtilForOne
      .resetSessionAndParameterAfterSendWithParams({
        vt: this.assignWillUpdateVt(),
      })
      .then(result => {
        ACELog.d(APIForCart._TAG, `resetSessionAndParameterAfterSendWithParams::result: ${result}`)
        //#region clear
        const _parameterUtilForOne = ACEParameterUtilForOne.getInstance()
        _parameterUtilForOne.clearBuyMode()
        _parameterUtilForOne.clearMemberKey()
        _parameterUtilForOne.clearProduct()
        //#endregion

        if (callback) {
          if (this._error) {
            callback(this.getNetworkError(), makeFailCallbackWithNetworkResult(this))
          } else {
            callback(undefined, makeSuccessCallbackWithNetworkResult(this))
          }
        }
      })
      .catch(err => {
        ACELog.d(APIForCart._TAG, `resetSessionAndParameterAfterSendWithParams::err: ${err}`)
        if (callback) {
          if (this._error) {
            callback(this.getNetworkError(), makeFailCallbackWithNetworkResult(this))
          } else {
            callback(undefined, makeSuccessCallbackWithNetworkResult(this))
          }
        }
      })
  }

  protected assignWillUpdateVt(): ACEntityForVT {
    if (!this._willUpdateVt) {
      const _parameterUtilForOne = ACEParameterUtilForOne.getInstance()
      this._willUpdateVt = new ACEntityForVT()
      this._willUpdateVt.setDeepCopy(_parameterUtilForOne.getVT().getMap())
    }

    return this._willUpdateVt
  }
}
