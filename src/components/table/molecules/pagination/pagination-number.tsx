import { calculateRange } from 'components/table/services/calculate-range'
import { PaginationContext } from 'components/table/services/pagination-context'
import React, { useContext, useEffect, useRef } from 'react'

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

  const btnRef = useRef(null)

  useEffect(() => {
    console.log(pageNo)
    btnRef.current.className = 'active'
  }, [pageNo])

  return (
    <span>
      {calculateRange(data, entries).map((btn) => (
        <button
          className={btn === pageNo && 'not-active'}
          aria-controls="data-table"
          key={btn}
          onClick={() => setPageNo(btn)}
          ref={btn === pageNo ? btnRef : null}
        >
          {btn}
        </button>
      ))}
    </span>
  )
}
