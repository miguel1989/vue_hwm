const DIAGONALLY_POINTS = 1.6
const DEBUG = false
export default class Creature {
  constructor(board, x, y, speed = 4, initiative = 10.0) {
    this.board = board
    this.x = x
    this.y = y
    this.speed = speed
    this.initiative = initiative
    // to isLarge
    // to isFlying
  }

  move(toX, toY) {
    this.x = toX
    this.y = toY
  }

  calculateAvailableMoves() {
    if (DEBUG) console.time('calculateAvailableMoves')
    let speedPoints = this.speed
    let clonedCells = this.board.cells.slice(0)
    clonedCells[this.y][this.x] = 1 // todo think about what to place here
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
    if (cells[y][x] === 0) {
      cells[y][x] = 2 // todo think about what to place here
    }
    if (DEBUG) console.log(cells)
    if (DEBUG) console.log(`x = ${x}, y = ${y}, speedPoints = ${speedPoints}`)
    let canMoveLeft = x - 1 >= 0
    let canMoveUp = y - 1 >= 0
    let canMoveRight = x + 1 < cells[0].length
    let canMoveDown = y + 1 < cells.length
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
}
