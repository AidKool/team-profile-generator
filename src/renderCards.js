function renderManagerCard(manager) {
  const { name, id, email, officeNumber } = manager;
  const managerCard = `<div class="column is-12-mobile is-6-tablet is-4-desktop">
                         <div class="card">
                           <div class="card-header has-background-info is-flex is-flex-direction-column px-5 py-2">
                             <p class="title m-0">${name}</p>
                           </div>
                           <div class="card-content has-background-white">
                             <p class="subtitle is-size-5 has-text-weight-bold">Role: Manager<i class="fas fa-mug-hot ml-2"></i></p>
                             <p>ID: ${id}</p>
                             <p>Email: <a href="mailto:${email}" target="_blank">${email}</a></p>
                             <p>Office Number: ${officeNumber}</p>
                           </div>
                         </div>
                       </div>`;
  return managerCard;
}

function renderEngineerCard(engineer) {
  const { name, id, email, github } = engineer;
  const engineerCard = `<div class="column is-12-mobile is-6-tablet is-4-desktop">
                          <div class="card">
                            <div class="card-header has-background-primary is-flex is-flex-direction-column px-5 py-2">
                              <p class="title m-0">${name}</p>
                            </div>
                            <div class="card-content has-background-white">
                              <p class="subtitle is-size-5 has-text-weight-bold">Role: Engineer<i class="fas fa-glasses ml-2"></i></p>
                              <p>ID: ${id}</p>
                              <p>Email: <a href="mailto:${email}" target="_blank">${email}</a></p>
                              <p>Github: <a href="https://www.github.com/${github}" target="_blank">${github}</a></p>
                            </div>
                          </div>
                        </div>`;
  return engineerCard;
}

function renderInternCard(intern) {
  const { name, id, email, school } = intern;
  const internCard = `<div class="column is-12-mobile is-6-tablet is-4-desktop">
                        <div class="card">
                          <div class="card-header has-background-warning is-flex is-flex-direction-column px-5 py-2">
                            <p class="title">${name}</p>
                          </div>
                          <div class="card-content has-background-white">
                            <p class="subtitle is-size-5 has-text-weight-bold">Role: Intern<i class="fas fa-graduation-cap ml-2"></i></p>
                            <p>ID: ${id}</p>
                            <p>Email: <a href="mailto:${email}" target="_blank">${email}</a></p>
                            <p>School: ${school}</p>
                          </div>
                        </div>
                      </div>`;
  return internCard;
}

module.exports = { renderManagerCard, renderEngineerCard, renderInternCard };
