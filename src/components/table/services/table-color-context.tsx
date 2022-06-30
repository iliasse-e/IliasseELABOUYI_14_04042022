import { createContext } from 'react'
import { Color } from '../type'

export const TableColor: React.Context<{ value: Color }> = createContext({
  value: 'rgb(255, 174, 75)',
})
