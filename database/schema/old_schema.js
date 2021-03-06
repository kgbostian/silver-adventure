// const db = require('../models/models')

// const { Query, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLNonNull } = require('graphql')


// // const User = new GraphQLObjectType({
// //   name: 'User',
// //   description: 'this represents a user',
// //   fields: () => {
// //     return {
// //       id: {
// //         type: GraphQLInt,
// //         resolve(user) {
// //           return user.id
// //         }
// //       },
// //       firstName: {
// //         type: GraphQLString,
// //         resolve(user) {
// //           return user.firstName
// //         }
// //       }
// //     }
// //   }
// // })


// const Query = new GraphQLObjectType({
//   name: 'Query',
//   description: 'this is a root query',
//   fields: () => {
//     return {
//       users: {
//         type: new GraphQLList(User),
//         args: {
//           id: {
//             type: GraphQLInt
//           },
//           firstName: {
//             type: GraphQLString
//           }
//         },
//         //validations can go here
//         resolve(root, args) {
//           return db.models.user.findAll({ where: args })
//         }
//       }
//     }
//   }
// })

// const Mutation = new GraphQLObjectType({
//   name: 'Mutation',
//   description: 'Functions to create things',
//   fields: () => {
//     return {
//       addUser: {
//         type: User,
//         args: {
//           firstName: {
//             type: new GraphQLNonNull(GraphQLString)
//           }
//         },
//         resolve(_, args) {
//           return db.models.user.create({
//             firstName: args.firstName
//           })
//         }
//       },
//       removeUser: {
//         type: User,
//         args: {
//           firstName: {
//             type: new GraphQLNonNull(GraphQLString)
//           }
//         },
//         resolve(_, args) {
//           return db.models.user.destroy({
//             where: {
//               firstName: args.firstName
//             }
//           })
//         }
//       }
//     } 
//   }
// })


// const Schema = new GraphQLSchema({
//   query: Query,
//   mutation: Mutation
// })

// module.exports = Schema
