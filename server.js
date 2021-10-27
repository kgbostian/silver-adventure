const express = require("express");
// import routes from "./routes/posts";
const { graphqlHTTP } = require('express-graphql')
const Schema = require('./database/schema/schema')

const app = express()
// const port = 3000

// app.use(json());

app.use('/graphql', graphqlHTTP({ 
  schema: Schema, 
  graphql: true 
}))


module.exports = app;