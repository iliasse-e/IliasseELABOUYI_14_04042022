import React from 'react'
import { render } from '@testing-library/react'
import '../../../../setupTest'
import { TableHeader } from './table-header'

const columns = [
  { title: 'Nom', data: 'name', type: 'STRING' },
  { title: 'Age', data: 'age', type: 'NUMBER' },
  { title: 'Date de naissance', data: 'birthdate', type: 'DATE' },
]

it('renders table header from data', () => {
  const handleMock = jest.fn
  const { getByText } = render(
    <TableHeader columns={columns} onclick={handleMock} />
  )
  expect(getByText('Nom')).toBeInTheDocument()
})
