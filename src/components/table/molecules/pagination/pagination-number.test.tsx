import React from 'react'
import { render } from '@testing-library/react'
import '../../../../setupTest'
import { PaginationNumber } from './pagination-number'

const data = [
  { name: 'Shohei', age: 26, birthdate: new Date(1996) },
  { name: 'Sanovski', age: 31, birthdate: new Date(1992) },
  { name: 'Baku', age: 29, birthdate: new Date(1992) },
  { name: 'Shohei', age: 26, birthdate: new Date(1996) },
  { name: 'Sanovski', age: 31, birthdate: new Date(1992) },
  { name: 'Baku', age: 29, birthdate: new Date(1992) },
  { name: 'Shohei', age: 26, birthdate: new Date(1996) },
  { name: 'Sanovski', age: 31, birthdate: new Date(1992) },
  { name: 'Baku', age: 29, birthdate: new Date(1992) },
  { name: 'Shohei', age: 26, birthdate: new Date(1996) },
  { name: 'Sanovski', age: 31, birthdate: new Date(1992) },
  { name: 'Baku', age: 29, birthdate: new Date(1992) },
  { name: 'Shohei', age: 26, birthdate: new Date(1996) },
  { name: 'Sanovski', age: 31, birthdate: new Date(1992) },
  { name: 'Baku', age: 29, birthdate: new Date(1992) },
]

it('should show as much pagination number buttons as data`s length', () => {
  const { getByText } = render(<PaginationNumber data={data} entries={10} />)
  expect(getByText('2')).toBeInTheDocument()
})
