import AvailableMoves from './AvailableMoves'
const DEBUG = false

export default class Creature {
  constructor(board, x, y, speed = 4) {
    this.uuid = Math.random().toString(16).slice(2)
    this.board = board
    this.x = x
    this.y = y
    this.speed = speed
    // this.initiative = initiative 10.0
    this.isAlive = true

    this.board.cell(this.x, this.y).addCreature(this)
    // todo isLarge, isFlying as skills
  }

  move(toX, toY) {
    // todo add validation can he go there?
    this.board.cell(this.x, this.y).removeCreature(this.uuid)
    this.x = toX
    this.y = toY
    this.board.cell(this.x, this.y).addCreature(this)
  }

  calculateAvailableMoves() {
    if (DEBUG) console.time('calculateAvailableMoves')
    let resultCellNumArr = new AvailableMoves(
      this.board.toNumArr(),
      this.x,
      this.y,
      this.speed
    ).calculate()
    if (DEBUG) console.timeEnd('calculateAvailableMoves')
    if (DEBUG) console.log(resultCellNumArr)
    return resultCellNumArr
  }
}
