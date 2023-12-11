export function isTopWindow() {
  if (window.parent === window) return true
  return false
}
