import ACECONSTANT from '../constant/ACEConstant'
import {VersionWithPatch} from '../constant/ACEPublicStaticConfig'

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
    if (typeof window !== 'undefined') {
      return window.location.hostname
    } else {
      return String(document.location)
    }
  }

  public static getSdkVersionWithPatch(): VersionWithPatch {
    return {
      version: ACECONSTANT.VERSION,
      patch: ACECONSTANT.PATCH,
    }
  }
}
