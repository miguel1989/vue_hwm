import AvailableMoves from './AvailableMoves'
import MovePath from './MovePath'
import Point from './Point'
import {AVAILABLE_MOVE_NUM} from '../constants'

const DEBUG = false

export default class Creature {
  constructor(speed = 4, initiative = 10.0) {
    this.uuid = Math.random().toString(16).slice(2)
    this.name = ''
    this.speed = speed
    this.initiative = initiative
    this.isAlive = true
    // todo isLarge, isFlying as skills
  }

  move(toX, toY) {
    let availableMoveArr = this.calculateAvailableMoves()
    if (availableMoveArr[toY][toX] !== AVAILABLE_MOVE_NUM) {
      return false
    }
    let movePath = new MovePath( // todo do something with movePath
      this.board.toNumArr(),
      new Point(this.x, this.y),
      new Point(toX, toY)
    ).calculate()
    this.board.cell(this.x, this.y).removeCreature(this.uuid)
    this.x = toX
    this.y = toY
    this.board.cell(this.x, this.y).addCreature(this)
    return true
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

  attachToBoard(board, x, y) {
    this.board = board
    this.x = x
    this.y = y
  }
}
