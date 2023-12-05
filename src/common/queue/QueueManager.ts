import ACELog from '../logger/ACELog'
import ACEConstantInteger from '../constant/ACEConstantInteger'
import {ACParams} from '../../acone/acparam'

type QueueForTask = {
  queue: ACParams[]
  name: string
}

export class QueueManager {
  private static _TAG = 'QM'
  private static instance: QueueManager
  private waitQueue: QueueForTask
  private static lock = false

  public static getInstance(): QueueManager {
    return this.instance || (this.instance = new this())
  }

  constructor() {
    this.initWaitQueue()
  }

  //#region expose API
  public static toggleLock(): void {
    this.lock = !this.lock
  }

  public static isLock(): boolean {
    return this.lock
  }

  public static hasTask(): boolean {
    return this.getInstance().hasTask()
  }

  public static pop(callback: (param: ACParams | undefined) => void): void {
    const queueWrapper = this.getQueue()
    ACELog.d(QueueManager._TAG, `will pop on ${queueWrapper.name}`)
    if (this.hasTask()) {
      callback(queueWrapper.queue.shift())
    } else {
      ACELog.d(QueueManager._TAG, `empty on ${queueWrapper.name}`)
    }
  }

  public static push(task: ACParams): void {
    const queueWrapper = this.getQueue()
    ACELog.d(QueueManager._TAG, `will push on ${queueWrapper.name}`)
    if (queueWrapper.queue.length < ACEConstantInteger.QUEUE_MAX_WAITING_COUNT) {
      queueWrapper.queue.push(task)
      ACELog.d(
        QueueManager._TAG,
        `Did add task: ${task.type} at queue: ${queueWrapper.name}, length
    : ${queueWrapper.queue.length}`,
      )
    } else {
      ACELog.d(
        QueueManager._TAG,
        `Did overflow, not add task: ${task.type} at queue name: ${queueWrapper.name} length
    : ${queueWrapper.queue.length}`,
      )
    }
  }
  //#endregion

  //#region manager API
  private static getQueue(): QueueForTask {
    return this.getInstance().getQueue()
  }

  private getQueue(): QueueForTask {
    return this.waitQueue
  }

  private hasTask(): boolean {
    const queueWrapper = this.getQueue()
    ACELog.d(QueueManager._TAG, `current on queue name: ${queueWrapper.name} length: ${queueWrapper.queue.length}`)
    return this.getQueue().queue.length > 0
  }
  //

  private initWaitQueue(): void {
    if (!this.waitQueue) {
      this.waitQueue = {queue: [], name: 'waitQueue'}
    }
  }
}
