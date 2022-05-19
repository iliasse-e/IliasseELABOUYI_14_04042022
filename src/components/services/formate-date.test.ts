import '../../setupTest'
import { convertDate, FormatType } from './formate-date'
/**
 * @jest-environment jsdom
 */

it('should return string date in DD/MM/YYYY format in case of no type', () => {
  expect(convertDate(new Date('September 22, 2018'))).toBe('22/09/2018')
})

it('should return string date in MM/DD/YYYY format in case of type DD/MM/YYYY', () => {
  const element = convertDate(
    new Date('September 22, 2018'),
    FormatType['MM/DD/YYYY']
  )
  expect(element).toBe('09/22/2018')
})

it('should return string date in MM/YYYY format in case of type MM/YYYY', () => {
  const element = convertDate(
    new Date('September 22, 2018'),
    FormatType['MM/YYYY']
  )
  expect(element).toBe('09/2018')
})

it('should return string date in MM/DD/YYYY format in case of type US', () => {
  const element = convertDate(
    new Date('September 22, 2018'),
    FormatType['MM/DD/YYYY']
  )
  expect(element).toBe('09/22/2018')
})
