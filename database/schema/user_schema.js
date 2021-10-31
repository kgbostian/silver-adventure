const typeDef = `
  extend type Query {
    getUser(firstName: String!): getUser
  }
  type User {
    firstName = String!
  }
`;

const resolvers = {
  Query: {
    User: (_, { firstName }) => db.models.user.findAll({ where: firstName}),
  },
};