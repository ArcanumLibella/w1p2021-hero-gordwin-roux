class ObjectService {
  constructor() {
    this.objects = [];
  }
  add(object) {
    this.objects.push(object);
  }
  has(object) {
    return this.objects.some(obj => obj === object);
  }
}

module.exports = new ObjectService();
