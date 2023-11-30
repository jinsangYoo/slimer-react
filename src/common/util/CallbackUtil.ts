import type {ACEResponseToCaller} from '../constant/ACEPublicStaticConfig'
import Task from '../task/Task'
import ITask from '../task/ITask'
import {isEmpty} from './TextUtils'
import {ACEResultCode, ACEConstantResultForCallback} from '../constant/ACEPublicStaticConfig'

export function makeSuccessCallbackParams(task: Task & ITask): ACEResponseToCaller
export function makeSuccessCallbackParams(task: Task & ITask, message: string): ACEResponseToCaller
export function makeSuccessCallbackParams(task: Task & ITask, message?: string): ACEResponseToCaller {
  var innerMsg: string = ACEConstantResultForCallback.DefaultMessage
  if (!isEmpty(message) && message) {
    innerMsg = message
  }

  const _response = task.getNetworkResult()
  if (_response) {
    return {
      taskHash: task.getTaskHash(),
      code: ACEResultCode.Success,
      result: ACEConstantResultForCallback[ACEConstantResultForCallback.Success],
      message: innerMsg,
      apiName: task.getDescription(),
      reseponse: task.getNetworkResultToResponseToCaller(),
    }
  } else {
    return {
      taskHash: task.getTaskHash(),
      code: ACEResultCode.Success,
      result: ACEConstantResultForCallback[ACEConstantResultForCallback.Success],
      message: innerMsg,
      apiName: task.getDescription(),
      reseponse: {
        message: '_response is undefined.',
      },
    }
  }
}

export function makeFailCallbackParams(task: Task & ITask): ACEResponseToCaller
export function makeFailCallbackParams(task: Task & ITask, message: string): ACEResponseToCaller
export function makeFailCallbackParams(task: Task & ITask, message?: string): ACEResponseToCaller {
  var innerMsg: string = ACEConstantResultForCallback.DefaultMessage
  if (message && !isEmpty(message)) {
    innerMsg = message
  }

  const _err = task.getNetworkError()
  if (_err) {
    return {
      taskHash: task.getTaskHash(),
      code: ACEResultCode.FailAfterRequest,
      result: ACEConstantResultForCallback[ACEConstantResultForCallback.Failed],
      message: innerMsg,
      apiName: task.getDescription(),
      reseponse: task.getNetworkErrorToResponseToCaller(),
    }
  } else {
    return {
      taskHash: task.getTaskHash(),
      code: ACEResultCode.FailAfterRequest,
      result: ACEConstantResultForCallback[ACEConstantResultForCallback.Failed],
      message: innerMsg,
      apiName: task.getDescription(),
      reseponse: {
        message: 'err is undefined.',
      },
    }
  }
}
