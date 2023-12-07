import {ITaskParams} from '../../common/task/ITaskParams'
import APIForPL from './APIForPL'
import APIForBuy from './APIForBuy'
import APIForCart from './APIForCart'
import APIForAppearProduct from './APIForAppearProduct'
import APIForSearch from './APIForSearch'
import APIForLinkTel from './APIForLinkTel'
import APIForLogin from './APIForLogin'
import APIForJoinLeave from './APIForJoinLeave'
import APIForPolicy from './APIForPolicy'
import APIForOnLoad from './APIForOnLoad'
import APIForPushReferrerDeeplink from './APIForPushReferrerDeeplink'
import TaskAdapter from '../../common/task/TaskAdapter'
import ACEofAPIForOne from '../constant/ACEofAPIForOne'
import type {ACSCallback, ACEResponseToCaller} from '../../common/constant/ACEPublicStaticConfig'
import {ACEConstantResultForCallback, ACEResultCode} from '../../common/constant/ACEPublicStaticConfig'
import ACELog from '../../common/logger/ACELog'
import ControlTowerManager from '../../common/controltower/ControlTowerManager'
import {ACProduct} from '../acproduct'
import {ACParams} from '../acparam'
import {ACEGender, ACEMaritalStatus} from '../../common/constant/ACEPublicStaticConfig'
import {isEmpty} from '../../common/util/TextUtils'
import ACOneConstant from '../constant/ACOneConstant'
import ACEParameterUtilForOne from './ACEParameterUtilForOne'
import ACECONSTANT from '../../common/constant/ACEConstant'

export default class ACEReducerForOne {
  private static _TAG = 'reducerForOne'
  private static instance: ACEReducerForOne

  public static getInstance(): ACEReducerForOne {
    return this.instance || (this.instance = new this())
  }

  private constructor() {}

  private static reducer(params: ITaskParams, callback: ACSCallback | undefined): void
  private static reducer(params: ITaskParams): Promise<ACEResponseToCaller>
  private static reducer(params: ITaskParams, callback?: ACSCallback | undefined): Promise<ACEResponseToCaller> | void {
    if (params.type !== ACEofAPIForOne.Policy) {
      if (!ControlTowerManager.isEnableByPolicy()) {
        const result: ACEResponseToCaller = {
          taskHash: `${params.type}::0006`,
          code: ACEResultCode.NotFoundPolicyInformation,
          result: ACEConstantResultForCallback[ACEConstantResultForCallback.Failed],
          message: 'Not found policy information.',
          apiName: ACEofAPIForOne[params.type],
        }
        if (callback) {
          callback(new Error('0006, Not found policy information.'), result)
          return
        } else {
          return new Promise((resolveToOut, rejectToOut) => {
            rejectToOut(result)
          })
        }
      }
    }
    const taskAdapter = new TaskAdapter()
    switch (params.type) {
      case ACEofAPIForOne.AppearProduct:
        taskAdapter.addTask(new APIForAppearProduct(params), callback)
        break
      case ACEofAPIForOne.BuyCancel:
      case ACEofAPIForOne.BuyDone:
        taskAdapter.addTask(new APIForBuy(params), callback)
        break
      case ACEofAPIForOne.AddInCart:
      case ACEofAPIForOne.DeleteInCart:
        taskAdapter.addTask(new APIForCart(params), callback)
        break
      case ACEofAPIForOne.Search:
        taskAdapter.addTask(new APIForSearch(params), callback)
        break
      case ACEofAPIForOne.Join:
      case ACEofAPIForOne.Leave:
        taskAdapter.addTask(new APIForJoinLeave(params), callback)
        break
      case ACEofAPIForOne.Login:
        taskAdapter.addTask(new APIForLogin(params), callback)
        break
      case ACEofAPIForOne.OnLoad:
        taskAdapter.addTask(new APIForOnLoad(params), callback)
        break
      case ACEofAPIForOne.PlWithPage:
        taskAdapter.addTask(new APIForPL(params), callback)
        break
      case ACEofAPIForOne.Policy:
        taskAdapter.addTask(new APIForPolicy(params), callback)
        break
      case ACEofAPIForOne.InstallReferrer:
      case ACEofAPIForOne.Push:
        taskAdapter.addTask(new APIForPushReferrerDeeplink(params), callback)
        break
      case ACEofAPIForOne.TrackLinkEvent:
      case ACEofAPIForOne.TrackTelEvent:
        taskAdapter.addTask(new APIForLinkTel(params), callback)
        break
      default:
        ACELog.d(ACEReducerForOne._TAG, 'not implementation Task.')
        break
    }

    taskAdapter.run()
  }

  public static appearProduct(
    callback: ACSCallback | undefined,
    pageName?: string,
    memberKey?: string,
    productId?: string,
    productName?: string,
    productCategoryName?: string,
    productPrice?: string,
  ): void
  public static appearProduct(
    callback?: ACSCallback | undefined,
    pageName?: string,
    memberKey?: string,
    productId?: string,
    productName?: string,
    productCategoryName?: string,
    productPrice?: string,
  ): Promise<ACEResponseToCaller>
  public static appearProduct(
    callback?: ACSCallback | undefined,
    pageName?: string,
    memberKey?: string,
    productId?: string,
    productName?: string,
    productCategoryName?: string,
    productPrice?: string,
  ): Promise<ACEResponseToCaller> | void {
    return ACEReducerForOne.reducer(
      {
        type: ACEofAPIForOne.AppearProduct,
        payload: {
          pageName: pageName,
          memberKey: memberKey,
          productId: productId,
          productName: productName,
          productCategoryName: productCategoryName,
          productPrice: productPrice,
        },
        error: false,
        debugParams: {},
      },
      callback,
    )
  }

  public static buy(
    type: string,
    callback: ACSCallback | undefined,
    pageName?: string,
    memberKey?: string,
    orderNumber?: string,
    payMethodName?: string,
    products?: ACProduct[],
  ): void
  public static buy(
    type: string,
    callback?: ACSCallback | undefined,
    pageName?: string,
    memberKey?: string,
    orderNumber?: string,
    payMethodName?: string,
    products?: ACProduct[],
  ): Promise<ACEResponseToCaller>
  public static buy(
    type: string,
    callback?: ACSCallback | undefined,
    pageName?: string,
    memberKey?: string,
    orderNumber?: string,
    payMethodName?: string,
    products?: ACProduct[],
  ): Promise<ACEResponseToCaller> | void {
    ACELog.d(ACEReducerForOne._TAG, 'buy: ' + JSON.stringify(pageName))
    return ACEReducerForOne.reducer(
      {
        type: type == ACParams.TYPE.BUY_DONE ? ACEofAPIForOne.BuyDone : ACEofAPIForOne.BuyCancel,
        payload: {
          pageName: pageName,
          memberKey: memberKey,
          orderNumber: orderNumber,
          paymentMethod: payMethodName,
          products: products,
        },
        error: false,
        debugParams: {},
      },
      callback,
    )
  }

  public static cart(type: string, callback: ACSCallback | undefined, memberKey?: string, products?: ACProduct[]): void
  public static cart(
    type: string,
    callback?: ACSCallback | undefined,
    memberKey?: string,
    products?: ACProduct[],
  ): Promise<ACEResponseToCaller>
  public static cart(
    type: string,
    callback?: ACSCallback | undefined,
    memberKey?: string,
    products?: ACProduct[],
  ): Promise<ACEResponseToCaller> | void {
    return ACEReducerForOne.reducer(
      {
        type: type == ACParams.TYPE.ADDCART ? ACEofAPIForOne.AddInCart : ACEofAPIForOne.DeleteInCart,
        payload: {
          memberKey: memberKey,
          products: products,
        },
        error: false,
        debugParams: {},
      },
      callback,
    )
  }

  public static join(callback: ACSCallback | undefined, pageName?: string, userId?: string): void
  public static join(
    callback?: ACSCallback | undefined,
    pageName?: string,
    userId?: string,
  ): Promise<ACEResponseToCaller>
  public static join(
    callback?: ACSCallback | undefined,
    pageName?: string,
    userId?: string,
  ): Promise<ACEResponseToCaller> | void {
    return ACEReducerForOne.reducer(
      {
        type: ACEofAPIForOne.Join,
        payload: {
          pageName: pageName,
          userId: userId,
        },
        error: false,
        debugParams: {},
      },
      callback,
    )
  }

  public static leave(callback: ACSCallback | undefined, pageName?: string, userId?: string): void
  public static leave(
    callback?: ACSCallback | undefined,
    pageName?: string,
    userId?: string,
  ): Promise<ACEResponseToCaller>
  public static leave(
    callback?: ACSCallback | undefined,
    pageName?: string,
    userId?: string,
  ): Promise<ACEResponseToCaller> | void {
    return ACEReducerForOne.reducer(
      {
        type: ACEofAPIForOne.Leave,
        payload: {
          pageName: pageName,
          userId: userId,
        },
        error: false,
        debugParams: {},
      },
      callback,
    )
  }

  public static link(callback: ACSCallback | undefined, pageName?: string, linkName?: string, memberKey?: string): void
  public static link(
    callback?: ACSCallback | undefined,
    pageName?: string,
    linkName?: string,
    memberKey?: string,
  ): Promise<ACEResponseToCaller>
  public static link(
    callback?: ACSCallback | undefined,
    pageName?: string,
    linkName?: string,
    memberKey?: string,
  ): Promise<ACEResponseToCaller> | void {
    return ACEReducerForOne.reducer(
      {
        type: ACEofAPIForOne.TrackLinkEvent,
        payload: {
          pageName: pageName,
          memberKey: memberKey,
          linkName: linkName,
        },
        error: false,
        debugParams: {},
      },
      callback,
    )
  }

  public static login(
    callback: ACSCallback | undefined,
    pageName?: string,
    userAge?: number,
    userGender?: ACEGender,
    userId?: string,
    userMaritalStatus?: ACEMaritalStatus,
  ): void
  public static login(
    callback?: ACSCallback | undefined,
    pageName?: string,
    userAge?: number,
    userGender?: ACEGender,
    userId?: string,
    userMaritalStatus?: ACEMaritalStatus,
  ): Promise<ACEResponseToCaller>
  public static login(
    callback?: ACSCallback | undefined,
    pageName?: string,
    userAge?: number,
    userGender?: ACEGender,
    userId?: string,
    userMaritalStatus?: ACEMaritalStatus,
  ): Promise<ACEResponseToCaller> | void {
    return ACEReducerForOne.reducer(
      {
        type: ACEofAPIForOne.Login,
        payload: {
          pageName: pageName,
          userAge: userAge,
          userGender: userGender,
          userId: userId,
          userMaritalStatus: userMaritalStatus,
        },
        error: false,
        debugParams: {},
      },
      callback,
    )
  }

  public static onLoad(callback: ACSCallback | undefined, key?: string, pageName?: string, origin?: string[]): void
  public static onLoad(
    callback?: ACSCallback | undefined,
    key?: string,
    pageName?: string,
    origin?: string[],
  ): Promise<ACEResponseToCaller>
  public static onLoad(
    callback?: ACSCallback | undefined,
    key?: string,
    pageName?: string,
    origin?: string[],
  ): Promise<ACEResponseToCaller> | void {
    return ACEReducerForOne.reducer(
      {
        type: ACEofAPIForOne.OnLoad,
        payload: {
          key,
          pageName,
          origin: origin as string[],
        },
        error: false,
        debugParams: {},
      },
      callback,
    )
  }

  public static plWithPage(callback: ACSCallback | undefined, pageName?: string): void
  public static plWithPage(callback?: ACSCallback | undefined, pageName?: string): Promise<ACEResponseToCaller>
  public static plWithPage(callback?: ACSCallback | undefined, pageName?: string): Promise<ACEResponseToCaller> | void {
    return ACEReducerForOne.reducer(
      {
        type: ACEofAPIForOne.PlWithPage,
        payload: {
          pageName: pageName,
        },
        error: false,
        debugParams: {},
      },
      callback,
    )
  }

  public static policy(key: string, callback: ACSCallback | undefined): void
  public static policy(key: string): Promise<ACEResponseToCaller>
  public static policy(key: string, callback?: ACSCallback | undefined): Promise<ACEResponseToCaller> | void {
    return ACEReducerForOne.reducer(
      {
        type: ACEofAPIForOne.Policy,
        payload: {key},
        error: false,
        debugParams: {},
      },
      callback,
    )
  }

  public static push(callback: ACSCallback | undefined, data?: {[key: string]: string}, push?: string): void
  public static push(
    callback?: ACSCallback | undefined,
    data?: {[key: string]: string},
    push?: string,
  ): Promise<ACEResponseToCaller>
  public static push(
    callback?: ACSCallback | undefined,
    data?: {[key: string]: string},
    push?: string,
  ): Promise<ACEResponseToCaller> | void {
    var _push = push
    if (isEmpty(_push)) {
      if (data) {
        _push = data[ACOneConstant.PushKeyName]
      }
    }

    return ACEReducerForOne.reducer(
      {
        type: ACEofAPIForOne.Push,
        payload: {
          keyword: _push,
        },
        error: false,
        debugParams: {},
      },
      callback,
    )
  }

  public static referrer(callback: ACSCallback | undefined, keyword?: string): void
  public static referrer(callback?: ACSCallback | undefined, keyword?: string): Promise<ACEResponseToCaller>
  public static referrer(callback?: ACSCallback | undefined, keyword?: string): Promise<ACEResponseToCaller> | void {
    const _keyword = keyword ?? ACECONSTANT.EMPTY

    ACEParameterUtilForOne.getInstance()
      .isDuplicateInstallReferrer(_keyword)
      .then(result => {
        ACELog.i(ACECONSTANT.OFFICIAL_LOG_TAG, 'Already stored referrer.')
      })
      .catch(err => {
        return ACEReducerForOne.reducer(
          {
            type: ACEofAPIForOne.InstallReferrer,
            payload: {
              keyword: _keyword,
            },
            error: false,
            debugParams: {},
          },
          callback,
        )
      })
  }

  public static search(callback: ACSCallback | undefined, pageName?: string, keyword?: string): void
  public static search(
    callback?: ACSCallback | undefined,
    pageName?: string,
    keyword?: string,
  ): Promise<ACEResponseToCaller>
  public static search(
    callback?: ACSCallback | undefined,
    pageName?: string,
    keyword?: string,
  ): Promise<ACEResponseToCaller> | void {
    return ACEReducerForOne.reducer(
      {
        type: ACEofAPIForOne.Search,
        payload: {
          pageName: pageName,
          keyword: keyword,
        },
        error: false,
        debugParams: {},
      },
      callback,
    )
  }

  public static tel(callback: ACSCallback | undefined, pageName?: string, memberKey?: string, tel?: string): void
  public static tel(
    callback?: ACSCallback | undefined,
    pageName?: string,
    memberKey?: string,
    tel?: string,
  ): Promise<ACEResponseToCaller>
  public static tel(
    callback?: ACSCallback | undefined,
    pageName?: string,
    memberKey?: string,
    tel?: string,
  ): Promise<ACEResponseToCaller> | void {
    return ACEReducerForOne.reducer(
      {
        type: ACEofAPIForOne.TrackTelEvent,
        payload: {
          pageName: pageName,
          memberKey: memberKey,
          tel: tel,
        },
        error: false,
        debugParams: {},
      },
      callback,
    )
  }
}
