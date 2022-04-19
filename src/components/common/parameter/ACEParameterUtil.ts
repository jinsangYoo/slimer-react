export default class ACEParameterUtil {
  public static getResolution(): string {
    // return `${Math.floor(Dimensions.get('window').width)}*${Math.floor(
    //   Dimensions.get('window').height
    // )}`
    return 'NeedCheck::getResolution.width x NeedCheck::getResolution.height'
  }

  public static getPackageNameOrBundleID(): string {
    return 'NeedCheck::getPackageNameOrBundleID'
  }

  public static getModel(): string {
    return 'NeedCheck::getModel'
  }

  public static getSystemName(): string {
    return 'NeedCheck::getSystemName'
  }

  public static getSystemVersion(): string {
    return 'NeedCheck::getSystemVersion'
  }

  public static getUniqueId(): string {
    return 'NeedCheck::getUniqueId'
  }

  public static getUserAgentForSDK(): string {
    return `${ACEParameterUtil.getSystemName()} ${ACEParameterUtil.getSystemVersion()} ${ACEParameterUtil.getModel()} on react-native`
  }
}
