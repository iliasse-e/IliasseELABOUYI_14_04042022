import React, { useRef } from 'react'
import './input.css'

interface InputType {
  content: string
  type: string
  onChange: React.Dispatch<React.SetStateAction<any>>
  setIsValid?: React.Dispatch<React.SetStateAction<any>>
}

/**
 * Renders Input from few param data
 * @param {React.HTMLInputTypeAttribute} input.type "text", "radio", or other HTML input type
 * @param {string} input.id id name for the element
 * @param {string} input.className class name for the element
 * @returns {JSX.Element} input
 */
export const Input: React.FC<InputType> = ({
  content,
  type,
  onChange,
  setIsValid,
}): JSX.Element => {
  const input = useRef(null)

  return (
    <input
      style={{ padding: '15px 0 0 0' }}
      placeholder=" "
      pattern="[a-zA-Z ]+"
      type={type}
      ref={input}
      name={content.replace(' ', '-').toLocaleLowerCase()}
      id={content.replace(' ', '-').toLocaleLowerCase()}
      data-testid={content.replace(' ', '-').toLocaleLowerCase()}
      aria-label={content.replace(' ', '-').toLocaleLowerCase()}
      required
      onChange={() => {
        if (setIsValid) {
          setIsValid(!input.current?.checkValidity())
        }
        return onChange
      }}
    />
  )
}
