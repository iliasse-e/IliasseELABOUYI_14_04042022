import '../../../setupTest'
import { SortedTable } from './sort'
/**
 * @jest-environment jsdom
 */
test('should sort by name order', () => {
  const toSort = [
    { name: 'daniel', age: 32 },
    { name: 'albert', age: 24 },
    { name: 'clovis', age: 43 },
  ]
  expect(SortedTable(toSort, 'name', 'up')).toEqual([
    { name: 'albert', age: 24 },
    { name: 'clovis', age: 43 },
    { name: 'daniel', age: 32 },
  ])
})

test('should sort by age order from highest to smallest', () => {
  const toSort = [
    { name: 'daniel', age: 32, size: 177 },
    { name: 'albert', age: 24, size: 177 },
    { name: 'clovis', age: 43, size: 168 },
  ]
  expect(SortedTable(toSort, 'age', 'down')).toEqual([
    { name: 'clovis', age: 43, size: 168 },
    { name: 'daniel', age: 32, size: 177 },
    { name: 'albert', age: 24, size: 177 },
  ])
})

test('should sort by from latest to earliest', () => {
  const toSort = [
    { name: 'daniel', age: new Date('November 30') },
    { name: 'albert', age: new Date('2018-09-22T15:00:00') },
    { name: 'clovis', age: new Date(98, 1) },
  ]
  expect(SortedTable(toSort, 'age', 'up')).toEqual([
    { name: 'clovis', age: new Date(98, 1) },
    { name: 'daniel', age: new Date('November 30') },
    { name: 'albert', age: new Date('2018-09-22T15:00:00') },
  ])
})


