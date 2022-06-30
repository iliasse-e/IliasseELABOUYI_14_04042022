import React, { useState } from 'react'
import { Table } from '../organisms/table'
import './template.css'
import '../molecules/pagination/pagination.css'
import { TableDropdown } from '../molecules/dropdown/table-dropdown'
import { TableSearch } from '../molecules/search/table-search'
import { TableFooter } from '../molecules/footer/table-footer'
import { PaginationContext } from '../services/pagination-context'
import { Color, Column } from '../type'
import { TableColor } from '../services/table-color-context'

interface TableTemplateProps {
  dataInput: Array<{ [key: string]: any }>
  columns: Column[]
  color: Color
}

/**
 * Root of the data table package
 */
export const TableTemplate: React.FC<TableTemplateProps> = ({
  dataInput,
  columns,
  color,
}): JSX.Element => {
  const [entries, setEntries] = useState(10)
  const [pageNo, setPageNo] = useState(1)
  const [data, setData] = useState<Array<{ [key: string]: any }>>(dataInput)

  const handleSearch = (word: string): void => {
    const res = dataInput.filter((element) =>
      JSON.stringify(Object.values(element))
        .toLocaleLowerCase()
        .includes(word.toLocaleLowerCase())
    )
    setData(res)
    setPageNo(1)
  }

  return (
    <TableColor.Provider value={{ value: color }}>
      <PaginationContext.Provider
        value={{ value: pageNo, setValue: setPageNo }}
      >
        <section className="table-section-container">
          <div className="table-header">
            <TableDropdown setEntries={setEntries} setPageNo={setPageNo} />
            <TableSearch handleSearch={handleSearch} />
          </div>
          <Table
            columns={columns}
            data={data}
            entries={entries}
            pageNo={pageNo}
          />
          <TableFooter data={data} entries={entries} />
        </section>
      </PaginationContext.Provider>
    </TableColor.Provider>
  )
}
