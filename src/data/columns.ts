import { Column } from '../components/table/type'

export const columns: Column[] = [
  { title: 'First Name', data: 'firstName', type: 'STRING' },
  { title: 'Last Name', data: 'lastName', type: 'STRING' },
  { title: 'Start Date', data: 'startDate', type: 'DATE' },
  { title: 'Department', data: 'department', type: 'STRING' },
  { title: 'Date of Birth', data: 'dateOfBirth', type: 'DATE' },
  { title: 'Street', data: 'street', type: 'STRING' },
  { title: 'City', data: 'city', type: 'STRING' },
  { title: 'State', data: 'state', type: 'STRING' },
  { title: 'Zip Code', data: 'zipCode', type: 'NUMBER' },
]
