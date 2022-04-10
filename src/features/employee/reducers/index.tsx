import { combineReducers } from 'redux'
import { AutheReducer, EmployeeListReducer } from './employeeList'

/**
 * Gathers all reducers in object
 */
export const rootReducers = combineReducers({
  employees: EmployeeListReducer,
  auth: AutheReducer,
})
