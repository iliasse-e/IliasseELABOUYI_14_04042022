import axios from 'axios'
import { mockedEmployees } from '../../../data/employees'
import { EmployeeType } from 'types'

const baseUrl = process.env.REACT_APP_BACKEND_API_BASE_URL
const getEmployeesPathName =
  process.env.REACT_APP_BACKEND_API_GET_EMPLOYEES_PATHNAME
const postEmployeesPathName =
  process.env.REACT_APP_BACKEND_API_POST_EMPLOYEES_PATHNAME

export const getEmployees = async (): Promise<any> => {
  return fetch(`${baseUrl + getEmployeesPathName}`)
}

// export const getEmployees = async (): Promise<EmployeeType[]> => {
//   return axios
//     .get(`${baseUrl + getEmployeesPathName}`)
//     .then((res) => res.data.employeeList)
// }

export const postEmployees = async (
  data: EmployeeType[]
): Promise<EmployeeType[]> => {
  return axios.post(`${baseUrl + postEmployeesPathName}`, data)
}

// returning data from storage, without pretending to call an API

export const initialState = () => {
  if (sessionStorage.getItem('employees') === null) {
    sessionStorage.setItem('employees', JSON.stringify(mockedEmployees))
  }
  const response = JSON.parse(sessionStorage.getItem('employees'))
  return response
}
