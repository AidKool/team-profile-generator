const addEmployee = require('./src/addEmployee');
const renderHTMLPage = require('./src/renderHTMLpage');

async function init() {
  let employeeList = [];
  console.log('------- Team Profile Generator -------');
  let addNewEmployee = await addEmployee('manager', employeeList);
  while (addNewEmployee !== 'Exit the application') {
    switch (addNewEmployee) {
      case 'Add an engineer':
        addNewEmployee = await addEmployee('engineer', employeeList);
        break;
      case 'Add an intern':
        addNewEmployee = await addEmployee('intern', employeeList);
        break;
    }
  }
  console.log(employeeList);
  await renderHTMLPage(employeeList);
  console.log('Employee page generated successfully');
}

// initialize the application
init();
