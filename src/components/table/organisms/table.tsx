import { useState } from 'react'
import './table.css'
import { SortedTable } from '../methods/sort'

export interface Column {
  title: string
  data: string
}

interface TableProps {
  columns: Column[]
  data: Array<{ [key: string]: any }>
  entries: number
}

/**
 * Renders table of data
 * @param { Column[] } obj.columns column labels to fill thead
 * @param { TableProps.data } obj.data data to fill the tbody
 * @returns table of data
 */
export const Table: React.FC<TableProps> = ({ columns, data, entries }): JSX.Element => {
  // hook that sorts data
  const [sortedField, setSortedField] = useState<any[]>(data)

  /**
   * Sorts table by calling a method and passing it parameters
   * @param by element by what it should sort the table
   * @param order up or down
   */
  const handleSort = (by: string, order: 'up' | 'down') => {
    setSortedField(SortedTable(sortedField, by, order))
  }

  return (
    <table>
      <thead>
        {columns.map((column) => (
          <th key={column.title}>
            {column.title}
            <div className="arrows">
              <i
                className="arrow up"
                onClick={() => handleSort(column.data, 'up')}
              ></i>
              <i
                className="arrow down"
                onClick={() => handleSort(column.data, 'down')}
              ></i>
            </div>
          </th>
        ))}
      </thead>
      <tbody>
        {sortedField.slice(0, entries).map((element) => (
          <tr>
            {columns.map((column) => (
              <td key={element[column.data]}>{element[column.data]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
