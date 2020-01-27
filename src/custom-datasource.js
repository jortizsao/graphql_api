import { DataSource } from 'apollo-datasource';

class CustomDatasource extends DataSource {
  constructor() {
    super();
    this.customers = {
      customer1: {
        id: 'customer1',
        name: 'john',
        surname: 'doe',
        orders: [
          {
            id: 'order1',
          },
          {
            id: 'order2',
          },
        ],
      },
      customer2: {
        id: 'customer2',
        name: 'sean',
        surname: 'spencer',
        orders: [
          {
            id: 'order4',
          },
        ],
      },
    };
  }

  async getCustomer(id) {
    return Promise.resolve(this.customers[id]);
  }
}

export default CustomDatasource;
