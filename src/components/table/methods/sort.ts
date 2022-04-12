import { EmployeeType } from "../../../features/employee/reducers/employeeList";

export const SortedTable = (props) => {
    const { products } = props;
  let sortedProducts = [...products];
  sortedProducts.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  return (
    <Table>
      {/* as before */}
    </Table>
  );
}

homes.sort((a: EmployeeType, b: EmployeeType) => parseFloat(b.firstName) - parseFloat(a.firstName))