import ATBCreature from '../creature/ATBCreature'

export default class Cow extends ATBCreature {
  constructor(startATB = -1) {
    super(
      5, // speed
      12, // initiative
      startATB)
    this.name = 'Cow'
  }
}
