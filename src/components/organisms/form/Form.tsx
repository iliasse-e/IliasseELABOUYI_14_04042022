import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveEmployeeAction } from '../../../features/employee/actions'
import { departments } from '../../../data/departments'
import { states } from '../../../data/states'
import { Dropdown } from '../dropdown/Dropdown'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { convertDate } from '../../methods/formateDate'

/**
 * Renders the form
 * Saves new employees to the store
 * called in create employee page
 * @returns create employee form
 */
export const Form: React.FC = (): JSX.Element => {
  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [birthDate, setBirthDate] = useState<Date | null>(null)
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [street, setStreet] = useState<string | null>(null)
  const [city, setCity] = useState(null)
  const [state, setState] = useState(states[0].value) // default value
  const [zipCode, setZipCode] = useState(null)
  const [department, setDepartment] = useState(departments[0].value) // default value

  const dispatch = useDispatch()

  const handleSubmit = () => {
    console.log({
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: convertDate(birthDate),
      startDate: convertDate(startDate),
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
        dateOfBirth: convertDate(birthDate),
        startDate: convertDate(startDate),
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
      <a href="employee-list">View Current Employees</a>
      <h2>Create Employee</h2>
      <form action="#" id="create-employee" onSubmit={handleSubmit}>
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          id="first-name"
          required
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          id="last-name"
          required
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="date-of-birth">Date of Birth</label>
        <DatePicker
          id="date-of-birth"
          selected={birthDate}
          onChange={(date) => setBirthDate(date)}
          showYearDropdown
          dateFormatCalendar="MMMM"
          yearDropdownItemNumber={30}
          required
          scrollableYearDropdown
        />

        <label htmlFor="start-date">Start Date</label>
        <DatePicker
          id="start-date"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showYearDropdown
          dateFormatCalendar="MMMM"
          yearDropdownItemNumber={15}
          required
          scrollableYearDropdown
        />

        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input
            id="street"
            type="text"
            required
            onChange={(e) => setStreet(e.target.value)}
          />

          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            required
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
            required
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
