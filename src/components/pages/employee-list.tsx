import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'
import { EmployeeType } from 'features/employee/reducers/employeeList'
import { EmployeeTableTemplate } from 'components/templates/employee-table-template'

export const EmployeeListPage: React.FC = (): JSX.Element => {
  // gets data from redux store
  const employees: EmployeeType[] = useSelector(
    (state: RootStateOrAny) => state.employees
  )
  return <EmployeeTableTemplate data={employees} />
}
