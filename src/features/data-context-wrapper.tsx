import React, { useEffect, useState } from 'react'
import DataContext from 'features/context'
import { EmployeeType } from 'types'
import { Loader } from 'components/atoms/loader/loader'
import { getEmployees } from 'components/services/api/fetch-data'

/**
 * Component containing the employee context that need to wrap App component
 */
export const DataContextWrapper = ({ children }): JSX.Element => {
  const [employees, setEmployees] = useState<EmployeeType[] | []>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const value = { employees, setEmployees }

  useEffect(() => {
    const fetchEmployees = async () => {
      setIsLoading(true)
      try {
        const response = await getEmployees()
        const data = await response.json()
        setEmployees(data.employeeList)
        setIsLoading(false)
      } catch (err) {
        console.error(err)
      }
    }
    fetchEmployees()
  }, [])
  if (isLoading) return <Loader />
  else {
    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
  }
}
