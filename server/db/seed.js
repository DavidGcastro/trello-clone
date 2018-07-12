// const { Student } = require('./models');
// const { Campus } = require('./models');
// const faker = require('faker');
// const db = require('./index');
// const campusName = [
//   'Venus',
//   'Earth',
//   'Mars',
//   'Saturn',
//   'Uranus',
//   'Pluto',
//   'Jupiter',
//   'Neptune',
//   'Mercury'
// ];
// const Promise = db.Promise; // gives us Promise.map

// async function seed() {
//   await db.sync({ force: true });
//   const campuses = await seedCampuses();
//   const students = await seedStudents();
//   console.log('Seeded', students.length, 'students.');
//   console.log('Seeded', campuses.length, 'campuses.');
// }

// function gpa() {
//   return Math.round(Math.random() * 4 * 100) / 100;
// }
// function randomCampus() {
//   return Math.round(Math.random() * 7) + 1;
// }

// function seedStudents() {
//   return Promise.all(
//     new Array(50).fill(1).map(() =>
//       Student.create({
//         firstName: faker.name.firstName(),
//         lastName: faker.name.lastName(),
//         email: faker.internet.email(),
//         gpa: gpa(),
//         campusId: randomCampus()
//       }))
//   );
// }
// function seedCampuses() {
//   return Promise.all(
//     campusName.map(campus => {
//       Campus.create({
//         name: campus,
//         description: `This is the description for ${campus} Academy, it is located in ${campus}, Donec sollicitudin molestie malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh.`
//       });
//     })
//   );
// }

// seed().then(() => process.exit());