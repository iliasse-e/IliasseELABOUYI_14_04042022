import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '../../../setupTest'
import { Dropdown } from './dropdown'

it('should display dropdown and its option values', () => {
  const mockChange = jest.fn()
  const { getByText, getByTestId } = render(
    <Dropdown
      label="Fighters"
      value="fighters"
      options={[
        { label: 'MagomedSharipov', value: 'MZ' },
        { label: 'Ulanbekov', value: 'TU' },
      ]}
      onChange={mockChange}
    />
  )
  expect(getByText("Ulanbekov")).toBeInTheDocument()
  const dropdown = getByTestId('select') as HTMLSelectElement
  fireEvent.change(dropdown, { target: { value: 'TU' }})
  expect(mockChange).toHaveBeenCalled()
})
