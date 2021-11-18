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

  input UserInput {
    id: Int
    firstName: String
    lastName: String
  }
  
  type Mutation {
      addUser(firstName: String, lastName: String, username: String): User
      updateEmail( in_username: String, in_email: String ): User
      updateUser ( in_user: UserInput ): User
  },
`;

module.exports = { typeDef };
