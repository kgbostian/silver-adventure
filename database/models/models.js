const Sequelize = require('sequelize')
const HOST = "localhost"
const PORT = "5432"
const DATABASE = "medium"
const sequelize = new Sequelize(`postgres://${HOST}:${PORT}/${DATABASE}`)


const User = sequelize.define('user', {
  // attributes
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
})

const Song = sequelize.define('song', {
  //attributes
  title: {
    type: sequelize.STRING,
    allowNull:false,
    unique: true
  },
  //relates user to song.
  user: {
    type: sequelize.model.User,
    allowNull: false
  },
  total_plays: {
    type: Sequelize.DataTypes.Integer
  }
  votes: {
    type: Sequelize.DataTypes.Integer
  }
})
//{ force: true }
// sequelize.sync().then(() => {
//   return User.create({
//     firstName: 'Dons'
//   })
// })


module.exports = sequelize;
