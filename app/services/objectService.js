class ObjectService {
  constructor() {
    this.objects = [];
  } // pour ajouter les objects choisis dans un tableau
  add(object) {
    this.objects.push(object);
    console.log(this.objects);
  } // vérifie si l'on possède l'objet nécessaire pour dévérouiller un chemin
  has(object) {
    console.log(object, this.objects);
    return this.objects.some(obj => obj === object);
  }
}

module.exports = new ObjectService();
 