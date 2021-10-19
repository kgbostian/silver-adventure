const {DataTypes, Sequelize} = require('sequelize')
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

const seed = () => {
  return Promise.all([
    Song.create({title: 'TestSong', total_plays: 0, votes: 0}),
    // Song.create({title: 'A Song', total_plays: 1, votes: 11}),
    // Song.create({title: 'B Song', total_plays: 3, votes: 33}),
    User.create({firstName: 'TestUser'})
  ])
  .then(([testsong, testuser]) => {
    return Promise.all([
      testsong.setUser(testuser),
      // asong.setUser(testuser),
      // bsong.setUser(testuser)
    ]);
  })
  .catch(error => console.log(error));
};

// sequelize.sync().then(() => seed());

// sequelize.sync({ force: true }).then(() => {
//   return User.create({
//     firstName: 'Dons'
//   })
//   .then(() => {
//     return Song.create({
//       title: 'Test Song'
//     })
//   }
// })


User.hasMany(Song);


module.exports = sequelize;
