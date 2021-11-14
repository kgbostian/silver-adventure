const db = require("../../database/models/models");

const resolvers = {
  Query: {
    getUser: async (_, { id_in }) => {
      let x = await db.models.user.findOne({ where: { id: id_in } });
      return {
        firstName: x.dataValues.firstName,
        lastName: x.dataValues.lastName,
        username: x.dataValues.username,
        email: x.dataValues.email,
      };
    },
    getAllUsers: (_, __) => {
      return db.models.user.findAll({
        attributes: ["id", "firstName", "lastName"],
      });
    },
  },
  Mutation: {
    addUser: (_, { firstName, lastName, username }) =>
      db.models.user.create({ firstName, lastName, username }),
    updateEmail: (_, { in_username, in_email }) =>
      db.models.user.update(
        { email: in_email },
        { where: { username: in_username } }
      ),
  },
};

module.exports = { resolvers };
