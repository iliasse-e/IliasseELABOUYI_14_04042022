import React from 'react'

/**
 * Renders label created from content in param
 * @param content text content
 * @returns {JSX.Element} label
 */
export const Label: React.FC<{ content: string, style?: any }> = ({
  content,
  style,
}): JSX.Element => {
  const htmlFor = content.toLocaleLowerCase().replace(' ', '-')
  return (
    <label className="active" htmlFor={htmlFor} style={style}>
      {content}
    </label>
  )
}
