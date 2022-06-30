import { DEPARTMENT } from "types"

/**
 * Data used to set up a dropodown content
 */
export const departments: {
  label: string
  value: DEPARTMENT
}[] = [
  {
    label: 'Sales',
    value: DEPARTMENT.SALES,
  },
  {
    label: 'Marketing',
    value: DEPARTMENT.MARKETING,
  },
  {
    label: 'Engineering',
    value: DEPARTMENT.ENGINEERING,
  },
  {
    label: 'Human',
    value: DEPARTMENT.HUMAN,
  },
  {
    label: 'Legal',
    value: DEPARTMENT.LEGAL,
  },
]
