export default function iterateThroughObject(reportWithIterator) {
  let employeeString = '';
  let separator = ' | ';

  reportWithIterator.forEach((employee, index) => {
    if (index === reportWithIterator.length - 1) separator = '';
    employeeString += `${employee} ${separator}`;
  });

  return employeeString;
}
