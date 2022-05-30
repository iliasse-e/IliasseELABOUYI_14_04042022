import React from 'react'
import { Link } from 'react-router-dom'
import './template.css'
import { TableTemplate } from 'components/table/template/table-template'
import { columns } from 'data/columns'

export const EmployeeTableTemplate: React.FC<any> = ({ data }): JSX.Element => {
  console.log(data)
  return (
    <main>
      <Link
        className="link-to-create-employee form-btn"
        to={process.env.REACT_APP_CREATE_EMPLOYEE_PAGE}
      >
        Home
      </Link>
      <div className="container">
        <div className="table-title">
          <h2>Current Employees</h2>
        </div>
        <TableTemplate dataInput={data} columns={columns} />
      </div>
    </main>
  )
}
