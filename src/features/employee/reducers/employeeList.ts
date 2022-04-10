import { SAVE_EMPLOYEE } from '../actions/type'

export interface EmployeeType {
  firstName: string | null
  lastName: string | null
  dateOfBirth: string | null
  startDate: string | null
  department: string | null
  street: string | null
  city: string | null
  state: string | null
  zipCode: string | null
}

const defaultState = {
  firstName: null,
  lastName: null,
  dateOfBirth: null,
  startDate: null,
  department: null,
  street: null,
  city: null,
  state: null,
  zipCode: null,
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
