const db = require("../../database/models/models");

const resolvers = {
  Query: {
    getUser: async (_, { id_in }) => {
      let x = await db.models.users.findOne({ where: { id: id_in } });
      return {
        firstName: x.dataValues.firstName,
        lastName: x.dataValues.lastName,
        username: x.dataValues.username,
        email: x.dataValues.email,
      };
    },
    getAllUsers: (_, __) => {
      return db.models.users.findAll({
        attributes: ["id", "firstName", "lastName", "username", "email"],
      });
    },
  },
  Mutation: {
    addUser: (_, { firstName, lastName, username }) =>
      db.models.users.create({ firstName, lastName, username }),
    updateEmail: (_, { in_username, in_email }) =>
      db.models.users.update(
        { email: in_email },
        { where: { username: in_username } }
      ),
    updateUser: async (_, { in_username, in_user }) => {
      let current_info = await db.models.users.findOne({
        where: { username: in_username },
      });
      let { firstName = current_info.dataValues.firstName } = in_user;
      let { lastName = current_info.dataValues.lastName } = in_user;
      let { username = current_info.dataValues.username } = in_user;
      let { email = current_info.dataValues.email } = in_user;
      let x = await db.models.users.update(
        { firstName, lastName, username, email },
        { where: { username: in_username } }
      );
      console.log(x);
    },
    registerUser: async (_, { new_user }) => {
      // if (
      //   (await db.models.user.count({
      //     where: { email: new_user.email },
      //   })) === 0
      // ) {
      let { firstName = "" } = new_user;
      let { lastName = "" } = new_user;
      let username = new_user.username;
      let email = new_user.email;
      return await db.models.users
        .create({ firstName, lastName, username, email })
        .catch("Failed to register user.");
      // .then(
      // )
      // } else {
      //   console.log("User Exists in db.");
      //   return new Error("Username already exists.");
      // }
    },
  },
};

module.exports = { resolvers };
