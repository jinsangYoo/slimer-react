import getErrorMessage from '../util/ErrorUtil'

export function getItemOnStorage(key: string, callback: (error?: Error | null, result?: string | null) => void): void {
  if (typeof window !== 'undefined') {
    const result = window.localStorage.getItem(key)
    callback(result === null ? new Error(`Failed during getItem(${key})`) : undefined, result)
  } else {
    callback(new Error(`Failed during getItem(${key}), window is undefined.`))
  }
}

export function setItemOnStorage(
  key: string,
  value: string,
  callback: (error?: Error | null, result?: string | null) => void,
): void {
  try {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, value)
    } else {
      callback(new Error(`Failed during getItem(${key}), window is undefined.`))
    }
  } catch (error) {
    callback(new Error(`Failed during getItem(${key}), ${getErrorMessage(error)}`))
  }
}
