import { EmployeeType } from 'types'
import { getEmployees, postEmployees } from './fetch-data'

/**
 * Add new employee item to current employees storage list
 * @param employee
 */
export const addNewEmployee = async (
  employee: EmployeeType
): Promise<EmployeeType[]> => {
  try {
    const response = await getEmployees()
    // getting current data
    let newData: EmployeeType[] = [...response?.data?.employeeList]
    // adding new employee to employees list
    newData.push(employee)
    postEmployees(newData)
    return newData
  } catch (err) {
    console.log(err)
  }
}
