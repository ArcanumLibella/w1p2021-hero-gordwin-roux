class ObjectService {
  constructor() {
    this.objects = [];
  } // pour ajouter les objects choisis dans un tableau
  add(object) {
    this.objects.push(object);
    
    console.log(this.objects);
  } // vérifie si l'on possède l'objet nécessaire pour dévérouiller un chemin
  get() {
    return this.objects;
    
  }
  has(object) {
    // return this.objects.some(obj => obj === object);
    return this.objects.indexOf(object) > -1;
  }
  remove(object) {
    this.objects.splice(object.indexOf(object), 1);
  }
  hasThree() {
    return this.objects.length === 2;
  }
}

module.exports = new ObjectService();
 