import { useContext, useEffect, useState } from 'react'
import { SortedTable } from '../services/sort'
import { TableHeader } from '../molecules/table-header/table-header'
import { TableBody } from '../molecules/table-body/table-body'
import { HandleSort, TableProps } from '../type'
import './table.css'
import { TableColor } from '../services/table-color-context'

/**
 * Renders table of data
 * @param { Column[] } obj.columns column labels to fill thead
 * @param { TableProps.data } obj.data data to fill the tbody
 * @param { number } obj.entries sets the number of rows to show (10, 25 or any number of lines)
 * @returns table of data
 */
export const Table: React.FC<TableProps> = ({
  columns,
  data,
  entries,
  pageNo,
}): JSX.Element => {
  const bgColor = useContext(TableColor).value
  // hook that sorts data
  const [sortedField, setSortedField] = useState<any[]>(data)

  useEffect(() => {
    setSortedField(data)
  }, [data])

  /**
   * Sorts table by calling a method and passing it parameters
   * @param by element by what it should sort the table
   * @param order up or down
   */
  const handleSort: HandleSort = (by: string, order: 'up' | 'down'): void => {
    setSortedField(SortedTable(sortedField, by, order))
  }

  return (
    <table className="data-table" style={{ backgroundColor: bgColor } }>
      <TableHeader columns={columns} onclick={handleSort} />
      <TableBody
        fields={sortedField}
        entries={entries}
        pageNo={pageNo}
        columns={columns}
      />
    </table>
  )
}
