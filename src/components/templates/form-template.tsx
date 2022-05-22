import { Form } from '../organisms/form/form'
import { Link } from 'react-router-dom'
import './template.css'

export const FormTemplate = (): JSX.Element => {

  return (
    <>
      <header className="title">
        <h1>HRnet</h1>
      </header>
      <main>
        <Link
          className="link-to-employee-list form-btn"
          to={process.env.REACT_APP_EMPLOYEE_LIST_PAGE}
        >
          View Current Employees
        </Link>
        <div className="container">
          <div className="form-header">
            <h2>Create Employee</h2>
          </div>
          <Form />
        </div>
      </main>
    </>
  )
}
