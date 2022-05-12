import React from 'react'
import { PaginationButton } from 'components/table/atoms/button/pagination-button'
import { calculateRange } from 'components/table/services/calculate-range'
import { PaginationNumber } from '../pagination/pagination-number'

interface TableFooterProps {
  data: Array<{ [key: string]: any }>
  pageNo: number
  entries: number
  setPageNo: React.Dispatch<React.SetStateAction<number>>
}

export const TableFooter: React.FC<TableFooterProps> = ({
  data,
  pageNo,
  entries,
  setPageNo,
}) => {
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
        <PaginationNumber
          data={data}
          entries={entries}
          pageNo={pageNo}
          setPageNo={setPageNo}
        />
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
