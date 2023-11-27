export default function createReportObject(employeesList) {
  const allEmployeesReport = {
    allEmployees: {},
    getNumberOfDepartments(allEmployees) {
      return Object.keys(allEmployees).length;
    },
  };

  for (const department in employeesList) {
    if (department in employeesList) {
      allEmployeesReport.allEmployees[department] = employeesList[department];
    }
  }

  return allEmployeesReport;
}
