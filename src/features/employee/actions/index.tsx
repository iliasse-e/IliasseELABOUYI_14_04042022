/**
 * @file Gathers all redux actions
 */

import { EmployeeType } from '../reducers/employeeList'
import { SAVE_EMPLOYEE } from './type'

interface Return {
  type: string
  employee: EmployeeType
}

export const saveEmployeeAction = (employee: EmployeeType): Return => {
  return {
    type: SAVE_EMPLOYEE,
    employee: employee,
  }
}
