import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers.js';
import typeDefs from './type-defs.graphql';
import CustomDatasource from './custom-datasource.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    customDatasource: new CustomDatasource(),
  }),
});

export default server;
