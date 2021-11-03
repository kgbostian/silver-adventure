const db = require('../models/models')

const typeDef = `
  extend type Query {
    getUser(id: Int!): User,
    getAllUsers(id: Int!): User
  }  

  type User {
    firstName: String
    lastName: String
  }
  
  type Mutation {
      addUser(firstName: String, lastName: String): User
  },
`

const resolvers = {
  Query: {
    getUser: (_, { firstName }) => db.models.user.findAll({ where: firstName}),
    getAllUsers: (_, { id }) => db.models.user.findAll({
      // attributes: [
      //   "id", "firstName", "lastName"
      // ]
    }),
  },
  Mutation: {
    addUser: (_, { firstName, lastName }) => db.models.user.create({firstName, lastName})
  }
};

module.exports = {typeDef, resolvers};