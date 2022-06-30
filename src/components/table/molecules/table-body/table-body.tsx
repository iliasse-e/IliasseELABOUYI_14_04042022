import { convertDate } from 'components/services/formate-date/formate-date'
import React from 'react'
import { Column } from '../../type'
import './table-body.css'
import { TYPE } from '../../type'

interface TableBodyProps {
  fields: any[]
  pageNo: number
  entries: number
  columns: Column[]
}

/**
 * Renders table body that fits into a table
 * Converts Date types into string formated type (no need to convert already)
 * @param param0
 * @returns tbody
 */
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
          <tr key={Math.random()}>
            {columns.map((column) => {
              return column.type === TYPE.date ? (
                <td key={convertDate(element[column.data])}>
                  {convertDate(element[column.data])}
                </td>
              ) : (
                <td key={element[column.data]}>{element[column.data]}</td>
              )
            })}
          </tr>
        ))}
    </tbody>
  )
}
