export default class Store {
  static findAll() {
    // normally should fetch for result from server
    // but for demo purpose i will return a plain object
    return [
      { id: "123", name: '7 Eleven' },
      { id: "124", name: 'IKEA' },
      { id: "125", name: 'Walmart' }
    ]
  }

  static findById(id) {
    return this.findAll().find(item => item.id === id);
  }
}