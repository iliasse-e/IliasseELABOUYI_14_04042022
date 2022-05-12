import React from 'react'
import './table-search.css'

export const TableSearch = ({ handleSearch }) => {
  return (
    <div className="table-search-container">
      <label>
        Search :
        <input
          type="search"
          className="search-data"
          placeholder="Search data"
          aria-controls="data-table"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleSearch(e.target.value)
          }
        ></input>
      </label>
    </div>
  )
}
