const employeeQuestions = [
  {
    type: 'input',
    message: 'Enter their name:',
    name: 'name',
    validate: (userInput) => {
      if (userInput) {
        return true;
      } else {
        console.log('\nEnter a valid name');
        return false;
      }
    },
  },
  {
    type: 'input',
    message: 'Enter their id:',
    name: 'id',
    validate: (userInput) => {
      if (userInput) {
        return true;
      } else {
        console.log('\nEnter a valid id');
        return false;
      }
    },
  },
  {
    type: 'input',
    message: 'Enter their email:',
    name: 'email',
    validate: (userInput) => {
      if (userInput) {
        return true;
      } else {
        console.log('\nEnter a valid email');
        return false;
      }
    },
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
    validate: (userInput) => {
      if (userInput) {
        return true;
      } else {
        console.log('\nEnter a valid office number');
        return false;
      }
    },
  },
  ...addNewEmployee,
];

const engineerQuestions = [
  ...employeeQuestions,
  {
    type: 'input',
    message: 'Enter their github username:',
    name: 'github',
    validate: (userInput) => {
      if (userInput) {
        return true;
      } else {
        console.log('\nEnter a valid github username');
        return false;
      }
    },
  },
  ...addNewEmployee,
];

const internQuestions = [
  ...employeeQuestions,
  {
    type: 'input',
    message: 'Enter their school:',
    name: 'school',
    validate: (userInput) => {
      if (userInput) {
        return true;
      } else {
        console.log('\nEnter a valid school');
        return false;
      }
    },
  },
  ...addNewEmployee,
];

module.exports = {
  managerQuestions,
  engineerQuestions,
  internQuestions,
};
