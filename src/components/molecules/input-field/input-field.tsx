import { Input } from 'components/atoms/input/input'
import { Label } from 'components/atoms/label/label'
import React, { useState } from 'react'
import './input-field.css'

type HTMLInputTypeAttribute =
  | 'number'
  | 'search'
  | 'button'
  | 'time'
  | 'image'
  | 'text'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'month'
  | 'password'
  | 'radio'
  | 'range'

interface InputFieldProps {
  textContent: string
  type: HTMLInputTypeAttribute
  onChange: React.Dispatch<React.SetStateAction<any>>
}

/**
 * Displays a container of input and its label
 * @param {string} props.textContent content of the label, used also to define id, for and name attribute
 * @param {HTMLInputTypeAttribute} props.type type of input
 * @param {any} props.onChange content of the onChange method inside input
 * @returns input field
 */
export const InputField: React.FC<InputFieldProps> = ({
  textContent,
  type,
  onChange,
}): JSX.Element => {
  const [isValid, setIsValid] = useState(false)
  const errorStyle= {color: "red"}
  return (
    <div className="input-field" data-error={isValid}>
      <Input
        content={textContent}
        type={type}
        onChange={onChange}
        setIsValid={setIsValid}
      />
      {isValid ? <Label content={textContent} style={errorStyle} /> : <Label content={textContent} />}
      {isValid && <span className='error-msg'>error format</span>}
    </div>
  )
}
