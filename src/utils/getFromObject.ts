interface Args {
  obj: any
  path: string
  defaultValue?: string | number
}

export const getFromObject = ({ obj, path, defaultValue }: Args) => {
  const normalize = (seg: string) => {
    // remove surrounding single or double quotes from a segment
    const regex = /^["'](.*)["']$/
    const match = regex.exec(seg)
    return match ? match[1] : seg
  }

  const travel = (regexp: RegExp) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .map(normalize)
      .reduce((res, key) => (res != null ? res[key] : res), obj)

  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/)
  return result === undefined || result === obj ? defaultValue : result
}
