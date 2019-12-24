const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const Subscription = require('./resolvers/Subscription')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')
const Vote = require('./resolvers/Vote')

const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
  Link,
  Vote,
}
const opts = {
  port: 4000,
  cors: {
    credentials: false,
    origin: ['http://localhost:3000', 'http://localhost:4000'],
    methods: 'GET,POST,PATCH,DELETE,PUT',
    optionsSuccessStatus: 204
  }
}; 

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => ({
    cors: {
      credentials: false,
      origin: ["*"],
      methods: '*',
      optionsSuccessStatus: 204
    },
    ...request,
    prisma,
  }),
})
server.start(opts, () => console.log(`Server is running on http://localhost:4000`))
