export type MessageForIFrame = {
  token: string
  location: string
}

export type PayloadForAdTracking = {
  adid: string
  adeld: string
}

export type PayloadForTS = {
  st: {
    getts: string
    insenginets: string
    referts: string
    startts: string
  }
  vt: {
    vts: string
    visitCount: string
    buyTimeTS: string
    buyCount: string
    pcStamp: string
  }
}

export type PayloadForNative = {
  key: string
  device: string
  ts: string
}

export type ACSForMessage =
  | ({type: 'ACS.didAddByOnLoad'} & MessageForIFrame)
  | ({
      type: 'ACS.versionOfMessage'
      payload: {
        version: string
      }
    } & MessageForIFrame)
  | {
      type: 'ACS.injectToReact'
      payload: PayloadForNative
    }
  | ({
      type: 'ACS.reqOnLoad'
    } & MessageForIFrame)
  | ({
      type: 'ACS.resOnLoad'
      payload:
        | {
            key: string
            device: string
            ts?: PayloadForTS
          }
        | PayloadForAdTracking
    } & MessageForIFrame)
  | ({type: 'ACS.reqReady'} & MessageForIFrame & MessageForReqReady)
  | ({
      type: 'ACS.resReady'
      payload:
        | ({
            key: string
            device: string
            ts?: PayloadForTS
          } & MessageForResReady)
        | PayloadForAdTracking
    } & MessageForIFrame)

export type MessageForReqReady = {
  uniqueKey: string
}

export type MessageForResReady = {
  uniqueKey: string
}

export type RequestReady = {
  iframeRef: React.RefObject<HTMLIFrameElement>
  destinationDomain: string
}
