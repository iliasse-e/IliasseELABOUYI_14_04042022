import React from 'react'
import { Column, HandleSort } from '../../type'
import './table-header.css'

interface TableHeaderProps {
  columns: Column[]
  onclick: HandleSort
}

/**
 * Sets the header's table
 * Called in table component
 * @param props {Array} names of employee's categories
 * @returns table header
 */
export const TableHeader: React.FC<TableHeaderProps> = ({
  columns,
  onclick,
}): JSX.Element => {
  const handleSort = onclick

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th style={{ color: 'white' }} key={column.title}>
            {column.title}
            <div className="arrows">
              <i
                className="arrow up"
                data-testid={column.data + '-arrow-up'}
                onClick={() => handleSort(column.data, 'up')}
              ></i>
              <i
                className="arrow down"
                onClick={() => handleSort(column.data, 'down')}
              ></i>
            </div>
          </th>
        ))}
      </tr>
    </thead>
  )
}
