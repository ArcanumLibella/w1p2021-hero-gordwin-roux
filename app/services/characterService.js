import { characters } from "../script";
import objectService from "./objectService";

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
    localStorage.setItem('gameCharacterName', name);
    // Si Pamela :
    if (characters[name].power === "Force surhumaine") {
      // Pas besoin de tronçonneuse
      console.log("Pas besoin de tronçonneuse grâce à ta force surhumaine !");
      alert("Pas besoin de tronçonneuse grâce à ta force surhumaine !");
      objectService.add("Tronçonneuse");
    } else {
      // characters[name].power === "Charme légendaire");
      console.log("Pas besoin de pot de vin grâce à ton charme légendaire !");
      alert("Pas besoin de pot de vin grâce à ton charme légendaire !");
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
