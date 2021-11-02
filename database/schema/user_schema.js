const db = require('../models/models')

const typeDef = `
  extend type Query {
    getUser(id: Int!): User
  }  

  type User {
    id: Int!
    firstName: String
    lastName: String
  }
  
  type Mutation {
      addUser(id: Int!): User
  },
`

const resolvers = {
  Query: {
    getUser: (_, { firstName }) => db.models.user.findAll({ where: firstName }),
  },
  User: {
    //addUser: (_, { id }) => db.models.user.create({ id, firstName:"Test", lastName:"User"})
  }
};

module.exports = {typeDef, resolvers};