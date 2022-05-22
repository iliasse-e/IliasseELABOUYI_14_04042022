import React from 'react'
import { render } from '@testing-library/react'
import '../../../../setupTest'
import { TableBody } from './table-body'

const columns = [
  { title: 'Nom', data: 'name', type: 'STRING' },
  { title: 'Age', data: 'age', type: 'NUMBER' },
  { title: 'Date de naissance', data: 'birthdate', type: 'DATE' },
]

const data = [
  { name: 'Shohei', age: 26, birthdate: new Date(1996) },
  { name: 'Sanovski', age: 31, birthdate: new Date(1992) },
  { name: 'Baku', age: 29, birthdate: new Date(1992) },
]

it('renders table header from data', () => {
  const { getByText } = render(
    <TableBody fields={data} columns={columns} pageNo={1} entries={3} />
  )
  expect(getByText('Baku')).toBeInTheDocument()
})
