import ACECONSTANT from '../constant/ACEConstant'
import {VersionWithPatch} from '../constant/ACEPublicStaticConfig'
import {LIB_VERSION} from '../../version'
import ControlTowerSingleton from '../controltower/ControlTowerSingleton'

export default class ACEParameterUtil {
  public static getResolution(): string {
    if (typeof window !== 'undefined') {
      const {innerWidth, innerHeight} = window
      return `${Math.floor(innerWidth)}*${Math.floor(innerHeight)}`
    } else {
      return '0*0'
    }
  }

  public static getPackageNameOrBundleID(): string {
    if (ControlTowerSingleton.isDevSDKMode()) {
      return 'http://jinsang.myds.me'
    } else {
      if (typeof window !== 'undefined') {
        return window.location.hostname
      } else {
        return String(document.location)
      }
    }
  }

  public static getSdkVersionWithPatch(): VersionWithPatch {
    return {
      version: LIB_VERSION,
      patch: ACECONSTANT.PATCH,
    }
  }

  public static getSdkVersionWithPatchToJsonStringify(): string {
    return JSON.stringify(ACEParameterUtil.getSdkVersionWithPatch())
  }
}
