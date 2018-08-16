import Creature from '../Creature'

export default class Horse extends Creature {
  constructor(board, x, y) {
    super(board,
      x,
      y,
      8, // speed
      21.7) // initiative
    this.name = 'Horse'
  }
}
