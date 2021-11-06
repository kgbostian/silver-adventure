const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { schema } = require("./schema/schema");

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    // rootValue: root,
    graphiql: true,
  })
);

module.exports = app;
