/**
 * 
 * @param data array of data
 * @param by category to sort (exemple: "animals", "age" or "name")
 * @param order descending or ascending
 * @returns new array with sorted data
 */

export const SortedTable = (
  data: { [key: string]: any }[],
  by: string,
  order: 'up' | 'down'
) => {
  let sortedProducts = [...data]
  if (order === 'up') {
    sortedProducts.sort((a, b) => {
      if (a[by] < b[by]) {
        return -1
      }
      if (a[by] > b[by]) {
        return 1
      }
      return 0
    })
  } else {
    sortedProducts.sort((a, b) => {
      if (a[by] < b[by]) {
        return 1
      }
      if (a[by] > b[by]) {
        return -1
      }
      return 0
    })
  }

  return sortedProducts
}
