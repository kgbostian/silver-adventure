const app = require("../server")
const supertest = require("supertest");
const { query } = require("express");

// This passes because 1 === 1

// beforeAll((done) => {
//   console.log("Before all tests.");
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
});

it('Testing to see if Jest works', () => {
    expect(1).toBe(1)
  })