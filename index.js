const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const Schema = require('./database/schema/schema')

const app = express()
const port = 3000

app.use('/graphql', graphqlHTTP({ schema: Schema, graphql: true }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log('Example app listening at https://localhost:${port}')
})


