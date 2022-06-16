import { TableColor } from 'components/table/services/table-color-context'
import { useContext } from 'react'
import './pagination-button.css'

interface PaginationBtnProps {
  content: string
  onClickEvent?: any
}

export const PaginationButton: React.FC<PaginationBtnProps> = ({
  content,
  onClickEvent,
}): JSX.Element => {
  const bgColor = useContext(TableColor).value
  return (
    <a
      className={'paginate-button ' + content}
      style={{ color: bgColor }}
      aria-controls="employee-table"
      data-dt-idx="0"
      onClick={onClickEvent}
    >
      {content}
    </a>
  )
}
