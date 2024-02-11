import ACOTask from '../task/ACOTask'
import {ITaskParams} from '../../common/task/ITaskParams'
import {ACENetwork} from '../../common/http/ACENetwork'
import {AxiosResponse} from 'axios'
import ACEPolicyParameterUtil from '../../common/policy/ACEPolicyParameterUtil'
import ControlTowerManager from '../../common/controltower/ControlTowerManager'
import {makeSuccessCallbackWithNetworkResult, makeFailCallbackWithNetworkResult} from '../../common/util'
import ACELog from '../../common/logger/ACELog'
import type {ACSCallback, ACEResponseToCaller} from '../../common/constant/ACEPublicStaticConfig'
import {ACEResultCode, ACEConstantResultForCallback} from '../../common/constant/ACEPublicStaticConfig'
import ACECONSTANT from '../../common/constant/ACEConstant'

export default class APIForPolicy extends ACOTask {
  private static _TAG = 'APIForPolicy'
  protected key: string

  public constructor(params: ITaskParams) {
    super(params)
    ACELog.d(APIForPolicy._TAG, 'in constructor, params:', params)
    this.key = params.payload.key ?? ACECONSTANT.EMPTY
  }

  public doWork(callback: ACSCallback | undefined) {
    super.doWork(callback)
    if (callback) {
      const res: ACEResponseToCaller = {
        taskHash: `${this._logSource}::0011`,
        code: ACEResultCode.Success,
        // @ts-ignore
        result: ACEConstantResultForCallback[ACEConstantResultForCallback.Success],
        message: 'Done doWork to policy.',
        apiName: this.getDescription(),
      }
      callback(undefined, res)
    }
  }

  public didWork(callback: ACSCallback | undefined): void {
    super.didWork(callback)

    ACENetwork.requestToPolicy(
      {key: this.key},
      response => {
        ACELog.d(APIForPolicy._TAG, 'in requestToPolicy, completed')
        this.completed(response)
        this.doneWork(callback)
      },
      err => {
        ACELog.d(APIForPolicy._TAG, 'in requestToPolicy, failed')
        this.failed(err)
        this.doneWork(callback)
      },
    )
  }

  public doneWork(callback: ACSCallback | undefined) {
    super.doneWork(callback)
    if (callback) {
      if (this._error) {
        callback(this.getNetworkError(), makeFailCallbackWithNetworkResult(this))
      } else {
        callback(undefined, makeSuccessCallbackWithNetworkResult(this))
      }
    }
  }

  public completed(response: AxiosResponse) {
    super.completed(response)
    ACELog.d(APIForPolicy._TAG, 'completed, before savePolicy')
    ACEPolicyParameterUtil.getInstance().savePolicy(this._response)
    ACELog.d(APIForPolicy._TAG, 'completed, after savePolicy')
    ControlTowerManager.getInstance().succeedRequestPolicy()
  }

  public failed(err: any) {
    super.failed(err)
    ControlTowerManager.getInstance().failedRequestPolicy()
  }
}
