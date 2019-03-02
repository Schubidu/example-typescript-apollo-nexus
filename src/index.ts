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
  /*typegenAutoConfig: {
        sources: [
            {
                source: path.join(__dirname, "./typeDefs.ts"),
                alias: "t",
            },
        ],
        contextType: "t.Context",
    },*/
});

const server = new ApolloServer({
  schema,
  introspection: !process.env.IS_NOW,
  playground: !process.env.IS_NOW,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
