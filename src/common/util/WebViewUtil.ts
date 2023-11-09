export interface AceWebViewInterface {
  getKey(): string
  getDevice(): string
  getTS(): string
}

export function isSupportNativeSDK(): boolean {
  let _win = window as any | undefined
  if (_win && _win.webkit && _win.webkit.messageHandlers && _win.webkit.messageHandlers.ace_message_handler) return true
  else if (_win && _win.ace_and_interface) return true
  return false
}

export function getBrowserName() {
  let _win = window as any | undefined
  if (_win && _win.webkit && _win.webkit.messageHandlers && _win.webkit.messageHandlers.ace_message_handler)
    return 'maybe ios'
  else if (_win && _win.ace_and_interface) {
    let isAndroid = _win.ace_and_interface as AceWebViewInterface | undefined
    console.log('isAndroid?.getKey(): ' + isAndroid?.getKey())
    console.log('isAndroid?.getDevice(): ' + isAndroid?.getDevice())
    console.log('isAndroid?.getTS(): ' + isAndroid?.getTS())
    return 'maybe aos'
  }

  return 'browser'
}
