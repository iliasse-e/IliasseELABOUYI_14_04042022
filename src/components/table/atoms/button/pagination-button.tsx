import './pagination-button.css'

interface PaginationBtnProps {
  content: string
  onClickEvent?: any
}

export const PaginationButton: React.FC<PaginationBtnProps> = ({
  content,
  onClickEvent,
}): JSX.Element => {
  return (
    <a
      className={'paginate-button ' + content}
      aria-controls="employee-table"
      data-dt-idx="0"
      onClick={onClickEvent}
    >
      {content}
    </a>
  )
}
