import React from 'react'
import { render } from '@testing-library/react'
import '../../../setupTest'
import userEvent from '@testing-library/user-event'
import { Input } from './input'

it('renders input component and triggers onChange', async () => {
  const mockChange = jest.fn()
  const mockSetState = jest.fn()
  const user = userEvent.setup()
  const { getByTestId } = render(
    <Input
      content="first name"
      type="text"
      onChange={mockChange}
      setIsNotValid={mockSetState}
    />
  )
  const input = getByTestId('first-name')
  await user.type(input, 'Shavkat')
  expect(input).toHaveValue('Shavkat')
})
