import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CreateEmployeePage } from './components/pages/create-employee'
import { EmployeeListPage } from './components/pages/employee-list'
import './App.css'
import { NotFound } from 'components/pages/not-found'
import { DataContextWrapper } from 'features/data-context-wrapper'

export const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <DataContextWrapper>
            <Route path="/employee-list" component={EmployeeListPage} exact />
            <Route path="/" component={CreateEmployeePage} exact />
          </DataContextWrapper>
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
