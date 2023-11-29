import {EventsForWorkerEmitter} from '../worker/EventsForWorkerEmitter'
import ACELog from '../logger/ACELog'
import ACEConstantInteger from '../constant/ACEConstantInteger'
import {ACParams} from '../../acone/acparam'
import {ACEResponseToCaller} from '../constant/ACEPublicStaticConfig'

export class QueueManager {
  private static _TAG = 'QM'
  private static instance: QueueManager
  private waitQueue: ACParams[]
  private bufferQueue: ACParams[]
  private emitter: EventsForWorkerEmitter
  private static lock = false

  public static getInstance(): QueueManager {
    return this.instance || (this.instance = new this())
  }

  constructor() {
    this.emitter = new EventsForWorkerEmitter()
    this.emitter.on('popWaitQueue', () => {
      this.popWaitQueue()
    })
    this.emitter.on('popBufferQueue', () => {
      this.popBufferQueue()
    })
  }

  //#region pop wait queue
  private popWaitQueueEmit(): void {
    this.emitter.emit('popWaitQueue')
  }

  private popWaitQueue(): void {
    ACELog.d(QueueManager._TAG, 'pop waitQueue')
    if (this.waitQueue && this.waitQueue.length > 0) {
      ACELog.d(QueueManager._TAG, `waitQueue: ${this.waitQueue.length}`)

      const callback = (error?: object, innerResult?: ACEResponseToCaller) => {
        if (error) {
          ACELog.d(QueueManager._TAG, 'error of waitQueue', error)
        } else if (innerResult) {
          ACELog.d(QueueManager._TAG, 'result of waitQueue', innerResult)
          this.popWaitQueueEmit()
        }
      }

      const param = this.waitQueue.shift()
      // 정책 서버 상태 확인 후 send 하자
      if (param) ACS._send(param, callback)
    }
  }
  //#endregion

  //#region pop buffer queue
  private popBufferQueueEmit(): void {
    this.emitter.emit('popBufferQueue')
  }

  private popBufferQueue(): void {
    ACELog.d(QueueManager._TAG, 'pop bufferQueue')
    if (this.bufferQueue && this.bufferQueue.length > 0) {
      ACELog.d(QueueManager._TAG, `current bufferQueue.length: ${this.bufferQueue.length}`)

      const callback = (error?: object, innerResult?: ACEResponseToCaller) => {
        if (error) {
          ACELog.d(QueueManager._TAG, 'error of bufferQueue', error)
        } else if (innerResult) {
          ACELog.d(QueueManager._TAG, 'result of bufferQueue', innerResult)
        }
      }

      const param = this.bufferQueue.shift()
      if (param) ACS._send(param, callback)
    }
  }
  //#endregion

  //#region private methods
  public static initWaitQueue(): void {
    QueueManager.getInstance().initWaitQueue()
  }

  private initWaitQueue(): void {
    if (!this.waitQueue) {
      this.waitQueue = []
    }
  }

  private static setWaitQueue(value: ACParams): void {
    QueueManager.initWaitQueue()
    QueueManager.getInstance().setWaitQueue(value)
  }

  private setWaitQueue(value: ACParams): void {
    ACELog.i(QueueManager._TAG, `current waitQueue.length: ${this.waitQueue.length}`)
    if (this.waitQueue.length < ACEConstantInteger.QUEUE_MAX_WAITING_COUNT) {
      ACELog.i(QueueManager._TAG, `add task: ${value.type}, >>${value.name ?? ''}<<`)
      this.waitQueue.push(value)
    }
  }

  private static initBufferQueue(): void {
    QueueManager.getInstance().initBufferQueue()
  }

  private initBufferQueue(): void {
    if (!this.bufferQueue) {
      this.bufferQueue = []
    }
  }

  private static setBufferQueue(value: ACParams): void {
    QueueManager.initBufferQueue()
    QueueManager.getInstance().setBufferQueue(value)
  }

  private setBufferQueue(value: ACParams): void {
    ACELog.i(QueueManager._TAG, `current bufferQueue.length: ${this.bufferQueue.length}`)
    if (this.bufferQueue.length < ACEConstantInteger.QUEUE_MAX_BUFFER_COUNT) {
      ACELog.i(QueueManager._TAG, `bufferQueue.push: ${value.type}, >>${value.name}<<`)
      this.bufferQueue.push(value)
    }
  }

  private static toggleLock(): void {
    this.lock = !this.lock
  }

  private static isLock(): boolean {
    return this.lock
  }
  //#endregion
}
