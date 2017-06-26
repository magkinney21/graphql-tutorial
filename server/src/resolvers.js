<<<<<<< HEAD
// src/resolvers.js

=======
>>>>>>> t3-start
const channels = [{
  id: 1,
  name: 'soccer',
}, {
  id: 2,
  name: 'baseball',
}];
<<<<<<< HEAD
=======
let nextId = 3;

>>>>>>> t3-start
export const resolvers = {
  Query: {
    channels: () => {
      return channels;
    },
  },
<<<<<<< HEAD
=======
  Mutation: {
    addChannel: (root, args) => {
      const newChannel = { id: nextId++, name: args.name };
      channels.push(newChannel);
      return newChannel;
    },
  },
>>>>>>> t3-start
};
