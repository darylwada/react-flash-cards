import * as queryString from './queryString'

export function parseHash(hash) {
  const split = hash.split('?')
  const path = split[0].slice(1)
  const params = queryString.parse(split[1])
  return { path, params }
}
