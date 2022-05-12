import React from 'react'
import { Column } from '../../type'
import './table-body.css'

interface TableBodyProps {
  fields: any[]
  pageNo: number
  entries: number
  columns: Column[]
}

export const TableBody: React.FC<TableBodyProps> = ({
  fields,
  pageNo,
  entries,
  columns,
}): JSX.Element => {
  return (
    <tbody className="data-table__body">
      {fields
        .slice(entries * pageNo - entries, entries * pageNo)
        .map((element) => (
          <tr>
            {columns.map((column) => (
              <td key={element[column.data]}>{element[column.data]}</td>
            ))}
          </tr>
        ))}
    </tbody>
  )
}
