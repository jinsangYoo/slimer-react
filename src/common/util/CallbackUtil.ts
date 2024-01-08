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
  return makeCallback(task, ACEConstantResultForCallback.Success, ACEResultCode.Success, message)
}

export function makeFailCallback(task: Task & ITask): ACEResponseToCaller
export function makeFailCallback(task: Task & ITask, message: string): ACEResponseToCaller
export function makeFailCallback(task: Task & ITask, message?: string): ACEResponseToCaller {
  return makeCallback(task, ACEConstantResultForCallback.Failed, ACEResultCode.FailAfterRequest, message)
}

export function makeFailCallbackWithCode(task: Task & ITask, code: number): ACEResponseToCaller
export function makeFailCallbackWithCode(task: Task & ITask, code: number, message: string): ACEResponseToCaller
export function makeFailCallbackWithCode(task: Task & ITask, code: number, message?: string): ACEResponseToCaller {
  return makeCallback(task, ACEConstantResultForCallback.Failed, code, message)
}

function makeCallback(task: Task & ITask, result: string, code: number, message?: string): ACEResponseToCaller {
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
