const db = require("../../database/models/models");

const resolvers = {
  Query: {
    getUser: async (_, { id_in }) => {
      console.log("id_in = %d", id_in);
      let x = await db.models.user.findOne({ where: { id: id_in } });
      console.log(x);
      return {
        firstName: x.dataValues.firstName,
        lastName: x.dataValues.lastName,
      };
    },
    getAllUsers: (_, __) => {
      return db.models.user.findAll({
        attributes: ["id", "firstName", "lastName"],
      });
    },
  },
  Mutation: {
    addUser: (_, { firstName, lastName }) =>
      db.models.user.create({ firstName, lastName }),
  },
};

module.exports = { resolvers };
