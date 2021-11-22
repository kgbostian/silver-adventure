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
        attributes: ["id", "firstName", "lastName", "username", "email"],
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
    updateUser: async (_, { in_username, in_user }) => {
      let current_info = await db.models.user.findOne({
        where: { username: in_username },
      });
      let { firstName = current_info.dataValues.firstName } = in_user;
      let { lastName = current_info.dataValues.lastName } = in_user;
      let { username = current_info.dataValues.username } = in_user;
      let { email = current_info.dataValues.email } = in_user;
      // if (typeof firstName === undefined) {
      //   firstName = ;
      // }
      // if (typeof lastName === undefined) {
      //   lastName = current_info.dataValues.lastName;
      // }
      // if (typeof username === undefined) {
      //   username = current_info.dataValues.username;
      // }
      // if (typeof email === undefined) {
      //   email = current_info.dataValues.email;
      // }
      let x = await db.models.user.update(
        { firstName, lastName, username, email },
        { where: { username: in_username } }
      );
      console.log(x);
    },
  },
};

module.exports = { resolvers };
