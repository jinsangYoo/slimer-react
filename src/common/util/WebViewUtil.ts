export interface AceWebViewInterface {
  getKey(): string
  getDevice(): string
  getTS(): string
}

export function isIOS(): boolean {
  let _win = window as any | undefined
  if (_win && _win.webkit && _win.webkit.messageHandlers && _win.webkit.messageHandlers.ace_message_handler) return true
  return false
}

export function isAOS(): boolean {
  let _win = window as any | undefined
  if (_win && _win.ace_and_interface) return true
  return false
}

export function isSupportNativeSDK(): boolean {
  if (isIOS() || isAOS()) return true
  return false
}

export function sendLoadedToIOS(): boolean {
  let _win = window as any | undefined
  if (_win && _win.webkit && _win.webkit.messageHandlers && _win.webkit.messageHandlers.ace_message_handler) {
    _win.webkit.messageHandlers.ace_message_handler.postMessage('loaded')
    return true
  }
  return false
}

export function printInterfaceForAOS(): void {
  let _win = window as any | undefined
  let isAndroid = _win?.ace_and_interface as AceWebViewInterface | undefined
  console.log('isAndroid?.getKey(): ' + isAndroid?.getKey())
  console.log('isAndroid?.getDevice(): ' + isAndroid?.getDevice())
  console.log('isAndroid?.getTS(): ' + isAndroid?.getTS())
}

export function getBrowserName() {
  if (isIOS()) return 'maybe ios'
  else if (isAOS()) {
    printInterfaceForAOS()
    return 'maybe aos'
  }

  return 'browser'
}
