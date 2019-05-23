class PowerService {
  constructor() {
    this.powers;
  } // pour ajouter les objects choisis dans un tableau
  add(power) {
    if (character.name === "Pamela" && action.object === "Tronçonneuse") {
      // Pas besoin de tronçonneuse
      console.log("Force surhumaine");
    } else {
      console.log("Pas de pouvoir");
    }

    if (character.name === "Stan") {
      // Pas besoin de pot de vin
    }
  }

  //   this.objects.push(object);
  //   console.log(this.objects);
  // } // vérifie si l'on possède l'objet nécessaire pour dévérouiller un chemin
  // has(object) {
  //   console.log(object, this.objects);
  //   return this.objects.some(obj => obj === object);
  // }
}

module.exports = new PowerService();
