import ACECONSTANT from '../constant/ACEConstant'
import {VersionWithPatch} from '../constant/ACEPublicStaticConfig'
import {LIB_VERSION} from '../../version'

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
    // if (typeof window !== 'undefined') {
    //   return window.location.hostname
    // } else {
    //   return String(document.location)
    // }
    return 'http://jinsang.myds.me'
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
