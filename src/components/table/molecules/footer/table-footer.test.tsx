import React from 'react'
import { render } from '@testing-library/react'
import '../../../../setupTest'
import { TableFooter } from './table-footer'

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
]

// change active btn when click on next
it('should show as much pagination number buttons as data`s length', async () => {
  const { getByText } = render(<TableFooter data={data} entries={10} />)
  const secondPaginationBtn = getByText('2')
  expect(secondPaginationBtn).toBeInTheDocument()
})
