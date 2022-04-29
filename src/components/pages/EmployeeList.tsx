import React, { useState } from 'react'
import { Table } from '../table/organisms/table'
import { RootStateOrAny, useSelector } from 'react-redux'
import { EmployeeType } from '../../features/employee/reducers/employeeList'
import { columns } from '../../data/columns'

export const EmployeeListPage: React.FC = (): JSX.Element => {
  // gets data from redux store
  const employees: EmployeeType[] = useSelector(
    (state: RootStateOrAny) => state.employees
  )

  const [entries, setEntries] = useState(10)

  const calculateRange = (data, rowsPerPage) => {
    const range = [];
    const num = Math.ceil(data.length / rowsPerPage);
    for (let i = 1; i <= num; i++) {
      range.push(i);
    }
    return range;
  };

  return (
    <body>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <div
          className="table_header"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div className="dataTables_length" id="employee-table_length">
            <label>
              Show
              <select
                name="employee-table_length"
                aria-controls="employee-table"
                className="dataTables_select"
                onChange={(option: React.ChangeEvent<any>) =>
                  setEntries(option.target.value)
                }
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              entries
            </label>
          </div>
          <div id="employee-table_filter" className="dataTables_filter">
            <label>
              Search:
              <input
                type="search"
                className=""
                placeholder="Search employee"
                aria-controls="employee-table"
              ></input>
            </label>
          </div>
          <div
            id="employee-table_wrapper"
            className="dataTables_wrapper no-footer"
          ></div>
        </div>
        <Table columns={columns} data={employees} entries={entries} />
        <div
          className="table_footer"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div
            className="dataTables_info"
            id="employee-table_info"
            role="status"
            aria-live="polite"
          >
            Showing 1 to {entries} of {employees.length} entries
          </div>
          <div
            className="dataTables_paginate paging_simple_numbers"
            id="employee-table_paginate"
          >
            <a
              className="paginate_button previous disabled"
              aria-controls="employee-table"
              data-dt-idx="0"
              id="employee-table_previous"
            >
              Previous
            </a>
            <span>
              {calculateRange(employees, entries).map((btn) => (
                <a aria-controls="employee-table">{btn}</a>
              ))}
            </span>
            <a
              className="paginate_button next"
              aria-controls="employee-table"
              data-dt-idx="3"
              id="employee-table_next"
            >
              Next
            </a>
          </div>
        </div>
        <a href="/create-employee">Home</a>
      </div>
    </body>
  )
}
