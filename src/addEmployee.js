const Manager = require('./../lib/manager');
const Engineer = require('./../lib/engineer');
const Intern = require('./../lib/intern');

const { managerQuestions, engineerQuestions, internQuestions } = require('./questions');

const askQuestions = require('./askQuestions');

async function addEmployee(employeeRole, employeeList) {
  console.log(`Add a new ${employeeRole}`);
  if (employeeRole === 'manager') {
    return addManager(employeeList);
  } else if (employeeRole === 'engineer') {
    return addEngineer(employeeList);
  } else {
    return addIntern(employeeList);
  }
}

async function addManager(employeeList) {
  const answers = await askQuestions(managerQuestions);
  const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
  employeeList.push(newManager);
  return answers.addNewEmployee;
}

async function addEngineer(employeeList) {
  const answers = await askQuestions(engineerQuestions);
  const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
  employeeList.push(newEngineer);
  return answers.addNewEmployee;
}

async function addIntern(employeeList) {
  const answers = await askQuestions(internQuestions);
  const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
  employeeList.push(newIntern);
  return answers.addNewEmployee;
}

module.exports = addEmployee;
