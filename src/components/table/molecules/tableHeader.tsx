import React from 'react'
import { EmployeeType } from '../../../features/employee/reducers/employeeList'
import './tableHeader.css'

interface PropsType {
  columns: any
  method: React.Dispatch<React.SetStateAction<EmployeeType[]>>
  employees: EmployeeType[]
}

/**
 * Sets the header's table
 * Called in table component
 * @param props {Array} names of employee's categories
 * @returns table header
 */
export const TableHeader: React.FC<PropsType> = (props): JSX.Element => {
  const columns: string[] = props.columns
  const setSortedField = props.method
  const employees = props.employees

  const sortByName = () => {
    const sortedData = employees.sort((a: EmployeeType, b: EmployeeType) => {
      return parseFloat(a.firstName) - parseFloat(b.firstName)
    })

    console.log(sortedData)
    setSortedField(sortedData)
  }

  return (
    <thead className="table__header">
      <tr role="row">
        {columns.map((cell: any) => (
          <th
            className="sorting categories"
            tabIndex={0}
            rowSpan={1}
            aria-controls="employee-table"
            aria-label={cell + ' active to sort column ascending'}
            key={cell}
          >
            <div style={{ display: 'flex', textTransform: 'capitalize' }}>
              <p>{cell.replace(/([A-Z])/g, ' $1').trim()}</p>
              <div className="sorting-btn-container">
                <button
                  id={cell + '-asc-sort'}
                  className="sort-asc"
                  onClick={sortByName}
                >
                  ▲
                </button>
                <button id={cell + '-desc-sort'} className="sort-desc">
                  ▼
                </button>
              </div>
            </div>
          </th>
        ))}
      </tr>
    </thead>
  )
}
