const app = require("../server")
const supertest = require("supertest");
const { query } = require("express");


// This passes because 1 === 1

const seed = () => {
  return Promise.all([
    Song.create({title: 'TestSong', total_plays: 0, votes: 0}),
    Song.create({title: 'A Song', total_plays: 1, votes: 11}),
    Song.create({title: 'B Song', total_plays: 3, votes: 33}),
    User.create({firstName: 'TestUser'})
  ])
  .then(([testsong, asong, bsong, testuser]) => {
    return Promise.all([
      testsong.setUser(testuser),
      asong.setUser(testuser),
      bsong.setUser(testuser)
    ]);
  })
  .catch(error => console.log(error));
};

// beforeAll((done) => {
//   console.log("Before all tests.");
//   // sequelize.sync({ force: true })
//   //   .then(() => seed())
// });

// beforeEach((done) => {
//   console.log("Before each test.");
// });

// afterEach((done) => {
//   console.log("After each test.");
// });

// afterAll((done) => {
//   console.log("After all tests.");
// });

// let getUserPost = {
//   query: `query users{ 
//     firstName 
//   } }`
// };



test(" GET /api/posts", async () => {
  try {
    await supertest(app)
      .post("/graphql")
      .send({query :`{ users{firstName} }`})
      .expect(200)
      .then((response) => {      
        // Check type and length
        console.log(response.text); 
        expect(response.text.includes("Don"));
      })
  } catch (error) {
    console.log("ERROR: ERROR");
  }
  // try {
  //   await supertest(app)
  //     .post("/graphql")
  //     .send({query :`mutation { addUser( firstName:"Travis") { firstName } }` })
  //     // .expect(200)
  //     .then((response) => {      
  //       // Check type and length
  //       console.log(response.text); 
  //     })
  // } catch (error) {
  //   console.log("ERROR: ERROR");
  // }
});
// test(" Add Song", async () => {
//   try {
//     await supertest(app)
//       .post("/graphql")
//       .send({query :`{ addUsers{ "TestUser2" } }`})
//       // .expect(200)
//       .then((response) => {      
//         // Check type and length
//         console.log(response.text); 
//       })
//   } catch (error) {
//     console.log("ERROR: ERROR");
//   }  
// });

it('Testing to see if Jest works', () => {
    expect(1).toBe(1)
  })