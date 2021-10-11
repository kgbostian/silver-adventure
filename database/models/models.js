const Sequelize = require('sequelize')
const sequelize = new Sequelize(`postgres://localhost:5432/medium`)


const User = sequelize.define('user', {
  // attributes
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

sequelize.sync({ force: true }).then(() => {
  return User.create({
    firstName: 'Dons'
  })
})


module.exports = sequelize;
