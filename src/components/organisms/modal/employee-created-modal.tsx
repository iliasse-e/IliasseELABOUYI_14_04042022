import React from 'react'
import './employee-created-modal.css'

export const EmployeeCreatedModal = (props): JSX.Element => {
  const handleStateChange = props.handleStateChange

  return (
    <div id="created-employee-modal" className="modal">
      <header className="modal__header">
        <button data-testid="close-modal" id="close-modal" onClick={() => handleStateChange(false)}>
          X
        </button>
      </header>
      <div className="modal__content">
        <h4>Employee created</h4>
      </div>
    </div>
  )
}
