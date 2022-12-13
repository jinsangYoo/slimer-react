export const BASE_URL = {
  COMPANY_LOCAL_LOG: 'https://jinsang.myds.me',
  COMPANY_LOCAL_POLICY: 'https://policy2.acecounter.com/policy.php',
  // HOME_LOCAL_LOG: 'https://jinsang.myds.me',
  HOME_LOCAL_LOG: 'https://gmb.acecounter.com',
  HOME_LOCAL_POLICY: 'https://policy2.acecounter.com/policy.php',
  PRO_POLICY: 'https://policy.acecounter.com',
} as const

export const HTTP_METHOD = {
  GET: 'GET',
  POST: 'POST',
} as const

export const HTTP_URL = {
  COMPANY_LOCAL_LOG: 'log',
  COMPANY_LOCAL_POLICY: '',
  HOME_LOCAL_LOG: 'mac2/',
  HOME_LOCAL_POLICY: '',
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
