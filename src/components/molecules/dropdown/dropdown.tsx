import React from 'react'

interface DropdownProps {
  label: string
  value: string
  options: {
    label: string
    value: string
  }[]
  onChange: React.Dispatch<React.SetStateAction<any>>
}

/**
 * Creates and renders a whole dropdown (content and its title)
 * Called in Form
 * @param {string} props.label Title of the dropdown
 * @param {string} props.value value of the select
 * @param {Array<{label, value}>} props.options array of data to fill the dropdown list
 * @param {React.Dispatch<React.SetStateAction<any>>} props.onChange event triggered on change
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
      <select name={value} id={value} data-testid='select' value={value} onChange={onChange}>
        {options.map((option: { label: string; value: string }) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  )
}
