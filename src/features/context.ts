import { Column } from 'components/table/type'
import { columns } from 'data/columns'
import { createContext } from 'react'
import { EmployeeType } from '.././types'

interface ContextType {
  employees: EmployeeType[] | []
  columns: Column[]
}

export const DataContext: React.Context<ContextType> = createContext({
  employees: [],
  columns: columns,
})
