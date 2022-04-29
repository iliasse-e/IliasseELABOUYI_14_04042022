export const SortedTable = (data, by, order) => {
  let sortedProducts = [...data]
  if (order === "up") {
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
