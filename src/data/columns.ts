import { Column, TYPE } from '../types'

export const columns: Column[] = [
  { title: 'First Name', data: 'firstName', type: TYPE.string },
  { title: 'Last Name', data: 'lastName', type: TYPE.string },
  { title: 'Start Date', data: 'startDate', type: TYPE.date },
  { title: 'Department', data: 'department', type: TYPE.string },
  { title: 'Date of Birth', data: 'dateOfBirth', type: TYPE.date },
  { title: 'Street', data: 'street', type: TYPE.string },
  { title: 'City', data: 'city', type: TYPE.string },
  { title: 'State', data: 'state', type: TYPE.string },
  { title: 'Zip Code', data: 'zipCode', type: TYPE.number },
]
