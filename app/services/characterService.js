import { characters } from "../script";

class CharacterService {
  constructor() {
    this.character;
  } // pour sélectionner un personnage
  set(character) {
    this.character = character;
  }
  // get(power) {
  //   console.log(power, this.power);
  //   return this.power.some(pow => pow === power);
  //   // return this.character;
  // }
  add(name) {
    console.log(characters[name].power);
    // Si Pamela :
    if (characters[name].power === "Force surhumaine") {
      // Pas besoin de tronçonneuse
      console.log("Pas besoin de tronçonneuse");
      objectService.add("Tronçonneuse");
    } else {
      // characters[name].power === "Charme légendaire");
      console.log("Pas besoin de pot de vin");
      objectService.add("Pot de vin");
    }

    // // Si Stan :
    // if (characters.power === "Charme légendaire") {
    //   // Pas besoin de pot de vin
    //   console.log("Pas besoin de pot de vin");
    // }
  }
}

module.exports = new CharacterService();
