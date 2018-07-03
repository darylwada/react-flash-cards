export function parseHash(hash) {
  const split = hash.split('?')
  const path = split[0].slice(1)
  const params = parse(split[1])
  return { path, params }
}
