const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');

const { managerQuestions, engineerQuestions, internQuestions } = require('./src/questions');

let employees = [];

async function init() {
  console.log('------- Team Profile Generator -------');
  let answers = await addManager();
  while (answers.addNewEmployee !== 'Exit the application') {
    switch (answers.addNewEmployee) {
      case 'Add an engineer':
        answers = await addEngineer();
      case 'Add an intern':
        answers = await addIntern();
    }
  }
  console.log(employees);
}

async function askQuestions(questions) {
  try {
    const answers = await inquirer.prompt(questions);
    return answers;
  } catch (error) {
    console.error('Error:', error);
  }
}

async function addManager() {
  console.log('Add a manager');
  let answers = await askQuestions(managerQuestions);
  const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
  employees.push(newManager);
  return answers;
}

async function addEngineer() {
  console.log('Add an engineer');
  answers = await askQuestions(engineerQuestions);
  const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
  employees.push(newEngineer);
  return answers;
}

async function addIntern() {
  console.log('Add an intern');
  answers = await askQuestions(internQuestions);
  const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
  employees.push(newIntern);
  return answers;
}

// initialize the application
init();
