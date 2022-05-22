import React from 'react'
import { EmployeeCreatedModal } from './employee-created-modal'
import { render, fireEvent } from '@testing-library/react'
import '../../../setupTest'

it('should close modal on close click', () => {
  const fn = jest.fn()
  const modal = () => render(<EmployeeCreatedModal handleStateChange={fn} />)
  const { getByText, getByTestId } = modal()
  const element = getByText('Employee created')
  expect(element).toBeInTheDocument()
  const closeBtn = getByTestId('close-modal')
  fireEvent.click(closeBtn)
  expect(fn).toHaveBeenCalledWith(false)
})
