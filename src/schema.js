export default {
  Query: {
    customer: (_, { id }, { dataSources: { customDatasource } }) => customDatasource.getCustomer(id),
  },
};
