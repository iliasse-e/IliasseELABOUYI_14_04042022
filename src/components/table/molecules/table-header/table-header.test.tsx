import React from 'react'
import { render } from '@testing-library/react'
import '../../../../setupTest'
import { TableHeader } from './table-header'
import { TYPE } from 'components/table/type'

const columns = [
  { title: 'Nom', data: 'name', type: TYPE.string },
  { title: 'Age', data: 'age', type: TYPE.number },
  { title: 'Date de naissance', data: 'birthdate', type: TYPE.date },
]

it('renders table header from data', () => {
  const handleMock = jest.fn
  const { getByText } = render(
    <TableHeader columns={columns} onclick={handleMock} />
  )
  expect(getByText('Nom')).toBeInTheDocument()
})
