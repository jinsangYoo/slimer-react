export type MessageForIFrame = {
  token: string
  location: string
}

export type VersionForMessage = {
  version: number
}

export type PayloadForAdTracking = {
  adid?: string
  adeld?: string
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
  ts?: string
}

export type ACSForMessage =
  | ({type: 'ACS.didAddByOnLoad'} & MessageForIFrame & VersionForMessage)
  | ({
      type: 'ACS.injectToReact'
      payload: PayloadForNative & PayloadForAdTracking
    } & MessageForIFrame)
  | ({
      type: 'ACS.reqOnLoad'
      payload: PayloadForOnLoad
    } & MessageForIFrame &
      VersionForMessage)
  | ({
      type: 'ACS.resOnLoad'
      payload: {
        key: string
        device: string
        ts?: PayloadForTS
      } & PayloadForOnLoad &
        PayloadForAdTracking
    } & MessageForIFrame &
      VersionForMessage)
  | ({type: 'ACS.reqReady'; payload: PayloadForReqReady} & MessageForIFrame & VersionForMessage)
  | ({
      type: 'ACS.resReady'
      payload: {
        key: string
        device: string
        ts?: PayloadForTS
      } & PayloadForResReady &
        PayloadForAdTracking
    } & MessageForIFrame &
      VersionForMessage)

export type PayloadForOnLoad = {
  eventName?: string
}

export type PayloadForReqReady = {
  uniqueKey: string
  eventName?: string
}

export type PayloadForResReady = {
  uniqueKey: string
  eventName?: string
}

export type RequestReady = {
  iframeRef: React.RefObject<HTMLIFrameElement>
  destinationDomain: string
}
