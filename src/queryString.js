export function parse(queryStr) {
  if (queryStr.length < 2) return {}
  const parsed = {}
  const split = queryStr.split(/[?=&]/)
  for (let i = 0; i < split.length; i += 2) {
    parsed[split[i]] = split[i + 1]
  }
  return parsed
}

export function stringify(params = {}) {
  const keys = Object.keys(params)
  if (keys.length === 0) return ''

  let stringified = '?'
  const lastKey = keys[keys.length - 1]
  for (let key in params) {
    stringified += `${key}=${params[key]}`
    if (key !== lastKey) {
      stringified += '&'
    }
  }
  return stringified
}
