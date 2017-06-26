<<<<<<< HEAD
// src/schema.js
import { resolvers } from './resolvers';
=======
>>>>>>> t3-start
import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';
<<<<<<< HEAD
const typeDefs = `
type Channel {
   id: ID!                # "!" denotes a required field
   name: String
=======

import { resolvers } from './resolvers';

const typeDefs = `
type Channel {
  id: ID!                # "!" denotes a required field
  name: String
>>>>>>> t3-start
}
# This type specifies the entry points into our API. In this case
# there is only one - "channels" - which returns a list of channels.
type Query {
<<<<<<< HEAD
   channels: [Channel]    # "[]" means this is a list of channels
}
`;
const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };
=======
  channels: [Channel]    # "[]" means this is a list of channels
}
# The mutation root type, used to define all mutations.
type Mutation {
  # A mutation to add a new channel to the list of channels
  addChannel(name: String!): Channel
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };

>>>>>>> t3-start
