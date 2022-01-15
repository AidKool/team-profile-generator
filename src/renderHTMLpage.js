const fs = require('fs');
const path = require('path');
const util = require('util');

const writeFilePromise = util.promisify(fs.writeFile);

const { renderManagerCard, renderEngineerCard, renderInternCard } = require('./renderCards');

async function renderHTMLPage(employeeList) {
  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./css/styles.css" />
    <title>Team Profile</title>
  </head>
  <body>
    <nav class="navbar has-shadow is-dark">
      <div class="container">
        <div class="navbar-brand">
          <!-- brand -->
          <div class="navbar-item">
            <h1 class="h1">Team Profile</h1>
          </div>
        </div>
      </div>
    </nav>
    <main class="section">
      <div class="container">
        <div class="columns is-flex is-flex-wrap-wrap">
          ${employeeList
            .filter((employee) => {
              return employee.getRole() === 'Manager';
            })
            .map((employee) => {
              return renderManagerCard(employee);
            })}
          ${employeeList
            .filter((employee) => {
              return employee.getRole() === 'Engineer';
            })
            .map((employee) => {
              return renderEngineerCard(employee);
            })
            .join('')}
          ${employeeList
            .filter((employee) => {
              return employee.getRole() === 'Intern';
            })
            .map((employee) => {
              return renderInternCard(employee);
            })
            .join('')}    
        </div>
      </div>
    </main>
  </body>
</html>
`;
  writeHTMLToFile('index.html', html);
}

async function writeHTMLToFile(filename, data) {
  const filePath = path.join(__dirname, `../dist/${filename}`);
  try {
    await writeFilePromise(filePath, data);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(0);
  }
}

module.exports = renderHTMLPage;
