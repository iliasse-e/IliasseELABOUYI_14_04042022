import React, { useContext } from 'react'
import { EmployeeTableTemplate } from 'components/templates/employee-table-template'
import { DataContext } from 'features/context'

export const EmployeeListPage: React.FC = (): JSX.Element => {
  const data = useContext(DataContext).employees

  return <EmployeeTableTemplate data={data} />
}
