import React from 'react'
import { render } from '@testing-library/react'
import '../../../setupTest'
import { TableTemplate } from './table-template'
import { columns } from 'data/columns'
import '@testing-library/jest-dom/extend-expect'
/**
 * @jest-environment jsdom
 */
it('Should render table even in case of empty data', () => {
  const component = render(<TableTemplate data={[{}]} columns={columns} />)
  const element = component.getByRole('table')
  expect(element).toBeInTheDocument()
})
