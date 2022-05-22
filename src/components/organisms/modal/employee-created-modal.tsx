import React from 'react'
import './employee-created-modal.css'

/**
 * Confirmation modal that pops up after form has been successfully submited
 * @param handleStateChange State that will be given to the parent after close btn is triggered
 * @returns Confirmation modal HTML Element
 */
export const EmployeeCreatedModal: React.FC<{
  handleStateChange: React.Dispatch<React.SetStateAction<any>>
}> = ({ handleStateChange }): JSX.Element => {
  return (
    <div id="created-employee-modal" className="modal">
      <header className="modal__header">
        <button
          data-testid="close-modal"
          id="close-modal"
          onClick={() => handleStateChange(false)}
        >
          X
        </button>
      </header>
      <div className="modal__content">
        <h4>Employee created</h4>
      </div>
    </div>
  )
}
