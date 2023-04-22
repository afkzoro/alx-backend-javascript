export default function createEmployeesObject(departmentName, employees) {
  const work = {};
  work[departmentName] = employees;
  return work;
}
