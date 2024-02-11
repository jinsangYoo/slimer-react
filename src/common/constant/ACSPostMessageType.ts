const ACSPostMessageType = {
  didAddByOnLoad: 'ACS.didAddByOnLoad',
  injectToReact: 'ACS.injectToReact',
  reqOnLoad: 'ACS.reqOnLoad',
  resOnLoad: 'ACS.resOnLoad',
  reqReady: 'ACS.reqReady',
  resReady: 'ACS.resReady',
} as const

export default ACSPostMessageType
