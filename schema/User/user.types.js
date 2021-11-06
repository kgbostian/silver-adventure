const typeDef = `
  extend type Query {
    getUser(id_in: Int!): User
    getAllUsers: [User]
  }  

  type User {
    firstName: String
    lastName: String
  }
  
  type Mutation {
      addUser(firstName: String, lastName: String): User
  },
`;

module.exports = { typeDef };