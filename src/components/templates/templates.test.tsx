import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '../../setupTest'
import { BrowserRouter as Router } from 'react-router-dom'
import { EmployeeTableTemplate } from './employee-table-template'
import { CreateEmployeePage } from 'components/pages/create-employee'

describe('Testing form template component', () => {
  const component = () =>
    render(
      <Router>
        <CreateEmployeePage />
      </Router>
    )

  const url = 'http://localhost'

  it('sends to employee page on link click', () => {
    const { getByText } = component()
    const link = getByText('View Current Employees')
    fireEvent.click(link)
    expect(window.location.href).toBe(
      url + process.env.REACT_APP_EMPLOYEE_LIST_PAGE
    )
  })
})

describe('testing table template component', () => {
  // const employees: EmployeeType[] = [
  //   {
  //     firstName: 'string',
  //     lastName: 'string',
  //     dateOfBirth: new Date('2018, november'),
  //     startDate: new Date('01/01/2022'),
  //     department: DEPARTMENT.HUMAN,
  //     street: 'string',
  //     city: 'string',
  //     state: 'string',
  //     zipCode: 35000,
  //   },
  // ]

  const component = () =>
    render(
      <Router>
        <EmployeeTableTemplate />
      </Router>
    )

  const url = 'http://localhost'

  it('sends to home page on home link click', () => {
    const { getByText } = component()
    const link = getByText('Home')
    fireEvent.click(link)
    expect(window.location.href).toBe(
      url + process.env.REACT_APP_CREATE_EMPLOYEE_PAGE
    )
  })
})
