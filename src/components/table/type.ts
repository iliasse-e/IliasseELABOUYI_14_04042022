export interface Column {
  title: string
  data: string
  type?: TYPE
}

export interface HandleSort {
  (by: string, order: 'up' | 'down'): void
}

export interface TableProps {
  columns: Column[]
  data: Array<{ [key: string]: any }>
  entries?: number
  pageNo?: number
}

export enum TYPE {
  string = 'STRING',
  number = 'NUMBER',
  date = 'DATE',
}
