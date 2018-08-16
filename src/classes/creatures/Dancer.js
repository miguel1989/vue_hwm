import Creature from '../Creature'

export default class Dancer extends Creature {
  constructor(board, x, y) {
    super(board,
      x,
      y,
      6, // speed
      16.6) // initiative
    this.name = 'Dancer'
  }
}
