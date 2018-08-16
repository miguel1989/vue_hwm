import Creature from '../Creature'

export default class Cow extends Creature {
  constructor(board, x, y) {
    super(board,
      x,
      y,
      5, // speed
      12) // initiative
    this.name = 'Cow'
  }
}
