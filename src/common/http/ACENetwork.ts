import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import {HTTP_METHOD, BASE_URL, HTTP_URL, ACENetworkParams} from '../constant/Network'
import POLICY from '../constant/Policy'
import {NetworkMode, NetworkRequestType} from '../constant/SDKMode'
import {mapValueStringToObject} from '../util/MapUtil'
import ACELog from '../logger/ACELog'

import ControlTowerManager from '../controltower/ControlTowerManager'
import ACEParameterUtil from '../parameter/ACEParameterUtil'
import ACEParameterUtilForOne from '../../acone/parameter/ACEParameterUtilForOne'
import ACEPolicyParameters from '../policy/ACEPolicyParameters'
import {LIB_VERSION} from '../../version'

export type requestParams = {
  key?: string
}

export class ACENetwork {
  private static _TAG = 'Net'

  private static networkRequestTypeToParams(requestType: NetworkRequestType, parmas?: requestParams): ACENetworkParams {
    const currentNetworkMode = ControlTowerManager.getInstance().getNetworkMode()
    ACELog.d(
      ACENetwork._TAG,
      `networkRequestTypeToParams requestType: ${NetworkRequestType[requestType]}, currentNetworkMode:${NetworkMode[currentNetworkMode]}, parmas:`,
      parmas ?? {},
    )
    return {
      baseUrl: this.networkRequestTypeToBaseURLs(currentNetworkMode, requestType),
      requestHeaders: this.networkRequestTypeToHeaders(currentNetworkMode, requestType, parmas),
      url: this.networkRequestTypeToURLs(currentNetworkMode, requestType),
      params: this.networkRequestTypeToURLParams(requestType),
    }
  }

  //#region base url
  private static logToBaseURL(networkMode: NetworkMode): string {
    switch (networkMode) {
      case NetworkMode.COMPANY_dev:
        return BASE_URL.COMPANY_LOCAL_LOG
      case NetworkMode.HOME_dev:
        return BASE_URL.HOME_LOCAL_LOG
      case NetworkMode.Pro:
        return ACEPolicyParameters.getInstance().getCpDomain()
    }
  }

  private static policyToBaseURL(networkMode: NetworkMode): string {
    switch (networkMode) {
      case NetworkMode.COMPANY_dev:
        return BASE_URL.COMPANY_LOCAL_POLICY
      case NetworkMode.HOME_dev:
        return BASE_URL.HOME_LOCAL_POLICY
      case NetworkMode.Pro:
        return BASE_URL.PRO_POLICY
    }
  }

  private static networkRequestTypeToBaseURLs(networkMode: NetworkMode, requestType: NetworkRequestType): string {
    switch (requestType) {
      case NetworkRequestType.LOG:
        return this.logToBaseURL(networkMode)
      case NetworkRequestType.POLICY:
        return this.policyToBaseURL(networkMode)
    }
  }
  //#endregion

  //#region request headers
  private static logToRequestHeaders(networkMode: NetworkMode): Map<string, string> {
    const _map = new Map<string, string>()
    switch (networkMode) {
      case NetworkMode.COMPANY_dev:
        return _map
      case NetworkMode.HOME_dev:
        return _map
      case NetworkMode.Pro:
        return _map
    }
  }

  private static policyToRequestHeaders(networkMode: NetworkMode, parmas?: requestParams): Map<string, string> {
    const _map = new Map<string, string>()

    switch (networkMode) {
      case NetworkMode.COMPANY_dev:
      case NetworkMode.HOME_dev:
      case NetworkMode.Pro:
        _map.set(POLICY.REQUEST_APPLICATION_ID, ACEParameterUtil.getPackageNameOrBundleID() ?? 'no packageName')

        _map.set(POLICY.REQUEST_CID, parmas?.key || 'unknown')
        _map.set(POLICY.REQUEST_PLATFORM, 'react')
        _map.set(POLICY.REQUEST_SERVICE_ID, parmas?.key || 'unknown')
        _map.set(POLICY.REQUEST_TIME, Date.now().toString())
        _map.set(POLICY.REQUEST_VERSION, LIB_VERSION)
        break
    }

    return _map
  }

  private static networkRequestTypeToHeaders(
    networkMode: NetworkMode,
    requestType: NetworkRequestType,
    parmas?: requestParams,
  ): Map<string, string> {
    switch (requestType) {
      case NetworkRequestType.LOG:
        return this.logToRequestHeaders(networkMode)
      case NetworkRequestType.POLICY:
        return this.policyToRequestHeaders(networkMode, parmas)
    }
  }
  //#endregion

  //#region url
  private static logToURL(networkMode: NetworkMode): string {
    switch (networkMode) {
      case NetworkMode.COMPANY_dev:
        return HTTP_URL.COMPANY_LOCAL_LOG
      case NetworkMode.HOME_dev:
        return HTTP_URL.HOME_LOCAL_LOG
      case NetworkMode.Pro:
        return HTTP_URL.PRO_LOG
    }
  }

  private static policyToURL(networkMode: NetworkMode): string {
    switch (networkMode) {
      case NetworkMode.COMPANY_dev:
        return HTTP_URL.COMPANY_LOCAL_POLICY
      case NetworkMode.HOME_dev:
        return HTTP_URL.HOME_LOCAL_POLICY
      case NetworkMode.Pro:
        return HTTP_URL.PRO_POLICY
    }
  }

  private static networkRequestTypeToURLs(networkMode: NetworkMode, requestType: NetworkRequestType): string {
    switch (requestType) {
      case NetworkRequestType.LOG:
        return this.logToURL(networkMode)
      case NetworkRequestType.POLICY:
        return this.policyToURL(networkMode)
    }
  }

  private static networkRequestTypeToURLParams(requestType: NetworkRequestType): object {
    switch (requestType) {
      case NetworkRequestType.LOG:
        return ACEParameterUtilForOne.getInstance().getParamsToObjectForLogSend()
      case NetworkRequestType.POLICY:
        return {}
    }
  }
  //#endregion

  //#region request
  public static requestToPolicy(
    parmas?: requestParams,
    completed?: (response: AxiosResponse) => void,
    failed?: (err: object) => void,
  ): void {
    ACENetwork.request(ACENetwork.networkRequestTypeToParams(NetworkRequestType.POLICY, parmas), completed, failed)
  }

  public static requestToLog(completed?: (response: AxiosResponse) => void, failed?: (err: object) => void): void {
    ACENetwork.request(ACENetwork.networkRequestTypeToParams(NetworkRequestType.LOG), completed, failed)
  }

  private static request(
    networkParam: ACENetworkParams,
    completed?: (response: AxiosResponse) => void,
    failed?: (err: object) => void,
    method: string = HTTP_METHOD.GET,
  ): void {
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
    axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'

    const requestHeaders = mapValueStringToObject(networkParam.requestHeaders)
    // ACELog.d(ACENetwork._TAG, 'request requestHeaders:', requestHeaders)
    const requestConfig: AxiosRequestConfig = {
      url: networkParam.url,
      method: method,
      baseURL: networkParam.baseUrl,
      headers: requestHeaders,
      timeout: 5000,
      params: networkParam.params,
    }

    ACELog.d(ACENetwork._TAG, 'requestConfig', requestConfig)
    axios
      .create()
      .request(requestConfig)
      .then(response => {
        if (completed) {
          completed(response)
        }
      })
      .catch(error => {
        if (failed) {
          failed(error)
        }
      })
  }
  //#endregion
}
