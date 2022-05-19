import React, { useContext } from 'react'
import { PaginationButton } from 'components/table/atoms/button/pagination-button'
import { calculateRange } from 'components/table/services/calculate-range'
import { PaginationNumber } from '../pagination/pagination-number'
import { PaginationContext } from 'components/table/services/pagination-context'

interface TableFooterProps {
  data: Array<{ [key: string]: any }>
  entries: number
}

export const TableFooter: React.FC<TableFooterProps> = ({ data, entries }) => {
  const pageNo: number = useContext(PaginationContext).value
  const setPageNo: React.Dispatch<React.SetStateAction<number>> =
    useContext(PaginationContext).setValue
  return (
    <div className="table-footer">
      <div className="dataTables-info" role="status" aria-live="polite">
        Showing {entries * pageNo - entries + 1} to {entries * pageNo} of{' '}
        {data.length} entries
      </div>
      <div className="paginate-container">
        {pageNo > 1 ? (
          <PaginationButton
            content="Previous"
            onClickEvent={() => setPageNo(pageNo - 1)}
          />
        ) : (
          <PaginationButton content="Previous" />
        )}
        <PaginationNumber data={data} entries={entries} />
        {pageNo < calculateRange(data, entries).length ? (
          <PaginationButton
            content="Next"
            onClickEvent={() => setPageNo(pageNo + 1)}
          />
        ) : (
          <PaginationButton content="Next" />
        )}
      </div>
    </div>
  )
}
