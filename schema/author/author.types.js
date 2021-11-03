const typeDef = `
  type Author {
    id: Int!
    firstName: String
    lastName: String
    posts: [Post]
  }

  extend type Query {
    allAuthors: [Author]
  }

  extend type Mutation {
    createAuthor(firstName: String!, lastName: String!): Author
  }
`;

module.exports = { typeDef };
