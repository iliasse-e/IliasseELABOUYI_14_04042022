import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '../../../setupTest'
import { TableTemplate } from './table-template'
import '@testing-library/jest-dom/extend-expect'
import { Column, TYPE } from '../type'

const data = [
  { name: 'Sanovski', age: 31, birthdate: new Date(1992) },
  { name: 'Arlovski', age: 43, birthdate: new Date(1979) },
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

const columns = [
  { title: 'Nom', data: 'name', type: TYPE.string },
  { title: 'Age', data: 'age', type: TYPE.number },
  { title: 'Date de naissance', data: 'birthdate', type: TYPE.date },
]

it('Should render table even in case of empty data and wrong column data', () => {
  const component = render(
    <TableTemplate dataInput={[{}]} columns={[{}] as Column[]} />
  )
  const element = component.getByRole('table')
  expect(element).toBeInTheDocument()
})

it('goes to next pagination number button as next button is clicked', async () => {
  const { getByText } = render(
    <TableTemplate dataInput={data} columns={columns} color={"rgb(232, 230, 227)"} />
  )
  const nextBtn = getByText('Next')
  const btn2 = getByText('2')
  expect(btn2).toBeInTheDocument()
  fireEvent.click(nextBtn)
  expect(btn2).toHaveClass('active')
})

it('hides all data that is not linked with search input', async () => {
  const { getByTestId } = render(
    <TableTemplate dataInput={data} columns={columns} />
  )
  const searchInput = getByTestId('search')
  fireEvent.change(searchInput, { target: { value: 'Baku' } })
  expect(screen.getByRole('table')).not.toHaveTextContent('Shohei')
})

it('sorts data on categroy click', async () => {
  const { getByTestId } = render(
    <TableTemplate dataInput={data} columns={columns} />
  )
  const sortByNameUpBtn = getByTestId('name-arrow-up')
  fireEvent.click(sortByNameUpBtn)
  const firstCell = document.querySelector('tbody tr td')
  expect(firstCell).toHaveTextContent('Arlovski')
})

it('shows all data in one table page', async () => {
  const { getByTestId } = render(
    <TableTemplate dataInput={data} columns={columns} />
  )
  const tableDropdown = getByTestId('table-dropdown')
  const btnContainer = getByTestId('pagination-btn-container')
  fireEvent.change(tableDropdown, { target: { value: '50' } })
  expect(btnContainer).not.toHaveTextContent('2')
})
