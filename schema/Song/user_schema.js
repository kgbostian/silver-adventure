const db = require('../models/models')

const typeDef = `
  extend type Query {
    getUser(id_in: Int!): User,
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
    getUser: (_, { id_in }) => { 
      console.log(db.models.user.findAll({ where: { id: id_in }}));
      return db.models.user.findAll({ where: { id: id_in }});
    },
    getAllUsers: (_, { id }) => { return db.models.user.findAll({
      // attributes: [
      //   "id", "firstName", "lastName"
      // ]
    })
    }
  },
  Mutation: {
    addUser: (_, { firstName, lastName }) => db.models.user.create({firstName, lastName})
  }
};

module.exports = {typeDef, resolvers};