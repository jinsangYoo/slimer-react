// import {Dimensions} from 'react-native'
// import DeviceInfo from 'react-native-device-info'

export default class ACEParameterUtil {
  public static getResolution(): string {
    // return `${Math.floor(Dimensions.get('window').width)}*${Math.floor(Dimensions.get('window').height)}`
    return `000*000`
  }

  public static getPackageNameOrBundleID(): string {
    // return DeviceInfo.getBundleId()
    return 'react bundleID'
  }

  public static getModel(): string {
    // return DeviceInfo.getModel()
    return 'react model'
  }

  public static getSystemName(): string {
    // return DeviceInfo.getSystemName()
    return 'react system name'
  }

  public static getSystemVersion(): string {
    // return DeviceInfo.getSystemVersion()
    return 'react system version'
  }

  public static getUniqueId(): string {
    // return DeviceInfo.getUniqueId()
    return 'react unique Id'
  }

  public static getUserAgentForSDK(): string {
    return `${ACEParameterUtil.getSystemName()} ${ACEParameterUtil.getSystemVersion()} ${ACEParameterUtil.getModel()} on react`
  }
}
