class ObjectService {
  constructor() {
    this.objects = [];
  }
  add(object) {
    this.objects.push(object);
    console.log(this.objects);
  }
  has(object) {
    console.log(object, this.objects);
    return this.objects.some(obj => obj === object);
  }
}

module.exports = new ObjectService();
