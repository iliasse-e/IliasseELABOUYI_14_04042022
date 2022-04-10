import React from 'react'

export const TableHeader = (content: any[]): JSX.Element => {
  return (
    <thead>
      <tr role="row">
        <th aria-label="{content}: activate to sort column descending">
          {content}
        </th>
      </tr>
    </thead>
  )
}
