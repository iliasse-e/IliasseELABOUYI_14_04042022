import { Form } from '../organisms/form/form'
import { Link } from 'react-router-dom'
import './template.css'
import { useState } from 'react'
import { EmployeeCreatedModal } from 'components/organisms/modal/employee-created-modal'

export const FormTemplate = (): JSX.Element => {
  const [isSubmited, setIsSubmited] = useState(false)

  const handleStateChange = (boolean: boolean) => {
    setIsSubmited(boolean)
  }
  return (
    <>
      {isSubmited && (
        <EmployeeCreatedModal handleStateChange={handleStateChange} />
      )}
      <header className="title">
        <h1>HRnet</h1>
      </header>
      <main>
        <Link
          className="link-to-employee-list form-btn"
          to={process.env.REACT_APP_EMPLOYEE_LIST_PAGE}
        >
          <a>View Current Employee</a>
        </Link>
        <div className="container">
          <div className="form-header">
            <h2>Create Employee</h2>
          </div>
          <Form handleStateChange={handleStateChange} />
        </div>
      </main>
    </>
  )
}
