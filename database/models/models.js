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

const User = sequelize.define("users", {
  // attributes
  firstName: {
    type: Sequelize.STRING,
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
    allowNull: false,
    unique: true,
  },
});

const UserFan = sequelize.define("userfans", {
  //This table stores the view configuration for a user. This provides
  //a way for a single user account to switch between the performer
  //and fan modes using the same account, but have different view
  //preferences.
  showFavoriteArtists: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  showFavoriteSongs: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  userId: {
    type: Sequelize.INTEGER,
    references: {
      model: "users",
      key: "id",
    },
  },
});

const UserPerformer = sequelize.define("userperformer", {
  showFavoriteArtists: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  showFavoriteSongs: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  userId: {
    type: Sequelize.INTEGER,
    references: {
      model: "users",
      key: "id",
    },
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

sequelize.sync({ force: true });

module.exports = sequelize;
