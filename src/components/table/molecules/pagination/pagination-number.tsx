import { calculateRange } from 'components/table/services/calculate-range'
import { PaginationContext } from 'components/table/services/pagination-context'
import React, { useContext } from 'react'

interface PaginationNumberProps {
  data: Array<{ [key: string]: any }>
  entries: number
}

export const PaginationNumber: React.FC<PaginationNumberProps> = ({
  data,
  entries,
}): JSX.Element => {
  const pageNo: number = useContext(PaginationContext).value
  const setPageNo: React.Dispatch<React.SetStateAction<number>> =
    useContext(PaginationContext).setValue

  return (
    <span data-testid="pagination-btn-container">
      {calculateRange(data, entries).map((btn) => (
        <button
          className={btn === pageNo && 'active'}
          aria-controls="data-table"
          key={btn}
          onClick={() => setPageNo(btn)}
        >
          {btn}
        </button>
      ))}
    </span>
  )
}
