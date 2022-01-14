const addEmployee = require('./src/addEmployee');

async function init() {
  let employeeList = [];
  console.log('------- Team Profile Generator -------');
  let addNewEmployee = await addEmployee('manager', employeeList);
  while (addNewEmployee !== 'Exit the application') {
    switch (addNewEmployee) {
      case 'Add an engineer':
        addNewEmployee = await addEmployee('engineer', employeeList);
      case 'Add an intern':
        addNewEmployee = await addEmployee('intern', employeeList);
    }
  }
  console.log(employeeList);
}

// initialize the application
init();
