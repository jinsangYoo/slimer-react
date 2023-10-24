export type MessageForIFrame = {
  token: string
  location: string
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

export type ACSForMessage =
  | ({
      type: 'ACS.injectTS'
      payload: {
        key: string
        device: string
        adToken: string
        adTrackingEnabled: boolean
      } & PayloadForTS
    } & MessageForIFrame)
  | ({type: 'ACS.didMounted'} & MessageForIFrame)
  | ({type: 'ACS.didAddedToMap'} & MessageForIFrame)
  | ({type: 'ACS.initInIframe'} & MessageForIFrame)
  | ({
      type: 'ACS.versionOfMessage'
      payload: {
        version: string
      }
    } & MessageForIFrame)
  | ({
      type: 'ACS.notRoot'
      payload: PayloadForTS
    } & MessageForIFrame)
