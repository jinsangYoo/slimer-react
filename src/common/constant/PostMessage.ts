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

export type ACSForMessage =
  | ({type: 'ACS.didAddedToMap'} & MessageForIFrame)
  | ({
      type: 'ACS.versionOfMessage'
      payload: {
        version: string
      }
    } & MessageForIFrame)
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
