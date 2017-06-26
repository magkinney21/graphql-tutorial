import { schema } from './src/schema';
import {
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express';
import bodyParser from 'body-parser';
import express from 'express';

const PORT = 4000;

const server = express();
server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));
server.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));

server.listen(PORT, () => console.log(`GraphQL Server is now running on http://localhost:${PORT}`));
