import { ApolloServer } from 'apollo-server';
import resolvers from './schema.js';
import typeDefs from './schema.graphql';
import CustomDatasource from './custom-datasource.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    customDatasource: new CustomDatasource(),
  }),
});

export default server;
