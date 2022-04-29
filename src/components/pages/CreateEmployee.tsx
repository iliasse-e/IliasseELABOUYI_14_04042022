import React from 'react'
import { Form } from '../organisms/form/Form'

export const CreateEmployeePage: React.FC = () => {
  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <Form />
      <div id="confirmation" className="modal">
        Employee Created!
      </div>
    </div>
  )
}
