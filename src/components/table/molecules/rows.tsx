import { EmployeeType } from "../../../features/employee/reducers/employeeList"

interface PropsType {
  employees: EmployeeType[]
}

export const Rows: React.FC<PropsType> = (props): JSX.Element => {
  const employees: EmployeeType[] = props.employees
  return (
    <tbody>
      {employees.map((employee: EmployeeType) => (
        <tr key={employee.firstName}>
          {Object.keys(employee).map((key, i) => (
            <td key={i}>{employee[key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}
