const {DataTypes, Sequelize} = require('sequelize')
const HOST = "localhost"
const PORT = "5432"
const DATABASE = "medium"
const sequelize = new Sequelize(`postgres://${HOST}:${PORT}/${DATABASE}`)



const Author = sequelize.define('author', {
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

const Post = sequelize.define('post', {
  //attributes
  title: {
    type: Sequelize.STRING
  },
  author: {
    type: Author
  },
  votes: {
    type: DataTypes.INTEGER
  }
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


module.exports = sequelize;
