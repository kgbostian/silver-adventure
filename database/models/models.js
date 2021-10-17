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
//{ force: true }
// sequelize.sync().then(() => {
//   return User.create({
//     firstName: 'Dons'
//   })
// })


module.exports = sequelize;
