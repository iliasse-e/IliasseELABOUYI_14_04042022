import { SAVE_EMPLOYEE } from '../actions/type'

export type EmployeeType = {
  firstName: string
  lastName: string
  dateOfBirth: Date | string
  startDate: Date | string
  department: string
  street: string
  city: string
  state: string
  zipCode: string
}

/**
 * Manages to save employee to store
 * @param state
 * @param action Logged, set profile, logout
 * @returns user profile informations
 */
export const EmployeeListReducer = (
  state: Array<EmployeeType> | [] = [],
  action: any = {}
): any[] => {
  switch (action.type) {
    case SAVE_EMPLOYEE:
      return [...state, action.employee]
    case 'GET_EMPLOYEE':
      return state
    default:
      return state
  }
}

export const AutheReducer = (
  action: any = { type: 'IS_LOGGED' },
  state: any = { isLogged: true }
) => {
  switch (action.type) {
    case 'IS_LOGGED':
      return { islogged: true }
    default:
      return state
  }
}
