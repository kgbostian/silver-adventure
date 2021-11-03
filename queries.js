const Pool = require('pg').Pool;
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  database: process.env.DB_SEQUELIZE_DATABASE,
  port: process.env.DB_PORT,
});

class User extends Model {}
User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [50],
      trim: true,
      unique: true,
    },
    email: DataTypes.STRING,
    birthday: DataTypes.DATE,
  },
  { sequelize, modelName: 'user' }
);

(async () => {
  await sequelize.sync();
  const jane = await User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20),
  });
  console.log(jane.toJSON());
})();

// pool.query('CREATE DATABASE api;');
// pool.connect({ database: process.env.DB_DATABASE });

// pool.connect(da)
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'api',
//   password: 'example',
//   port: 5432,
// });

const createUsersTable = () => {
  pool.query(`CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(256),
                email VARCHAR(256) UNIQUE,
                created_at TIMESTAMP NOT NULL DEFAULT NOW()
              );`);
};

const getUsers = (request, response) => {
  // TODO - Ignore password column
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getUserById = (request, response) => {
  const id = parseInt(request.params.id);

  // TODO - Ignore password column
  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createUser = (request, response) => {
  console.log(request.body);
  const { name, email } = request.body;

  pool.query(
    'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
    [name, email],
    (error, results) => {
      // TODO - Cleanup this mess
      if (error) {
        console.log(error.constraint);
        if (error.constraint !== 'users_email_key') {
          throw error;
        }
        response.status(409).send(`Email address ${email} is already in use`);
        // console.log(error);
        // throw error;
      } else {
        const resultRow = results.rows[0];
        // console.log(results);
        // response.status(201).send(`User added with ID: ${results.insertId}`);
        response
          .status(201)
          .send(`User '${resultRow.name}' added with ID: ${resultRow.id}`);
      }
    }
  );
};

const updateUser = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, email } = request.body;

  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${id}`);
    }
  );
};

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};

module.exports = {
  createUsersTable,
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
