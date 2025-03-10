const ACEConstantInteger = {
  ACEPRODUCT_QUERY_MAX_LENGTH: 512,
  ENCRYPT_VALUE_AGE: 4,
  HalfOfHourMilliseconds: 30 * 60 * 1000,
  INIT_FAILED_LOG_COUNT: 1,
  MAX_LENGTH_REDUCE_TEXT_COUNT: 128,
  OneDayMilliseconds: 24 * 60 * 60 * 1000,
  QUEUE_MAX_FAILED_LOG_COUNT: 99,
  QUEUE_MAX_WAITING_COUNT: 5,
  QUEUE_MAX_BUFFER_COUNT: 5,
  TWO_MINUTES: 120,
  VersionOfPostMessage: 1,
} as const

export default ACEConstantInteger
