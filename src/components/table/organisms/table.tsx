const cells = ['cell1', 'cell2', 'cell3'] //store employee data

export const Table = (): JSX.Element => {
  return (
    <table>
      <thead>
        <tr role="row">
          {cells.map((cell: string | number) => (
            <th key={cell}>{cell}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {cells.map((cell: string | number) => (
            <td key={cell}>{cell}</td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}
