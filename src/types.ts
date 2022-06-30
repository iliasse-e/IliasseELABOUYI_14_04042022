
export type EmployeeType = {
  firstName: string
  lastName: string
  dateOfBirth: Date
  startDate: Date
  department: DEPARTMENT
  street: string
  city: string
  state: string
  zipCode: number
}

export enum DEPARTMENT {
  SALES = 'sales',
  MARKETING = 'marketing',
  ENGINEERING = 'engineering',
  HUMAN = 'human',
  LEGAL = 'legal',
}

export interface Column {
  title: string
  data: string
  type?: TYPE
}

export enum TYPE {
  string = 'STRING',
  number = 'NUMBER',
  date = 'DATE',
}
