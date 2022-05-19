import React, { useState } from 'react'
import { Table } from '../organisms/table'
import './template.css'
import '../molecules/pagination/pagination.css'
import { TableDropdown } from '../molecules/dropdown/table-dropdown'
import { TableSearch } from '../molecules/search/table-search'
import { TableFooter } from '../molecules/footer/table-footer'
import { PaginationContext } from '../services/pagination-context'
import { Column } from '../type'

interface TableTemplateProps {
  data: Array<{ [key: string]: any }>
  columns: Column[]
}

export const TableTemplate: React.FC<TableTemplateProps> = (
  props
): JSX.Element => {
  const getData: Array<{ [key: string]: any }> = props.data
  const columns = props.columns

  const [entries, setEntries] = useState(10)
  const [pageNo, setPageNo] = useState(1)
  const [data, setData] = useState<Array<{ [key: string]: any }>>(getData)

  const handleSearch = (word: string): void => {
    const res = getData.filter((element) =>
      JSON.stringify(Object.values(element))
        .toLocaleLowerCase()
        .includes(word.toLocaleLowerCase())
    )
    console.log(data, res, word)
    setData(res)
    // Showing 11 to 20 of 19 entries
    setPageNo(1)
    console.log(data)
  }

  return (
    <PaginationContext.Provider value={{ value: pageNo, setValue: setPageNo }}>
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
  )
}
