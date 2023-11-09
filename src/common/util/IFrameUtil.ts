export function isEqualSelfWindowAndParentWindow() {
  if (window.parent === window) return true
  return false
}
