import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <main
      style={{
        position: 'absolute',
        textAlign: 'center',
        right: '33%',
        top: '33%',
      }}
    >
      <h1>This Page does not exist</h1>
      <Link
        style={{ margin: '50px' }}
        className="link-to-create-employee form-btn"
        to={process.env.REACT_APP_CREATE_EMPLOYEE_PAGE}
      >
        Go back Home
      </Link>
    </main>
  )
}
