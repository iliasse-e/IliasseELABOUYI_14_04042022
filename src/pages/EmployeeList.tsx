import React from 'react'
import { Table } from '../components/table/organisms/table'

export const EmployeeListPage: React.FC = (): JSX.Element => {
  return (
    <body>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <Table />
        <a href="/">Home</a>
      </div>
    </body>
  )
}
