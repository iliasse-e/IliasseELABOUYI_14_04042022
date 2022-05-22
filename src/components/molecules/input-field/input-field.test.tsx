import React from 'react'
import { render } from '@testing-library/react'
import '../../../setupTest'
import userEvent from '@testing-library/user-event'
import { InputField } from './input-field'

it('should display error message on bad input format', async () => {
  const mockChange = jest.fn()
  const user = userEvent.setup()
  const { getByText, container } = render(
    <div className="form-column">
      <InputField textContent="First Name" type="text" onChange={mockChange} />
    </div>
  )
  const input = container.querySelector(`#first-name`)
  await user.type(input, 'Shavkat00')

  expect(getByText('error format')).toBeInTheDocument()
})
