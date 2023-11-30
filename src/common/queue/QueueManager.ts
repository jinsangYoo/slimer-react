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
  private bufferQueue: QueueForTask
  private static lock = false

  public static getInstance(): QueueManager {
    return this.instance || (this.instance = new this())
  }

  constructor() {
    this.initWaitQueue()
    this.initBufferQueue()
  }

  //#region expose API
  public static toggleLock(): void {
    this.lock = !this.lock
  }

  public static isLock(): boolean {
    return this.lock
  }

  public static setWaitQueue(value: ACParams): void {
    this.getInstance().setWaitQueue(value)
  }

  public static setBufferQueue(value: ACParams): void {
    this.getInstance().setBufferQueue(value)
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
    queueWrapper.queue.push(task)
    ACELog.d(QueueManager._TAG, `Did add at queue name: ${queueWrapper.name} length: ${queueWrapper.queue.length}`)
  }
  //#endregion

  //#region manager API
  private static getQueue(): QueueForTask {
    return this.getInstance().getQueue()
  }

  private getQueue(): QueueForTask {
    if (this.hasTaskAtWaitQueue()) {
      return this.waitQueue
    }
    return this.bufferQueue
  }

  private hasTaskAtWaitQueue(): boolean {
    return this.waitQueue.queue.length > 0
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

  private setWaitQueue(value: ACParams): void {
    ACELog.i(QueueManager._TAG, `current ${this.waitQueue.name} length: ${this.waitQueue.queue.length}`)
    if (this.waitQueue.queue.length < ACEConstantInteger.QUEUE_MAX_WAITING_COUNT) {
      ACELog.i(QueueManager._TAG, `add task: ${value.type}, >>${value.name ?? ''}<<`)
      this.waitQueue.queue.push(value)
    }
  }

  private initBufferQueue(): void {
    if (!this.bufferQueue) {
      this.bufferQueue = {queue: [], name: 'bufferQueue'}
    }
  }

  private setBufferQueue(value: ACParams): void {
    ACELog.i(QueueManager._TAG, `current ${this.bufferQueue.name} length: ${this.bufferQueue.queue.length}`)
    if (this.bufferQueue.queue.length < ACEConstantInteger.QUEUE_MAX_BUFFER_COUNT) {
      ACELog.i(QueueManager._TAG, `bufferQueue.push: ${value.type}, >>${value.name}<<`)
      this.bufferQueue.queue.push(value)
    }
  }
}
