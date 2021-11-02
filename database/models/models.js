const {DataTypes, Sequelize} = require('sequelize')
const HOST = "localhost"
const PORT = "5432"
const DATABASE = "medium"
const sequelize = new Sequelize(`postgres://${HOST}:${PORT}/${DATABASE}`)

// const Author = sequelize.define('author', {
//   // attributes
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true
//   },
//   firstName: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     unique: true
//   },
//   lastName: {
//     type: Sequelize.STRING,
//     unique: true
//   },
// })

// const Post = sequelize.define('post', {
//   //attributes
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true
//   },
//   title: {
//     type: Sequelize.STRING
//   },
//   author: {
//     type: Author
//   },
//   votes: {
//     type: DataTypes.INTEGER
//   }
// })

const User = sequelize.define('user', {
  // attributes
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
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

sequelize.sync()

module.exports = sequelize;
