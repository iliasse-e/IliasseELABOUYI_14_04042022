import { EmployeeType } from 'types'
import { postEmployees } from './api/fetch-data'

/**
 * Sends request to register new employee
 * If the request does not recall, return initial employee array
 */
export const addNewEmployee = async (
  updatedEmployees: EmployeeType[],
  currentEmployees: EmployeeType[]
): Promise<EmployeeType[]> => {
  return postEmployees(updatedEmployees)
    .then((response) => response)
    .catch((err) => {
      console.error(err)
      return currentEmployees
    })
}
