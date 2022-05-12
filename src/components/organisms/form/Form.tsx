import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveEmployeeAction } from '../../../features/employee/actions'
import { departments } from '../../../data/departments'
import { states } from '../../../data/states'
import DatePicker from 'react-datepicker'
import { convertDate } from '../../services/formate-date'
import { Dropdown } from '../../molecules/dropdown/dropdown'
import 'react-datepicker/dist/react-datepicker.css'
import './form.css'
import { InputField } from 'components/molecules/input-field/input-field'

/**
 * Renders the form
 * Saves new data to the store
 * @returns create employee form
 */
export const Form = (props): JSX.Element => {
  const birthDateDefault = new Date(
    new Date().setFullYear(new Date().getFullYear() - 25)
  )
  const startDateDefault = new Date(
    new Date().setDate(new Date().getDate() - 1)
  )

  const handleStateChange = props.handleStateChange
  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [birthDate, setBirthDate] = useState<Date>(birthDateDefault)
  const [startDate, setStartDate] = useState<Date>(startDateDefault)
  const [street, setStreet] = useState<string | null>(null)
  const [city, setCity] = useState(null)
  const [state, setState] = useState(states[0].value) // default value
  const [zipCode, setZipCode] = useState(null)
  const [department, setDepartment] = useState(departments[0].value) // default value

  const dispatch = useDispatch()

  const handleSubmit = (e: any) => {
    e.preventDefault()

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
    e.target.reset()
    handleStateChange(true)
  }

  return (
    <form id="create-employee" onSubmit={handleSubmit}>
      <div className="form-container">
        <div className="form-column">
          <InputField
            textContent="First Name"
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
          />

          <InputField
            textContent="Last Name"
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
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
        </div>
        <div className="form-column">
          <fieldset className="address">
            <legend>Address</legend>

            <InputField
              textContent="Street"
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStreet(e.target.value)}
            />

            <InputField
              textContent="City"
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}
            />

            <Dropdown
              label={'State'}
              value={state}
              options={states}
              onChange={(option: React.ChangeEvent<HTMLInputElement>) =>
                setState(option.target.value)
              }
            />

            <InputField
              textContent="Zip Code"
              type="number"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setZipCode(e.target.value)}
            />
          </fieldset>
        </div>
      </div>
      <Dropdown
        label={'Department'}
        value={department}
        options={departments}
        onChange={(option: React.ChangeEvent<HTMLInputElement>) =>
          setDepartment(option.target.value)
        }
      />
      <button className="form-btn" type="submit">
        Save
      </button>
    </form>
  )
}
