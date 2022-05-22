import React from 'react'
import './table-dropdown.css'

interface TableDropdownProps {
  setEntries: React.Dispatch<React.SetStateAction<number>>
  setPageNo: React.Dispatch<React.SetStateAction<number>>
}

export const TableDropdown: React.FC<TableDropdownProps> = ({
  setEntries,
  setPageNo,
}) => {
  return (
    <div className="table-dropdown" id="data-table_length">
      <label>
        Show
        <select
          data-testid="table-dropdown"
          name="data-table_length"
          aria-controls="data-table"
          className="dataTables_select"
          onChange={(option: React.ChangeEvent<any>) => {
            setEntries(option.target.value)
            setPageNo(1)
          }}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        entries
      </label>
    </div>
  )
}
