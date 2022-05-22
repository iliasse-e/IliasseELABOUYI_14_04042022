import React, { useState } from 'react'
import './table-search.css'

export const TableSearch = ({ handleSearch }) => {
  const [value, setValue] = useState('')

  return (
    <div className="table-search-container">
      <label>
        Search :
        <input
          value={value}
          data-testid="search"
          type="search"
          className="search-data"
          placeholder="Search data"
          aria-controls="data-table"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleSearch(e.target.value)
            setValue(e.target.value)
          }}
        ></input>
      </label>
    </div>
  )
}
