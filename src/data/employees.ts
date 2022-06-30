import { DEPARTMENT } from 'types'
import { EmployeeType } from '../types'

/**
 * Mocked data used to init app's data
 * likely to be used for the MSW handler
 */
export const mockedEmployees: EmployeeType[] = [
  {
    firstName: 'Arman',
    lastName: 'Tsarukyan',
    dateOfBirth: new Date('1994'),
    startDate: new Date('2009'),
    department: DEPARTMENT.HUMAN,
    street: 'salt lake av',
    city: 'Richfield',
    state: 'Utah',
    zipCode: 52005,
  },
  {
    firstName: 'Islam',
    lastName: 'Makhachev',
    dateOfBirth: new Date('1992'),
    startDate: new Date('2009'),
    department: DEPARTMENT.HUMAN,
    street: 'salt lake av',
    city: 'Richfield',
    state: 'Utah',
    zipCode: 52005,
  },
  {
    firstName: 'Artur',
    lastName: 'Beterbiev',
    dateOfBirth: new Date('1985'),
    startDate: new Date('2009'),
    department: DEPARTMENT.HUMAN,
    street: 'salt lake av',
    city: 'Richfield',
    state: 'Utah',
    zipCode: 52005,
  },
  {
    firstName: 'Gennady',
    lastName: 'Golovkin',
    dateOfBirth: new Date('1982'),
    startDate: new Date('2009'),
    department: DEPARTMENT.HUMAN,
    street: 'salt lake av',
    city: 'Richfield',
    state: 'Utah',
    zipCode: 52005,
  },
  {
    firstName: 'Dimitri',
    lastName: 'Bivol',
    dateOfBirth: new Date('1998'),
    startDate: new Date('2009'),
    department: DEPARTMENT.HUMAN,
    street: 'salt lake av',
    city: 'Richfield',
    state: 'Utah',
    zipCode: 52005,
  },
  {
    firstName: 'Mateuzs',
    lastName: 'Gamrot',
    dateOfBirth: new Date('1994'),
    startDate: new Date('2009'),
    department: DEPARTMENT.HUMAN,
    street: 'polish av',
    city: 'Utah ville',
    state: 'Utah',
    zipCode: 52100,
  },
  {
    firstName: 'Vasily',
    lastName: 'Lomachenko',
    dateOfBirth: new Date('1998'),
    startDate: new Date('2009'),
    department: DEPARTMENT.HUMAN,
    street: 'salt lake av',
    city: 'Richfield',
    state: 'Utah',
    zipCode: 52005,
  },
  {
    firstName: 'Khabib',
    lastName: 'Nurmagomedov',
    dateOfBirth: new Date('1998'),
    startDate: new Date('2009'),
    department: DEPARTMENT.HUMAN,
    street: 'salt lake av',
    city: 'Richfield',
    state: 'Utah',
    zipCode: 52005,
  },
  {
    firstName: 'Naoya',
    lastName: 'Inoue',
    dateOfBirth: new Date('1998'),
    startDate: new Date('2009'),
    department: DEPARTMENT.HUMAN,
    street: 'salt lake av',
    city: 'Richfield',
    state: 'Utah',
    zipCode: 52005,
  },
  {
    firstName: 'Nonito',
    lastName: 'Donaire',
    dateOfBirth: new Date('1998'),
    startDate: new Date('2009'),
    department: DEPARTMENT.HUMAN,
    street: 'salt lake av',
    city: 'Richfield',
    state: 'Utah',
    zipCode: 52005,
  },
  {
    firstName: 'Nordine',
    lastName: 'Oubaali',
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