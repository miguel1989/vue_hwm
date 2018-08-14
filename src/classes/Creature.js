import {SELF_CREATURE_NUM, AVAILABLE_MOVE_NUM, EMPTY_NUM} from '../constants'

const DIAGONALLY_POINTS = 2
const DEBUG = true

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
    this.board.cell(this.x, this.y).removeCreature(this.uuid)
    this.x = toX
    this.y = toY
    this.board.cell(this.x, this.y).addCreature(this)
  }

  calculateAvailableMoves() {
    if (DEBUG) console.time('calculateAvailableMoves')
    let speedPoints = this.speed
    let clonedCells = this.board.toNumArr()
    clonedCells[this.y][this.x] = SELF_CREATURE_NUM
    this._recurCalcAvailMoves(clonedCells, this.x, this.y, speedPoints)
    if (DEBUG) console.timeEnd('calculateAvailableMoves')
    if (DEBUG) console.log('END')
    if (DEBUG) console.log(clonedCells)
    return clonedCells
  }

  _recurCalcAvailMoves(cells, x, y, speedPoints) {
    if (speedPoints < 0) {
      return
    }
    if (cells[y][x] === EMPTY_NUM) {
      cells[y][x] = AVAILABLE_MOVE_NUM
    }
    // if (DEBUG) console.log(cells)
    // if (DEBUG) console.log(`x = ${x}, y = ${y}, speedPoints = ${speedPoints}`)
    let canMoveLeft = (x - 1 >= 0) && this._isCellAvailable(cells, x - 1, y)
    let canMoveUp = (y - 1 >= 0) && this._isCellAvailable(cells, x, y - 1)
    let canMoveRight = (x + 1 < cells[0].length) && this._isCellAvailable(cells, x + 1, y)
    let canMoveDown = (y + 1 < cells.length) && this._isCellAvailable(cells, x, y + 1)
    // firstly move horizontally or vertically
    if (canMoveLeft) {
      this._recurCalcAvailMoves(cells, x - 1, y, speedPoints - 1)
    }
    if (canMoveUp) {
      this._recurCalcAvailMoves(cells, x, y - 1, speedPoints - 1)
    }
    if (canMoveRight) {
      this._recurCalcAvailMoves(cells, x + 1, y, speedPoints - 1)
    }
    if (canMoveDown) {
      this._recurCalcAvailMoves(cells, x, y + 1, speedPoints - 1)
    }
    // now move diagonally
    if (canMoveUp && canMoveLeft) {
      this._recurCalcAvailMoves(cells, x - 1, y - 1, speedPoints - DIAGONALLY_POINTS)
    }
    if (canMoveUp && canMoveRight) {
      this._recurCalcAvailMoves(cells, x + 1, y - 1, speedPoints - DIAGONALLY_POINTS)
    }
    if (canMoveDown && canMoveRight) {
      this._recurCalcAvailMoves(cells, x + 1, y + 1, speedPoints - DIAGONALLY_POINTS)
    }
    if (canMoveDown && canMoveLeft) {
      this._recurCalcAvailMoves(cells, x - 1, y + 1, speedPoints - DIAGONALLY_POINTS)
    }
  }

  _isCellAvailable(cells, x, y) {
    return cells[y][x] === EMPTY_NUM || cells[y][x] === AVAILABLE_MOVE_NUM
  }
}
