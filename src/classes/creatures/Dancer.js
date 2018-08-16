import ATBCreature from '../creature/ATBCreature'

export default class Dancer extends ATBCreature {
  constructor(startATB = -1) {
    super(
      6, // speed
      16.6, // initiative
      startATB)
    this.name = 'Dancer'
  }
}
