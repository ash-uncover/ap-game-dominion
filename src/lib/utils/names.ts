export function checkNameAvailability(names: string[], name: string) {
  return !names.includes(name)
}
export function resolveNextName(names: string[], prefix: string) {
  let i = 1
  while(!checkNameAvailability(names, `${prefix} (${i})`)) {
    i++
  }
  return `${prefix} (${i})`
}