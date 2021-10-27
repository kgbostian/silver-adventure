const app = require("../server")
const supertest = require("supertest");

const seed = async () => {
  await (await supertest(app).post ("graphql")).send({
    query: `mutation { addUser( firstName:"TestSeed") { firstName } }`,
  });
};
 
beforeAll((done) => {
  console.log("Before all tests.");
  seed()
});

// beforeEach((done) => {
//   console.log("Before each test.");
// });

// afterEach((done) => {
//   console.log("After each test.");
// });

// afterAll((done) => {
//   console.log("After all tests.");
// });


test(" GET /api/posts", async () => {
  try {
    await supertest(app)
      .post("/graphql")
      .send({query :`{ users{firstName} }`})
      .then((response) => {      
        // Check type and length
        console.log(response.text); 
        expect(response.text.includes("name"));
      })
  } catch (error) {
    console.log(error.text);
  }
  try {
    await supertest(app)
      .post("/graphql")
      .send({query :`mutation { addUser( firstName:"Travis") { firstName } }` })
      // .expect(200)
      .then((response) => {      
        // Check type and length
        console.log(response.text); 
      })
  } catch (error) {
    console.log(error);
  }
  try {
    supertest(app)
      .post("/graphql")
      .send({query :`{ users{firstName} }`})
      .then((response) => {      
        // Check type and length
        console.log(response.text); 
        expect(response.text.includes("name"));
      })
  } catch (error) {
    console.log(error.text);
  }
  try {
    await supertest(app)
      .post("/graphql")
      .send({query :`mutation { removeUser( firstName:"Travis") { firstName } }` })
      // .expect(200)
      .then((response) => {      
        // Check type and length
        console.log(response.text); 
      })
  } catch (error) {
    console.log(error);
  }
  try {
    await supertest(app)
      .post("/graphql")
      .send({query :`{ users{firstName} }`})
      .expect(400)
      .then((response) => {      
        // Check type and length
        console.log(response.text); 
        expect(false);
      })
  } catch (error) {
    console.log(error.text);
  }
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