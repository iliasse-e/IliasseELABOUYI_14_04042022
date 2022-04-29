import { EmployeeType } from "../../../features/employee/reducers/employeeList"

interface PropsType {
  data: any
}

export const TableBody: React.FC<PropsType> = (props): JSX.Element => {
  const data: EmployeeType[] = props.data
  return (
    <tbody>
      {data.map((employee: EmployeeType) => (
        <tr key={employee.firstName}>
          {Object.keys(employee).map((key, i) => (
            <td key={i}>{employee[key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}
