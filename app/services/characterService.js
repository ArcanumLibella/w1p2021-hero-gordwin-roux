class CharacterService {
  constructor() {
    this.character;
  }
  set(character) {
    this.character = character;
  }
  get() {
    return this.character;
  }
}

module.exports = new CharacterService();