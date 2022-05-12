import React from 'react'
import { Link } from 'react-router-dom'
import './template.css'
import { TableTemplate } from 'components/table/template/table-template'

export const EmployeeTableTemplate: React.FC<any> = (props): JSX.Element => {
  return (
    <main>
      <Link
        className="link-to-create-employee form-btn"
        to={process.env.REACT_APP_CREATE_EMPLOYEE_PAGE}
      >
        <a>Home</a>
      </Link>
      <div className="container">
        <div className="table-title">
          <h2>Current Employees</h2>
        </div>
        <TableTemplate data={props.data} />
      </div>
    </main>
  )
}
