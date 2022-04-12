import React from 'react'
import { DropdownDataType } from '../../../data/departments'

interface DropdownProps {
  label: string
  value: string
  options: DropdownDataType
  onChange: any
}

/**
 * Creates and renders a whole dropdown (content and its title)
 * Called in Form
 * @param label Title of the dropdown
 * @param value value of the select
 * @param options array of data to fill the dropdown list
 * @param onChange event triggered on change
 * @returns dropdown
 */
export const Dropdown: React.FC<DropdownProps> = ({
  label,
  value,
  options,
  onChange,
}): JSX.Element => {
  return (
    <>
      <label>{label}</label>
      <select name={value} id={value} value={value} onChange={onChange}>
        {options.map((option: { label: string; value: string }) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  )
}
