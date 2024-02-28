import ACOneConstantInteger from '../../acone/constant/ACOneConstantInteger'
import {isEmpty, stringToNumber} from './TextUtils'

export const validateTS = (value: string) => {
  if (isEmpty(value) || value.length > ACOneConstantInteger.MaxLengthTSWithRandom) return false
  return value.length === ACOneConstantInteger.MaxLengthTSWithRandom
}

export const validateCount = (value: string) => {
  if (isEmpty(value)) return false
  return true
}

export const parse = (timestamp: string) => {
  return {
    ts: timestamp.substring(0, ACOneConstantInteger.MaxLengthTS),
    random: timestamp.slice(-ACOneConstantInteger.MaxLengthRandom, timestamp.length),
  }
}

export const parseCountToNumber = (value: string) => {
  return stringToNumber(value, 10)
}

export const parseCountToString = (value: string) => {
  return parseCountToNumber(value).toString()
}
