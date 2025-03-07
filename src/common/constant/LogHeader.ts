const LOG_HEADER = {
  EQUEST_CONTENT_TYPE: 'Content-Type',
  REQUEST_CONTENT_TYPE_APPLICATION_JSON: 'application/json',
  REQUEST_COOKIE: 'cookie',
  REQUEST_GSCK: 'GsCK_UAC',
  REQUEST_SERVICE_ID: 'X-AceAPI-Key',
  REQUEST_USER_AGENT: 'User-Agent',

  RESPONSE_COOKIES: 'Set-Cookie',
  RESPONSE_GSCK: 'GsCK_UAC',
} as const

export default LOG_HEADER
