export function printConsoleMap(map: Map<string, string | object>): void {
  for (var i = 0, keys = Object.keys(map), ii = keys.length; i < ii; i++) {
    // @ts-ignore
    console.log(keys[i] + '|' + map[keys[i]].list)
  }
}

export function mapValueObjectToObject(map: Map<string, object>) {
  return Array.from(map).reduce((obj, [key, value]) => {
    // @ts-ignore
    obj[key] = value
    return obj
  }, {})
}

export function mapValueStringToObject(map: Map<string, string>) {
  return Array.from(map).reduce((obj, [key, value]) => {
    // @ts-ignore
    obj[key] = value
    return obj
  }, {})
}
