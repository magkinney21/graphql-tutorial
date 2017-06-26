<<<<<<< HEAD
import { schema } from './src/schema';
=======
import express from 'express';
>>>>>>> t3-start
import {
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express';
import bodyParser from 'body-parser';
<<<<<<< HEAD
import express from 'express';

const PORT = 4000;

const server = express();
server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));
=======
import cors from 'cors';

import { schema } from './src/schema';

const PORT = 4000;
const server = express();

server.use('*', cors({ origin: 'http://localhost:3000' }));

>>>>>>> t3-start
server.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));

<<<<<<< HEAD
server.listen(PORT, () => console.log(`GraphQL Server is now running on http://localhost:${PORT}`));
=======
server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

server.listen(PORT, () =>
  console.log(`GraphQL Server is now running on http://localhost:${PORT}`)
);
>>>>>>> t3-start
