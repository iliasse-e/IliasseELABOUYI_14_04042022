import axios from 'axios'

export const getEmployees = async () => {
  const response = await axios.get(`/get-employees`)
  return response
}

export const postEmployees = async () => {
  const response = await axios.post('set-employees')
  return response
}
