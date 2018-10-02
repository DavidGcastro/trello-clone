const faker = require('faker');
const {
  db,
  User,
  Project,
  Board,
  SubTask,
  SwimLane,
  Team
} = require('./models/index');
const Promise = db.Promise; // gives us Promise.map

async function seed() {
  await db.sync({ force: true });
  const team = await seedTeam();
  const boards = await seedBoards();
  const swimlane = await seedSwimLane();
  const subtask = await seedSubTask();
  console.log('Done');
}

function random(max) {
  let num = Math.floor(Math.random() * max);
  return num;
}

function seedTeam() {
  Promise.all([seedUsers(), seedProjects()]).then(([user, project]) =>
    Promise.all(
      new Array(user.length).fill(1).map((x, i) =>
        Team.create({
          userId: user[i].id,

          projectId: project[random(15)].id
        })
      )
    ).catch(err => console.log(err))
  );
}

function seedProjects() {
  return Promise.all(
    new Array(30).fill(1).map(() =>
      Project.create({
        name: faker.lorem.word() + ' Project'
      })
    )
  );
}

function seedUsers() {
  return Promise.all(
    new Array(100).fill(1).map(() =>
      User.create({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.exampleEmail(),
        password: 'password'
      })
    )
  );
}

function seedBoards() {
  return Promise.all(
    new Array(60).fill(1).map(() =>
      Board.create({
        name: faker.lorem.word() + ' Board',
        description: faker.lorem.sentence(),
        projectId: Math.floor(Math.random() * 30 + 1)
      })
    )
  );
}

function seedSwimLane() {
  return Promise.all(
    new Array(60).fill(1).map(() =>
      SwimLane.create({
        name: faker.lorem.word() + ' Lane',
        description: faker.lorem.sentence(),
        boardId: Math.floor(Math.random() * 60 + 1)
      })
    )
  );
}
function seedSubTask() {
  return Promise.all(
    new Array(100).fill(1).map(() =>
      SubTask.create({
        title: faker.lorem.word() + ' Task',
        points: 1,
        label: 'Front End',
        description: faker.lorem.sentence(),
        userId: Math.floor(Math.random() * 20 + 1),
        swimlaneId: Math.floor(Math.random() * 60 + 1)
      })
    )
  );
}

// seed()
//   .then(() => process.exit())
//   .catch(error => {
//     console.log(error);
//     process.exit();
//   });

module.exports = seed;
