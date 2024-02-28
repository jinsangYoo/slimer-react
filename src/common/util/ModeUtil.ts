export function isProduction() {
  return process.env.NODE_ENV === 'production' || false
}

export function isDevelopment() {
  return process.env.NODE_ENV === 'development' || false
}

export function isTest() {
  return process.env.NODE_ENV === 'test' || false
}

export function printMode() {
  return `NODE_ENV: ${process.env.NODE_ENV}, REACT_APP_MODE: ${process.env.REACT_APP_MODE}`
}
