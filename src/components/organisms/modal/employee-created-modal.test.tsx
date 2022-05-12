import React from 'react'
import { EmployeeCreatedModal } from './employee-created-modal'
import { render } from '@testing-library/react'
import "../../../setupTest"
/**
 * @jest-environment jsdom
 */
test('Modal should be displayed', () => {
  const component = render(<EmployeeCreatedModal />)
  const element = component.getByText('Employee created')
  expect(element).toBeInTheDocument()
})
