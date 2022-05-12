import { calculateRange } from 'components/table/services/calculate-range'
import React, { useEffect, useRef } from 'react'

interface PaginationNumberProps {
  data: Array<{ [key: string]: any }>
  entries: number
  setPageNo: React.Dispatch<React.SetStateAction<number>>
  pageNo: number
}

export const PaginationNumber: React.FC<PaginationNumberProps> = ({
  data,
  entries,
  pageNo,
  setPageNo,
}): JSX.Element => {
  const btnRef = useRef(null)

  useEffect(() => {
    btnRef.current.className = 'active'
    console.log(pageNo)
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
