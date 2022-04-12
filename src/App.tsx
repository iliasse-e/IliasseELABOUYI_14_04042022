import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { CreateEmployeePage } from './pages/CreateEmployee'
import { EmployeeListPage } from './pages/EmployeeList'

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/employee-list" component={EmployeeListPage} exact />
          <Route path="/create-employee" component={CreateEmployeePage} exact />
        </Switch>
      </div>
    </Router>
  )
}

export default App
