const db = require('../../database/models/models')

const resolvers = {
  Query: {
    getUser: async (_, { id_in }) => {
      console.log("id_in = %d", id_in)
      let x = await db.models.user.findAll({ where: { id: id_in }})
      return {firstName: x[0]["dataValues"]["firstName"], lastName: x[0]["dataValues"]["lastName"]};
    },
    getAllUsers: (_, { id }) => { return db.models.user.findAll({
      // attributes: [
      //   "id", "firstName", "lastName"
      // ]
    })
    }
  },
  Mutation: {
    addUser: (_, { firstName, lastName }) => db.models.user.create({firstName, lastName})
  }
};

module.exports = { resolvers };