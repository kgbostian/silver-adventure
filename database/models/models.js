const { password } = require("pg/lib/defaults");
const { DataTypes, Sequelize } = require("sequelize");
const HOST = "localhost";
const PORT = "30300";
const DATABASE = "postgres";
const PASSWORD = "example";
const sequelize = new Sequelize(
  `postgres://postgres:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`,
  {
    omitNull: true,
  }
);

const User = sequelize.define("user", {
  // attributes
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: Sequelize.TEXT,
  },
});

const Song = sequelize.define("song", {
  //attributes
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  total_plays: {
    type: DataTypes.INTEGER,
  },
  votes: {
    type: DataTypes.INTEGER,
  },
});

sequelize.sync();

module.exports = sequelize;
