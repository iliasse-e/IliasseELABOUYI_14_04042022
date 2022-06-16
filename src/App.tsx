import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CreateEmployeePage } from './components/pages/create-employee'
import { EmployeeListPage } from './components/pages/employee-list'
import './App.css'
import { NotFound } from 'components/pages/not-found'
import DataContext from 'features/context'
import { EmployeeType } from 'types'
import { Loader } from 'components/atoms/loader/loader'

export const App: React.FC = (): JSX.Element => {
  const [employees, setEmployees] = useState<EmployeeType[] | []>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const value = { employees, setEmployees }

  useEffect(() => {
    const fetchEmployees = async () => {
      setIsLoading(true)
      try {
        const response = await fetch('api/get-employees')
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
    return (
      <DataContext.Provider value={value}>
        <Router>
          <div className="app">
            <Switch>
              <Route path="/employee-list" component={EmployeeListPage} exact />
              <Route path="/" component={CreateEmployeePage} exact />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </Router>
      </DataContext.Provider>
    )
  }
}

export default App
