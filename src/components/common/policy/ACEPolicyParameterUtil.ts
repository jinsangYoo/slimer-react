import ACENetworkResult from '../http/ACENetworkResult'
import {HttpURLConnection} from '../constant/Network'
import POLICY from '../constant/Policy'
import ACEPolicyParameters from './ACEPolicyParameters'
import {isEmpty} from '../util/TextUtils'
import ControlTowerSingleton from '../controltower/ControlTowerSingleton'
import ACEConstantInteger from '../constant/ACEConstantInteger'
import ACELog from '../logger/ACELog'

export default class ACEPolicyParameterUtil {
  private static _TAG = 'paramUtilForPolicy'
  private static instance: ACEPolicyParameterUtil
  private static readonly REPEAT_PULLING_INTERVAL_SECOND_DEFAULT = 6 * 60 * 60
  private static REPEAT_PULLING_INTERVAL_SECOND: number

  public static getInstance(): ACEPolicyParameterUtil {
    return this.instance || (this.instance = new this())
  }

  private constructor() {
    ACEPolicyParameterUtil.REPEAT_PULLING_INTERVAL_SECOND =
      ACEPolicyParameterUtil.REPEAT_PULLING_INTERVAL_SECOND_DEFAULT
  }

  public savePolicy(result: ACENetworkResult): void {
    if (result.getCode() != HttpURLConnection.HTTP_OK) {
      ACELog.d(ACEPolicyParameterUtil._TAG, `http response code not ok: ${result.getCode()}`)
      return
    }

    ACELog.d(ACEPolicyParameterUtil._TAG, 'Receive policy.')
    // console.log(`ACEPolicyParameterUtil::savePolicy::_response: ${JSON.stringify(result)}`)

    const _policyParameters = ACEPolicyParameters.getInstance()
    const responseHeaders = result.getHeaders()
    if (responseHeaders[POLICY.RESPONSE_SDK_ENABLE.toLowerCase()]) {
      // console.log(
      //   `in if key: ${POLICY.RESPONSE_SDK_ENABLE.toLowerCase()}, value: ${
      //     responseHeaders[POLICY.RESPONSE_SDK_ENABLE.toLowerCase()]
      //   }`,
      // )
      _policyParameters.setCpAllow(responseHeaders[POLICY.RESPONSE_SDK_ENABLE.toLowerCase()])
      if (!ControlTowerSingleton.getInstance().isEnableByPolicy()) {
        ACELog.d(ACEPolicyParameterUtil._TAG, 'disabled by policy.')
        ControlTowerSingleton.getInstance().setSDKDisable()
      }
    }

    if (responseHeaders[POLICY.RESPONSE_CID.toLowerCase()]) {
      // console.log(
      //   `in if key: ${POLICY.RESPONSE_CID.toLowerCase()}, value: ${responseHeaders[POLICY.RESPONSE_CID.toLowerCase()]}`,
      // )
      _policyParameters.setCpCid(responseHeaders[POLICY.RESPONSE_CID.toLowerCase()])
    }

    if (responseHeaders[POLICY.RESPONSE_DEBUG.toLowerCase()]) {
      // console.log(
      //   `in if key: ${POLICY.RESPONSE_DEBUG.toLowerCase()}, value: ${
      //     responseHeaders[POLICY.RESPONSE_DEBUG.toLowerCase()]
      //   }`,
      // )
      _policyParameters.setCpDebug(responseHeaders[POLICY.RESPONSE_DEBUG.toLowerCase()])
    }

    if (responseHeaders[POLICY.RESPONSE_DOMAIN.toLowerCase()]) {
      // console.log(
      //   `in if key: ${POLICY.RESPONSE_DOMAIN.toLowerCase()}, value: ${
      //     responseHeaders[POLICY.RESPONSE_DOMAIN.toLowerCase()]
      //   }`,
      // )
      _policyParameters.setCpDomain(responseHeaders[POLICY.RESPONSE_DOMAIN.toLowerCase()])
    }

    if (responseHeaders[POLICY.RESPONSE_PRIVATE.toLowerCase()]) {
      // console.log(
      //   `in if key: ${POLICY.RESPONSE_PRIVATE.toLowerCase()}, value: ${
      //     responseHeaders[POLICY.RESPONSE_PRIVATE.toLowerCase()]
      //   }`,
      // )
      _policyParameters.setCpPrivate(responseHeaders[POLICY.RESPONSE_PRIVATE.toLowerCase()])
    }

    if (responseHeaders[POLICY.RESPONSE_SOURCE_IP.toLowerCase()]) {
      // console.log(
      //   `in if key: ${POLICY.RESPONSE_SOURCE_IP.toLowerCase()}, value: ${
      //     responseHeaders[POLICY.RESPONSE_SOURCE_IP.toLowerCase()]
      //   }`,
      // )
      _policyParameters.setCpSourceIP(responseHeaders[POLICY.RESPONSE_SOURCE_IP.toLowerCase()])
    }

    if (responseHeaders[POLICY.RESPONSE_FORCE_STOP.toLowerCase()]) {
      // console.log(
      //   `in if key: ${POLICY.RESPONSE_FORCE_STOP.toLowerCase()}, value: ${
      //     responseHeaders[POLICY.RESPONSE_FORCE_STOP.toLowerCase()]
      //   }`,
      // )
      const _value = responseHeaders[POLICY.RESPONSE_SOURCE_IP.toLowerCase()]
      if (!isEmpty(_value) && _value === POLICY.FLAG_SDK_FORCE_STOP) {
        ACELog.d(ACEPolicyParameterUtil._TAG, 'force stop enabled.')
        ControlTowerSingleton.getInstance().enableForceStop()
      }
    }

    // if (responseHeaders.has(POLICY.RESPONSE_FORCE_DELETE_FAILEDFILE.toLowerCase())) {
    //   const _value = responseHeaders.get(POLICY.RESPONSE_FORCE_DELETE_FAILEDFILE.toLowerCase())
    //   if (!isEmpty(_value) && _value === POLICY.FLAG_FORCE_DELETE_FAILEDFILE) {
    //   }
    // }

    if (responseHeaders[POLICY.RESPONSE_DEBUG_LOG_URL.toLowerCase()]) {
      // console.log(
      //   `in if key: ${POLICY.RESPONSE_DEBUG_LOG_URL.toLowerCase()}, value: ${
      //     responseHeaders[POLICY.RESPONSE_DEBUG_LOG_URL.toLowerCase()]
      //   }`,
      // )
      _policyParameters.setCpCrashDomain(responseHeaders[POLICY.RESPONSE_DEBUG_LOG_URL.toLowerCase()])
    }

    if (responseHeaders[POLICY.RESPONSE_POLICY_INTERVAL.toLowerCase()]) {
      // console.log(
      //   `in if key: ${POLICY.RESPONSE_POLICY_INTERVAL.toLowerCase()}, value: ${
      //     responseHeaders[POLICY.RESPONSE_POLICY_INTERVAL.toLowerCase()]
      //   }`,
      // )
      var interval = ACEPolicyParameterUtil.REPEAT_PULLING_INTERVAL_SECOND
      const _value = responseHeaders[POLICY.RESPONSE_POLICY_INTERVAL.toLowerCase()]
      if (_value && !isEmpty(_value)) {
        interval = parseInt(_value)
        if (interval < ACEConstantInteger.TWO_MINUTES) {
          interval = ACEConstantInteger.TWO_MINUTES
        }
        ACEPolicyParameterUtil.REPEAT_PULLING_INTERVAL_SECOND = interval
      }
    }

    if (responseHeaders[POLICY.RESPONSE_TOAST_APPKEY.toLowerCase()]) {
      // console.log(
      //   `in if key: ${POLICY.RESPONSE_TOAST_APPKEY.toLowerCase()}, value: ${
      //     responseHeaders[POLICY.RESPONSE_TOAST_APPKEY.toLowerCase()]
      //   }`,
      // )
      _policyParameters.setToastAppKey(responseHeaders[POLICY.RESPONSE_TOAST_APPKEY.toLowerCase()])
    }

    ACELog.d(ACEPolicyParameterUtil._TAG, 'done save policy.', _policyParameters)
  }
}
