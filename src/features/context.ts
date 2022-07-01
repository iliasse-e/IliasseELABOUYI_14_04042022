import React, { createContext } from 'react'
import { EmployeeType } from '.././types'

/**
 * Context containing all employees and method to update employees
 */
interface ContextType {
  employees: EmployeeType[] | []
  setEmployees: React.Dispatch<React.SetStateAction<EmployeeType[]>>
}

const DataContext: React.Context<ContextType> = createContext({
  employees: [],
  setEmployees: () => {},
})

export default DataContext
