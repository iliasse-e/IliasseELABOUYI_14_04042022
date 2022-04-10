import React from 'react'

/**
 * Renders label created from content in param
 * @param content text content
 * @returns {JSX.Element} label
 */
export const Label = (content: string): JSX.Element => {
  const htmlFor = content.toLocaleLowerCase().split(' ').join('-')
  return <label htmlFor={htmlFor}>{content}</label>
}
