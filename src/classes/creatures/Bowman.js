import Creature from '../Creature'

export default class Bowman extends Creature {
  constructor(board, x, y) {
    super(board,
      x,
      y,
      4, // speed
      8) // initiative
    this.name = 'Bowman'
  }
}
