type onLoadStatus = {
  onLoaded: boolean
  resetCount: number
}

export default class onLoadManager {
  private _onLoaded: boolean
  private _resetCount: number
  private static instance: onLoadManager

  private constructor() {
    this._onLoaded = false
    this._resetCount = 0
  }

  public static getInstance(): onLoadManager {
    return this.instance || (this.instance = new this())
  }

  public static isOnLoad(): boolean {
    return onLoadManager.getInstance().isOnLoad()
  }
  private isOnLoad(): boolean {
    return this._onLoaded
  }
  public static doneOnLoad(): void {
    onLoadManager.getInstance().doneOnLoad()
  }
  private doneOnLoad(): void {
    this._onLoaded = true
  }
  public static reset(): void {
    onLoadManager.getInstance().reset()
  }
  private reset(): void {
    this._onLoaded = false
    ++this._resetCount
  }
  private resetCount(): number {
    return this._resetCount
  }
  public static getStatus(): onLoadStatus {
    return {
      onLoaded: this.isOnLoad(),
      resetCount: onLoadManager.getInstance().resetCount(),
    }
  }
}
