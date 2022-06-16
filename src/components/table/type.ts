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

type RGB = `rgb(${number}, ${number}, ${number})`
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`
type HEX = `#${string}`

export type Color = RGB | RGBA | HEX
