import { DEPARTMENT } from 'types'
import { EmployeeType } from '../types'

export const mockedEmployees: EmployeeType[] = [
  {
    firstName: 'Li',
    lastName: 'Jan',
    dateOfBirth: new Date('1998'),
    startDate: new Date('2009'),
    department: DEPARTMENT.HUMAN,
    street: 'salt lake av',
    city: 'Richfield',
    state: 'Utah',
    zipCode: 52005,
  },
]

export const mockedTwoEmployees: EmployeeType[] = [
  {
    firstName: 'PersonTwo',
    lastName: 'Jan',
    dateOfBirth: new Date('1998'),
    startDate: new Date('2009'),
    department: DEPARTMENT.HUMAN,
    street: 'salt lake av',
    city: 'Richfield',
    state: 'Utah',
    zipCode: 52005,
  },
  {
    firstName: 'PersonThree',
    lastName: 'Wanju',
    dateOfBirth: new Date('1998'),
    startDate: new Date('2009'),
    department: DEPARTMENT.HUMAN,
    street: 'salt lake av',
    city: 'Richfield',
    state: 'Utah',
    zipCode: 52005,
  },
]