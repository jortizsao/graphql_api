import { DataSource } from 'apollo-datasource';

class CustomDatasource extends DataSource {
  constructor() {
    super();

    this.customers = [
      {
        id: 'customer1',
        name: 'john',
        surname: 'doe',
      },
      {
        id: 'customer2',
        name: 'sean',
        surname: 'spencer',
      },
    ];

    this.orders = [
      {
        id: 'order1',
        orderNumber: 'orderNumber1',
        customerId: 'customer1',
        lineItems: [
          {
            id: 'item1',
            productName: {
              en: 'product1-english',
              de: 'product1-german',
            },
          },
        ],
      },
      {
        id: 'order2',
        orderNumber: 'orderNumber2',
        customerId: 'customer1',
        lineItems: [
          {
            id: 'item2',
            productName: {
              en: 'product2-english',
              de: 'product2-german',
            },
          },
        ],
      },
      {
        id: 'order3',
        orderNumber: 'orderNumber3',
        customerId: 'customer2',
        lineItems: [
          {
            id: 'item3',
            productName: {
              en: 'product3-english',
              de: 'product3-german',
            },
          },
        ],
      },
    ];
  }

  async getCustomers() {
    return Promise.resolve(this.customers);
  }

  async getOrdersByCustomer(customerId) {
    return Promise.resolve(this.orders.filter(order => order.customerId === customerId));
  }
}

export default CustomDatasource;
