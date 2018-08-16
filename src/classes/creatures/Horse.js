import ATBCreature from '../creature/ATBCreature'

export default class Horse extends ATBCreature {
  constructor(startATB = -1) {
    super(
      8, // speed
      21.7, // initiative
      startATB)
    this.name = 'Horse'
  }
}
