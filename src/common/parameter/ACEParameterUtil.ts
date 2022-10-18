import {Platform} from 'react-native'
import {Dimensions} from 'react-native'
import DeviceInfo from 'react-native-device-info'
import ACECONSTANT from '../constant/ACEConstant'
import {VersionWithPatch} from '../constant/ACEPublicStaticConfig'

export default class ACEParameterUtil {
  public static getResolution(): string {
    return `${Math.floor(Dimensions.get('window').width)}*${Math.floor(Dimensions.get('window').height)}`
  }

  public static getPackageNameOrBundleID(): string {
    return DeviceInfo.getBundleId()
  }

  public static getModel(): string {
    return DeviceInfo.getModel()
  }

  public static getSystemName(): string {
    return DeviceInfo.getSystemName()
  }

  public static getSystemVersion(): string {
    return DeviceInfo.getSystemVersion()
  }

  public static getUniqueId(): string {
    return DeviceInfo.getUniqueId()
  }

  public static getPlatformName(): string {
    if (Platform.OS === 'ios' && !Platform.isPad) {
      return ACEParameterUtil.replace_iOS_To_iPhone_OS(ACEParameterUtil.getSystemName())
    } else {
      return ACEParameterUtil.getSystemName()
    }
  }

  public static getUserAgentForSDK(): string {
    return `${ACEParameterUtil.getPlatformName()} ${ACEParameterUtil.getSystemVersion()} ${ACEParameterUtil.getModel()} on react-native`
  }

  private static replace_iOS_To_iPhone_OS(source: string): string {
    const re = /iOS/gi

    return source.replace(re, 'iPhone OS')
  }

  public static getSdkVersionWithPatch(): VersionWithPatch {
    return {
      version: ACECONSTANT.VERSION,
      patch: ACECONSTANT.PATCH,
    }
  }
}
