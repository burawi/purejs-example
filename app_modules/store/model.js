export default class Store {
  static findAll() {
    // normally should fetch for result from server
    // but for demo purpose i will return a plain object
    return [
      { id: "123", name: 'maghaza al baraka' },
      { id: "124", name: 'techoli store' },
      { id: "125", name: 'monoprix' }
    ]
  }

  static findById(id) {
    return this.findAll().find(item => item.id === id);
  }
}