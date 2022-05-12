export const calculateRange = (
  data: Array<{ [key: string]: any }>,
  rowsPerPage: number
): number[] => {
  const range = []
  const num = Math.ceil(data.length / rowsPerPage)
  for (let i = 1; i <= num; i++) {
    range.push(i)
  }
  return range
}
