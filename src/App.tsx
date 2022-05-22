import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CreateEmployeePage } from './components/pages/create-employee'
import { EmployeeListPage } from './components/pages/employee-list'
import './App.css'
import { NotFound } from 'components/pages/not-found'

export const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/employee-list" component={EmployeeListPage} exact />
          <Route path="/" component={CreateEmployeePage} exact />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
