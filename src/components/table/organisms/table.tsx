import { TableHeader } from '../molecules/tableHeader'
import { RootStateOrAny, useSelector } from 'react-redux'
import { EmployeeType } from '../../../features/employee/reducers/employeeList'
import { Rows } from '../molecules/rows'
import { useState } from 'react'

export const Table = (): JSX.Element => {
  // gets data from redux store
  const employees: EmployeeType[] = useSelector(
    (state: RootStateOrAny) => state.employees
  )
  // sets table categories
  const categories: string[] = Object.keys(employees[0])

  // sorted data
  const [sortedField, setSortedField] = useState(employees);
  console.log(sortedField)

  return (
    <table
      role="grid"
      className="display dataTable no-footer"
      id="employee-table"
      aria-describedby="employee-table_info"
    >
      <TableHeader cells={categories} method={setSortedField} employees={sortedField} />
      <Rows employees={sortedField} />
    </table>
  )
}
