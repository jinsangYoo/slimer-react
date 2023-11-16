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
    visitCount: number
    buyTimeTS: string
    buyCount: number
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
      type: 'ACS.reqAceApp'
    } & MessageForIFrame)
  | ({
      type: 'ACS.resAceApp'
      payload: {
        key: string
        device: string
      } & PayloadForTS &
        PayloadForAdTracking
    } & MessageForIFrame)
  | ({type: 'ACS.reqReady'} & MessageForIFrame & MessageForReqReady)
  | ({type: 'ACS.resReady'} & MessageForIFrame & MessageForResReady)

export type MessageForReqReady = {
  uniqueKey: string
}

export type MessageForResReady = {
  result: boolean
  resultCode: string
  uniqueKey: string
}

export type RequestReady = {
  iframeRef: React.RefObject<HTMLIFrameElement>
  destinationDomain: string
}
