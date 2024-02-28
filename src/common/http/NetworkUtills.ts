export default class NetworkUtils {
  static isNetworkAvailable() {
    return new Promise((resolve, reject) => {
      if (typeof window !== 'undefined') {
        resolve(window.navigator.onLine)
      } else {
        resolve(true)
      }
    })
  }
}
