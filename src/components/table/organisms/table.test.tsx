import React from 'react'
import { render } from '@testing-library/react'
import '../../../setupTest'
import { Table } from './table'
import { Column } from '../type'
/**
 * @jest-environment jsdom
 */

const columns: Column[] = [
  { title: 'name', data: 'name' },
  { title: 'age', data: 'age' },
]

const data1 = [
  { name: 'Nayrad Shamzy', age: 23 },
  { name: 'Kakruvot Chatrovic', age: 43 },
]
const data2 = [
  { name: 'Nayrad Shamzy', age: '23' },
  { name: 'Kakruvot Chatrovic', age: '43' },
]
const data3 = [
  { name: 'Nayrad Shamzy', age: '23' },
  { name: 'Kakruvot Chatrovic', age: 43 },
]
const data4 = [
  { name: 'Nayrad Shamzy', age: null },
  { name: 'Kakruvot Chatrovic', age: 43 },
]

const component = () =>
  render(<Table columns={columns} data={data2} entries={2} pageNo={1} />)

it('renders table', () => {
  const { getByRole } = component()
  expect(getByRole('table')).toBeInTheDocument()
})

it('renders data in table body', () => {
  const { getByText } = component()
  expect(getByText('Kakruvot Chatrovic')).toBeInTheDocument()
})

it('renders data in table body in case of wrong data type', () => {
  const { getByText } = render(
    <Table columns={columns} data={data4} entries={2} pageNo={1} />
  )
  expect(getByText('Kakruvot Chatrovic')).toBeInTheDocument()
})
