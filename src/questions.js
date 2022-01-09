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

const managerQuestions = [
  ...employeeQuestions,
  {
    type: 'input',
    message: 'Enter their office number:',
    name: 'officeNumber',
  },
];

const engineerQuestions = [
  ...employeeQuestions,
  {
    type: 'input',
    message: 'Enter their github username:',
    name: 'github',
  },
];

const internQuestions = [
  ...employeeQuestions,
  {
    type: 'input',
    message: 'Enter their school:',
    name: 'school',
  },
];

module.exports = {
  managerQuestions,
  engineerQuestions,
  internQuestions,
};
