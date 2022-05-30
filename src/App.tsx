import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CreateEmployeePage } from './components/pages/create-employee'
import { EmployeeListPage } from './components/pages/employee-list'
import './App.css'
import { NotFound } from 'components/pages/not-found'
import { DataContext } from 'features/context'
import { getEmployees, postEmployees } from 'components/services/fetch-data'
import { EmployeeType } from 'types'
import { columns } from 'data/columns'

export const App: React.FC = (): JSX.Element => {
  const [employees, setEmployees] = useState<EmployeeType[] | []>()

  useEffect(() => {
    try {
      const axiosGet = async () => {
        postEmployees()
        const response = await getEmployees()
        setEmployees(response?.data?.employeeList)
      }
      axiosGet()
    } catch (err) {
      alert(err)
    }
  }, [])

  return (
    <DataContext.Provider value={{ employees, columns }}>
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

export default App
