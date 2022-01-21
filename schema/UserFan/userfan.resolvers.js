const db = require("../../database/models/models");

const resolvers = {
  Query: {
    getUser: async (_, { id_in }) => {},
    getAllUsers: (_, __) => {
      return db.models.userFan.findAll({});
    },
  },
  Mutation: {
    updateUser: async (_, { in_username, in_user }) => {},
  },
};

module.exports = { resolvers };
