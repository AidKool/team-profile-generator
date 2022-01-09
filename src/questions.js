const employeeQuestions = [
  {
    type: 'input',
    message: 'Enter their name:',
    name: 'name',
  },
  {
    type: 'input',
    message: 'Enter their id:',
    name: 'id',
  },
  {
    type: 'input',
    message: 'Enter their email:',
    name: 'email',
  },
];

const addNewEmployee = [
  {
    type: 'list',
    message: 'Select if you would like to add a new employee or exit the application',
    name: 'addNewEmployee',
    choices: ['Add an engineer', 'Add an intern', 'Exit the application'],
  },
];

const managerQuestions = [
  ...employeeQuestions,
  {
    type: 'input',
    message: 'Enter their office number:',
    name: 'officeNumber',
  },
  ...addNewEmployee,
];

const engineerQuestions = [
  ...employeeQuestions,
  {
    type: 'input',
    message: 'Enter their github username:',
    name: 'github',
  },
  ...addNewEmployee,
];

const internQuestions = [
  ...employeeQuestions,
  {
    type: 'input',
    message: 'Enter their school:',
    name: 'school',
  },
  ...addNewEmployee,
];

module.exports = {
  managerQuestions,
  engineerQuestions,
  internQuestions,
};
