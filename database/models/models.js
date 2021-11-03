const {DataTypes, Sequelize} = require('sequelize')
const HOST = "localhost"
const PORT = "5432"
const DATABASE = "medium"
const sequelize = new Sequelize(`postgres://${HOST}:${PORT}/${DATABASE}`, {
  omitNull: true
})


const User = sequelize.define('user', {
  // attributes
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  lastName: {
    type: Sequelize.STRING,
    unique: true
  },
})

const Song = sequelize.define('song', {
  //attributes
  title: {
    type: Sequelize.STRING,
    allowNull:false,
    unique: true
  },
  total_plays: {
    type: DataTypes.INTEGER
  },
  votes: {
    type: DataTypes.INTEGER
  }
})

// sequelize.sync()

module.exports = sequelize;
