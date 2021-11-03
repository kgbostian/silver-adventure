// const express = require('express');
// const morgan = require('morgan');
// const db = require('./queries');

// const app = express();

// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'));
// }

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// db.createUsersTable();

// app.get('/', (request, response) => {
//   response.json({ info: 'Node.js, Express, and Postgres API' });
// });

// app.get('/users', db.getUsers);
// app.get('/users/:id', db.getUserById);
// app.post('/users', db.createUser);
// app.put('/users/:id', db.updateUser);
// app.delete('/users/:id', db.deleteUser);

// module.exports = app;

const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const { schema } = require('./schema/schema');

// // const schema = buildSchema(`
// //   type Query {
// //     hello: String
// //   }
// // `);

// const typeDefs = /* GraphQL */ `
//   type Author {
//     id: Int!
//     firstName: String
//     lastName: String
//     """
//     the list of Posts by this author
//     """
//     posts: [Post]
//   }

//   type Post {
//     id: Int!
//     title: String
//     author: Author
//     votes: Int
//   }

//   # the schema allows the following query:
//   type Query {
//     posts: [Post]
//     author(id: Int!): Author
//   }

//   # this schema allows the following mutation:
//   type Mutation {
//     upvotePost(postId: Int!): Post
//   }
// `;

// const { find, filter } = require('lodash');

// // example data
// const authors = [
//   { id: 1, firstName: 'Tom', lastName: 'Coleman' },
//   { id: 2, firstName: 'Sashko', lastName: 'Stubailo' },
//   { id: 3, firstName: 'Mikhail', lastName: 'Novikov' },
// ];

// const posts = [
//   { id: 1, authorId: 1, title: 'Introduction to GraphQL', votes: 2 },
//   { id: 2, authorId: 2, title: 'Welcome to Meteor', votes: 3 },
//   { id: 3, authorId: 2, title: 'Advanced GraphQL', votes: 1 },
//   { id: 4, authorId: 3, title: 'Launchpad is Cool', votes: 7 },
// ];

// const resolvers = {
//   Query: {
//     posts: () => posts,
//     author: (_, { id }) => find(authors, { id }),
//   },

//   Mutation: {
//     upvotePost: (_, { postId }) => {
//       const post = find(posts, { id: postId });
//       if (!post) {
//         throw new Error(`Couldn't find post with id ${postId}`);
//       }
//       post.votes += 1;
//       return post;
//     },
//   },

//   Author: {
//     posts: (author) => filter(posts, { authorId: author.id }),
//   },

//   Post: {
//     author: (post) => find(authors, { id: post.authorId }),
//   },
// };

// const { makeExecutableSchema } = require('@graphql-tools/schema');

// const schema = makeExecutableSchema({
//   typeDefs,
//   resolvers,
// });

// const root = {
//   hello: () => {
//     return 'Hello World';
//   },
// };

const app = express();
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    // rootValue: root,
    graphiql: true,
  })
);

module.exports = app;
