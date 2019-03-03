import { ApolloServer } from 'apollo-server';
import { makeSchema } from 'nexus';
import * as path from 'path';
import * as types from './schema';

const schema = makeSchema({
  types,
  outputs: {
    schema: path.join(__dirname, '/example-schema.graphql'),
    typegen: path.join(__dirname, '/example-typegen.ts'),
  },
});

const server = new ApolloServer({
  schema,
  introspection: true,
  playground: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
