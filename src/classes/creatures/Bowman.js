import ATBCreature from '../creature/ATBCreature'

export default class Bowman extends ATBCreature {
  constructor(startATB = -1) {
    super(
      4, // speed
      8, // initiative
      startATB)
    this.name = 'Bowman'
  }
}
