import axios from 'axios'
import { mockedEmployees } from 'mocks/mocks'
import { EmployeeType } from 'types'

// mocks API with MSW

export const getEmployees = async (): Promise<any> => {
  await axios.get('api/get-employees').then((res) => {
    return res.data.employeeList
  })
}

export const postEmployees = async (data: EmployeeType[]) => {
  await axios.post('api/set-employees', data)
}

// mocks API by returning a Promise

// export const fetchInitialState = async () => {
//   if (sessionStorage.getItem('employees') === null) {
//     sessionStorage.setItem('employees', JSON.stringify(mockedEmployees))
//   }
//   const response = JSON.parse(sessionStorage.getItem('employees'))
//   return new Promise((resolve) => {
//     resolve({ data: { response } })
//   })
// }

// returning data from storage, without pretending to call an API

export const initialState = () => {
  if (sessionStorage.getItem('employees') === null) {
    sessionStorage.setItem('employees', JSON.stringify(mockedEmployees))
  }
  const response = JSON.parse(sessionStorage.getItem('employees'))
  return response
}
