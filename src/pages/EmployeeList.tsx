import React from 'react'
import { Table } from '../components/table/organisms/table'

export const EmployeeListPage: React.FC = (): JSX.Element => {
  return (
    <body>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <div
          id="employee-table_wrapper"
          className="dataTables_wrapper no-footer"
        >
          <Table />
        </div>
        <a href="/create-employee">Home</a>
      </div>
    </body>
  )
}
