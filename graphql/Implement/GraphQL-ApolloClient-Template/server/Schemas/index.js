const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;
const userData = require("../MOCK_DATA.json");
const _ = require("lodash");

var dataGroup = [
  {
    name: "jim",
    color: "blue",
    age: "22",
  },
  {
    name: "Sam",
    color: "blue",
    age: "33",
  },
  {
    name: "eddie",
    color: "green",
    age: "77",
  },
];

// const UserType = require("./TypeDefs/UserType");

const UserDet = new GraphQLObjectType({
  name: "UserDet",
  fields: () => ({
    name: { type: GraphQLString },
    color: { type: GraphQLString },
    age: { type: GraphQLString },
  }),
});

const UserGroupType = new GraphQLObjectType({
  name: "UserGroup",
  fields: () => ({
    color: { type: GraphQLString },
    users: { type: new GraphQLList(UserDet) },
  }),
});

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLInt },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});

// console.log(
//   _.chain(data)
//     .groupBy("color")
//     .map((value, key) => ({ color: key, users: value }))
//     .value()
// );

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        var dt = userData;
        // console.log(dt);
        return dt;
      },
    },

    userGroup: {
      type: new GraphQLList(UserGroupType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        var dt = _.chain(dataGroup)
          .groupBy("color")
          .map((value, key) => ({ color: key, users: value }))
          .value();
        // var dt = userData;
        // console.log(dt);
        console.log(dt);
        return dt;
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: {
      type: UserType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parent, args) {
        userData.push({
          id: userData.length + 1,
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
          password: args.password,
        });
        return args;
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
