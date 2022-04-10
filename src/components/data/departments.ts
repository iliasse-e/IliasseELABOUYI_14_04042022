export interface DropdownDataType {
  [index: number]: {
    label: string
    value: string
  }
}

/**
 * Data used to set up a dropodown content
 */
export const departments: DropdownDataType = [
  {
    label: 'Sales',
    value: 'sales',
  },
  {
    label: 'Marketing',
    value: 'marketing',
  },
  {
    label: 'Engineering',
    value: 'engineering',
  },
  {
    label: 'Human',
    value: 'human',
  },
  {
    label: 'Legal',
    value: 'legal',
  },
]
