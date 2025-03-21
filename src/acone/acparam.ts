import {ACProduct} from './acproduct'
import {ACEGender, ACEMaritalStatus} from '../common/constant/ACEPublicStaticConfig'

type ParamType =
  | 'addcart'
  | 'appearProduct'
  | 'buyCancel'
  | 'buyDone'
  | 'delcart'
  | 'event'
  | 'join'
  | 'leave'
  | 'link'
  | 'login'
  | 'onload'
  | 'push'
  | 'referrer'
  | 'search'
  | 'tel'

export type IACParams = {
  init: (type: ParamType, value?: string) => ACParams
  TYPE: {
    ADDCART: ParamType
    APPEAR_PRODUCT: ParamType
    BUY_CANCEL: ParamType
    BUY_DONE: ParamType
    DELCART: ParamType
    EVENT: ParamType
    JOIN: ParamType
    LEAVE: ParamType
    LINK: ParamType
    LOGIN: ParamType
    ONLOAD: ParamType
    PUSH: ParamType
    REFERRER: ParamType
    SEARCH: ParamType
    TEL: ParamType
  }
}

export type ACParams = {
  type: ParamType
  name?: string

  data?: {[key: string]: string}
  key?: string
  keyword?: string
  linkName?: string
  memberKey?: string
  orderNumber?: string
  origin?: string[]
  payMethodName?: string
  productCategoryName?: string
  productId?: string
  productName?: string
  productPrice?: string
  push?: string
  tel?: string
  userAge?: number
  userGender?: ACEGender
  userId?: string
  userMaritalStatus?: ACEMaritalStatus

  products?: ACProduct[]
}

export const ACParams: IACParams = {
  TYPE: {
    ADDCART: 'addcart',
    APPEAR_PRODUCT: 'appearProduct',
    BUY_CANCEL: 'buyCancel',
    BUY_DONE: 'buyDone',
    DELCART: 'delcart',
    EVENT: 'event',
    JOIN: 'join',
    LEAVE: 'leave',
    LINK: 'link',
    LOGIN: 'login',
    ONLOAD: 'onload',
    PUSH: 'push',
    REFERRER: 'referrer',
    SEARCH: 'search',
    TEL: 'tel',
  },
  init(type = ACParams.TYPE.EVENT, name?: string): ACParams {
    return {type, name}
  },
}
