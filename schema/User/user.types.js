const typeDef = `
  extend type Query {
    getUser(id_in: Int!): User
    getAllUsers: [User]
  }  

  type User {
    firstName: String
    lastName: String
    username: String
    email: String
  }
  
  type Mutation {
      addUser(firstName: String, lastName: String, username: String): User
      updateEmail( in_username: String, in_email: String ): User
  },
`;

module.exports = { typeDef };
