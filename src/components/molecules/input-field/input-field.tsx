import React from 'react'
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
  return (
    <div className="input-field">
      <input
        style={{ padding: '15px 0 0 0' }}
        placeholder=" "
        pattern="[a-zA-Z ]+"
        type={type}
        name={textContent.replace(' ', '-').toLocaleLowerCase()}
        id={textContent.replace(' ', '-').toLocaleLowerCase()}
        data-testid={textContent.replace(' ', '-').toLocaleLowerCase()}
        aria-label={textContent.replace(' ', '-').toLocaleLowerCase()}
        required
        onChange={onChange}
      />
      <label
        className="active"
        htmlFor={textContent.replace(' ', '-').toLocaleLowerCase()}
      >
        {textContent}
      </label>
    </div>
  )
}
