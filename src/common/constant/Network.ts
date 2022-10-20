export const BASE_URL = {
  COMPANY_LOCAL_LOG: 'http://localhost:52274',
  COMPANY_LOCAL_POLICY: 'http://localhost:52274',
  HOME_LOCAL_LOG: 'http://localhost:52274',
  // HOME_LOCAL_LOG: 'https://gmb.acecounter.com',
  HOME_LOCAL_POLICY: 'http://localhost:52274',
  PRO_POLICY: 'https://policy.acecounter.com',
} as const

export const HTTP_METHOD = {
  GET: 'GET',
  POST: 'POST',
} as const

export const HTTP_URL = {
  COMPANY_LOCAL_LOG: 'log',
  COMPANY_LOCAL_POLICY: 'policy',
  HOME_LOCAL_LOG: 'mac',
  HOME_LOCAL_POLICY: 'policy',
  PRO_LOG: '',
  PRO_POLICY: 'policy',
} as const

export type ACENetworkParams = {
  baseUrl: string
  requestHeaders: Map<string, string>
  url: string
  params: object
}

export const HttpURLConnection = {
  HTTP_OK: 200,
} as const
