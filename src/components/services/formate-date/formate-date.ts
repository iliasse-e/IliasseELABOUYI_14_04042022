export enum FormatType {
  'DD/MM/YYYY',
  'MM/DD/YYYY',
  'MM/YYYY',
}

/**
 * Converts a Date to a string of this format : 'DD/MM/YYYY',
  'MM/DD/YYYY',
  'MM/YYYY'
 * @param input input Date format
 * @param type output format of date selected (UK, US)
 * @returns formated stringify date with the chosen format
 */
export const convertDate = (input: Date, type?: FormatType) => {
  // if (typeof input === 'string') return input
  function pad(s: string | number) {
    return s < 10 ? '0' + s : s
  }
  var d = new Date(input)
  if (type === FormatType['MM/DD/YYYY'])
    return [pad(d.getMonth() + 1), pad(d.getDate()), d.getFullYear()].join('/')
  else if (type === FormatType['MM/YYYY'])
    return [pad(d.getMonth() + 1), d.getFullYear()].join('/')
  else
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/')
}
