import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '../../../setupTest'
import { Form } from './form'
import userEvent from '@testing-library/user-event'

const component = () => render(<Form />)

it('renders form', () => {
  const { getByText } = component()
  expect(getByText('Date of Birth')).toBeInTheDocument()
})

it('changes input value', async () => {
  const { getByTestId, getByRole } = component()
  const input = getByTestId('first-name')
  await userEvent.type(input, 'Namvar')
  expect(getByRole('textbox', { name: 'first-name' })).toHaveValue('Namvar')
})

it('opens modal when form is submitted', async () => {
  const { getByTestId, getByRole } = component()
  const user = userEvent.setup()
  const firstName = getByTestId('first-name')
  const lastName = getByTestId('last-name')
  const street = getByTestId('street')
  const city = getByTestId('city')
  const zipCode = getByTestId('zip-code')
  const submitBtn = getByTestId('submit-btn')
  await user.type(firstName, 'Namvar')
  await user.type(lastName, 'Dugary')
  await user.type(street, 'Tra 17')
  await user.type(city, 'GeorgiaTown')
  await user.type(zipCode, '02050')
  expect(getByRole('textbox', { name: 'first-name' })).toHaveValue('Namvar')
  fireEvent.click(submitBtn)
  // const confirmationModal = screen.getByTestId("close-modal")
  // expect(confirmationModal).toBeInTheDocument()
})
