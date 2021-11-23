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
    username: String
    email: String
  }
  
  type Mutation {
      addUser(firstName: String, lastName: String, username: String): User
      updateEmail( in_username: String, in_email: String ): User
      updateUser ( in_username: String, in_user: UserInput ): User
      registerUser(new_user: UserInput): User
  },
`;

module.exports = { typeDef };
