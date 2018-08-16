export default class ATB {
  constructor() {
    this.creatures = []
  }

  addCreature(atbCreature) {
    this.creatures.push(atbCreature)
    return this
  }
}
