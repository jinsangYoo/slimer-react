import type {ACEResponseToCaller} from '../constant/ACEPublicStaticConfig'
import Task from '../task/Task'
import ITask from '../task/ITask'
import {isEmpty} from './TextUtils'
import {ACEResultCode, ACEConstantResultForCallback} from '../constant/ACEPublicStaticConfig'

export function makeSuccessCallbackWithNetworkResult(task: Task & ITask): ACEResponseToCaller
export function makeSuccessCallbackWithNetworkResult(task: Task & ITask, message: string): ACEResponseToCaller
export function makeSuccessCallbackWithNetworkResult(task: Task & ITask, message?: string): ACEResponseToCaller {
  var innerMsg: string = ACEConstantResultForCallback.DefaultMessage
  if (!isEmpty(message) && message) {
    innerMsg = message
  }

  const _response = task.getNetworkResult()
  if (_response) {
    return {
      taskHash: task.getTaskHash(),
      code: ACEResultCode.Success,
      // @ts-ignore
      result: ACEConstantResultForCallback[ACEConstantResultForCallback.Success],
      message: innerMsg,
      apiName: task.getDescription(),
      reseponse: task.getNetworkResultToResponseToCaller(),
    }
  } else {
    return {
      taskHash: task.getTaskHash(),
      code: ACEResultCode.Success,
      // @ts-ignore
      result: ACEConstantResultForCallback[ACEConstantResultForCallback.Success],
      message: innerMsg,
      apiName: task.getDescription(),
      reseponse: {
        message: '_response is undefined.',
      },
    }
  }
}

export function makeFailCallbackWithNetworkResult(task: Task & ITask): ACEResponseToCaller
export function makeFailCallbackWithNetworkResult(task: Task & ITask, message: string): ACEResponseToCaller
export function makeFailCallbackWithNetworkResult(task: Task & ITask, message?: string): ACEResponseToCaller {
  var innerMsg: string = ACEConstantResultForCallback.DefaultMessage
  if (message && !isEmpty(message)) {
    innerMsg = message
  }

  const _err = task.getNetworkError()
  if (_err) {
    return {
      taskHash: task.getTaskHash(),
      code: ACEResultCode.FailAfterRequest,
      // @ts-ignore
      result: ACEConstantResultForCallback[ACEConstantResultForCallback.Failed],
      message: innerMsg,
      apiName: task.getDescription(),
      reseponse: task.getNetworkErrorToResponseToCaller(),
    }
  } else {
    return {
      taskHash: task.getTaskHash(),
      code: ACEResultCode.FailAfterRequest,
      // @ts-ignore
      result: ACEConstantResultForCallback[ACEConstantResultForCallback.Failed],
      message: innerMsg,
      apiName: task.getDescription(),
      reseponse: {
        message: 'err is undefined.',
      },
    }
  }
}

export function makeSuccessCallback(task: Task & ITask): ACEResponseToCaller
export function makeSuccessCallback(task: Task & ITask, message: string): ACEResponseToCaller
export function makeSuccessCallback(task: Task & ITask, message?: string): ACEResponseToCaller {
  return makeCallback(task, ACEResultCode.Success, ACEConstantResultForCallback.Success, message)
}

export function makeFailCallback(task: Task & ITask): ACEResponseToCaller
export function makeFailCallback(task: Task & ITask, message: string): ACEResponseToCaller
export function makeFailCallback(task: Task & ITask, message?: string): ACEResponseToCaller {
  return makeCallback(task, ACEResultCode.FailAfterRequest, ACEConstantResultForCallback.Failed, message)
}

function makeCallback(task: Task & ITask, code: number, result: string, message?: string): ACEResponseToCaller {
  var innerMsg: string = ACEConstantResultForCallback.DefaultMessage
  if (message && !isEmpty(message)) {
    innerMsg = message
  }

  return {
    taskHash: task.getTaskHash(),
    code,
    // @ts-ignore
    result: ACEConstantResultForCallback[result],
    message: innerMsg,
    apiName: task.getDescription(),
  }
}
