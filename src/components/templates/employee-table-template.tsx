import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './template.css'
import { TableTemplate } from 'components/table/template/table-template'
import { columns } from 'data/columns'
import DataContext from 'features/context'

export const EmployeeTableTemplate: React.FC = (): JSX.Element => {
  const { employees } = useContext(DataContext)

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
        <TableTemplate
          dataInput={employees}
          columns={columns}
          color={'#88FF22'}
        />
      </div>
    </main>
  )
}
