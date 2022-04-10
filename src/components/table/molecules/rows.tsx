export const Rows = (rows: any = ['cell1', 'cell2', 'cell3']): JSX.Element => {
  return (
    <tbody>
      <tr>
        {rows.map((row: string) => (
          <td key={row}>{row}</td>
        ))}
      </tr>
    </tbody>
  )
}
