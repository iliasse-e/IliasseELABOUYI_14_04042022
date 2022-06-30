import React, { useContext, useState } from 'react'
import { departments } from '../../../data/departments'
import { states } from '../../../data/states'
import DatePicker from 'react-datepicker'
import { Dropdown } from '../../molecules/dropdown/dropdown'
import 'react-datepicker/dist/react-datepicker.css'
import './form.css'
import { InputField } from 'components/molecules/input-field/input-field'
import { EmployeeCreatedModal } from '../modal/employee-created-modal'
import { DEPARTMENT, EmployeeType } from 'types'
import DataContext from 'features/context'
import { postEmployees } from 'components/services/api/fetch-data'

/**
 * Renders the form
 * Registers new employee
 */
export const Form = (): JSX.Element => {
  const birthDateDefault = new Date(
    new Date().setFullYear(new Date().getFullYear() - 25)
  )
  const startDateDefault = new Date(
    new Date().setDate(new Date().getDate() - 1)
  )

  const [firstName, setFirstName] = useState<string | null>(null)
  const [lastName, setLastName] = useState<string | null>(null)
  const [birthDate, setBirthDate] = useState<Date>(birthDateDefault)
  const [startDate, setStartDate] = useState<Date>(startDateDefault)
  const [street, setStreet] = useState<string | null>(null)
  const [city, setCity] = useState<string | null>(null)
  const [state, setState] = useState<string>(states[0].value)
  const [zipCode, setZipCode] = useState<number | null>(null)
  const [department, setDepartment] = useState<DEPARTMENT>(departments[0].value)
  const [isSubmited, setIsSubmited] = useState<boolean>(false)
  const { employees, setEmployees } = useContext(DataContext)

  const submitEmployee = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    const userInput: EmployeeType = {
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: birthDate,
      startDate: startDate,
      department: department,
      street: street,
      city: city,
      state: state,
      zipCode: zipCode,
    }

    const updtatedEmployees: EmployeeType[] = [...employees, userInput]

    await postEmployees(updtatedEmployees)
      .then(() => setEmployees(updtatedEmployees))
      .catch((err) => {
        console.error(err)
        setEmployees(employees)
      })
    ;(e.target as HTMLFormElement).reset()
    setIsSubmited(true)
  }

  return (
    <>
      {isSubmited && <EmployeeCreatedModal handleStateChange={setIsSubmited} />}
      <form id="create-employee" data-testid="form" onSubmit={submitEmployee}>
        <div className="form-container">
          <div className="form-column">
            <InputField
              textContent="First Name"
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFirstName(e.target.value)
              }
            />

            <InputField
              textContent="Last Name"
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setLastName(e.target.value)
              }
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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setStreet(e.target.value)
                }
              />

              <InputField
                textContent="City"
                type="text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCity(e.target.value)
                }
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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setZipCode(parseInt(e.target.value))
                }
              />
            </fieldset>
          </div>
        </div>
        <Dropdown
          label={'Department'}
          value={department}
          options={departments}
          onChange={(option: React.ChangeEvent<HTMLInputElement>) =>
            setDepartment(option.target.value as DEPARTMENT)
          }
        />
        <button className="form-btn" data-testid="submit-btn" type="submit">
          Save
        </button>
      </form>
    </>
  )
}
