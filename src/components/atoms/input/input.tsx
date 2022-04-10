import React from 'react'

interface InputType {
  type: React.HTMLInputTypeAttribute
  id: string
  className?: string
}

/**
 * Renders Input from few param data
 * @param {React.HTMLInputTypeAttribute} input.type "text", "radio", or other HTML input type
 * @param {string} input.id id name for the element
 * @param {string} input.className class name for the element
 * @returns {JSX.Element} input
 */
export const Input: React.FC<InputType> = ({
  id,
  type,
  className,
}): JSX.Element => {
  return <input id={id} type={type} className={className} />
}
