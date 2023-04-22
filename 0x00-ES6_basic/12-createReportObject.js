export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments() {
      const workDepts = Object.keys(employeesList);
      return workDepts.length;
    },
  };
}
