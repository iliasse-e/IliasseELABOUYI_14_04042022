import React, { useState } from 'react'
import { Table } from '../organisms/table'
import { columns } from '../../../data/columns'
import './template.css'
import '../molecules/pagination/pagination.css'
import { TableDropdown } from '../molecules/dropdown/table-dropdown'
import { TableSearch } from '../molecules/search/table-search'
import { TableFooter } from '../molecules/footer/table-footer'

export const TableTemplate: React.FC<any> = (props): JSX.Element => {
  const getData: Array<{ [key: string]: any }> = props.data

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
    <section className="table-section-container">
      <div className="table-header">
        <TableDropdown setEntries={setEntries} setPageNo={setPageNo} />
        <TableSearch handleSearch={handleSearch} />
      </div>
      <Table columns={columns} data={data} entries={entries} pageNo={pageNo} />
      <TableFooter
        data={data}
        pageNo={pageNo}
        entries={entries}
        setPageNo={setPageNo}
      />
    </section>
  )
}
