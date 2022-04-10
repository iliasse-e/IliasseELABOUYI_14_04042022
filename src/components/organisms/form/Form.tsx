import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveEmployeeAction } from '../../../features/employee/actions'
import { departments } from '../../data/departments'
import { states } from '../../data/states'
import { Dropdown } from '../dropdown/Dropdown'

export const Form: React.FC = (): JSX.Element => {
  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [birthDate, setBirthDate] = useState(null)
  const [startDate, setStartDate] = useState(null)
  const [street, setStreet] = useState(null)
  const [city, setCity] = useState(null)
  const [state, setState] = useState(states[0].value) // default value
  const [zipCode, setZipCode] = useState(null)
  const [department, setDepartment] = useState(departments[0].value) // default value

  const dispatch = useDispatch()

  const handleSubmit = () => {
    console.log({
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: birthDate,
      startDate: startDate,
      department: department,
      street: street,
      city: city,
      state: state,
      zipCode: zipCode,
    })

    dispatch(
      saveEmployeeAction({
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: birthDate,
        startDate: startDate,
        department: department,
        street: street,
        city: city,
        state: state,
        zipCode: zipCode,
      })
    )
  }

  return (
    <div className="container">
      <a href="employee-list.html">View Current Employees</a>
      <h2>Create Employee</h2>
      <form action="#" id="create-employee" onSubmit={handleSubmit}>
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          id="first-name"
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          id="last-name"
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="date-of-birth">Date of Birth</label>
        <input
          id="date-of-birth"
          type="text"
          onChange={(e) => setBirthDate(e.target.value)}
        />

        <label htmlFor="start-date">Start Date</label>
        <input
          id="start-date"
          type="text"
          onChange={(e) => setStartDate(e.target.value)}
        />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input
            id="street"
            type="text"
            onChange={(e) => setStreet(e.target.value)}
          />

          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            onChange={(e) => setCity(e.target.value)}
          />

          <Dropdown
            label={'State'}
            value={state}
            options={states}
            onChange={(option: React.ChangeEvent<HTMLInputElement>) =>
              setState(option.target.value)
            }
          />

          <label htmlFor="zip-code">Zip Code</label>
          <input
            id="zip-code"
            type="number"
            onChange={(e) => setZipCode(e.target.value)}
          />
        </fieldset>

        <Dropdown
          label={'Department'}
          value={department}
          options={departments}
          onChange={(option: React.ChangeEvent<HTMLInputElement>) =>
            setDepartment(option.target.value)
          }
        />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}
