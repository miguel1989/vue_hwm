import {AVAILABLE_MOVE_NUM, EMPTY_NUM, SELF_CREATURE_NUM} from '../constants'
const SPEED_POINTS_DIAGONAL = 2
const SPEED_POINTS_NORMAL = 1
// const DEBUG = false

export default class AvailableMoves {
  constructor(cellNumArr, curX, curY, speed) { // todo isLarge, canFly
    this.cellNumArr = cellNumArr
    this.curX = curX
    this.curY = curY
    this.speedPoints = speed
    cellNumArr[curY][curX] = SELF_CREATURE_NUM
  }

  calculate() {
    this._recurCalc(this.curX, this.curY, this.speedPoints)
    return this.cellNumArr
  }

  _recurCalc(x, y, speedPoints) {
    if (speedPoints < 0) {
      return
    }
    if (this.cellNumArr[y][x] === EMPTY_NUM) {
      this.cellNumArr[y][x] = AVAILABLE_MOVE_NUM
    }
    // if (DEBUG) console.log(cellNumArr)
    // if (DEBUG) console.log(`x = ${x}, y = ${y}, speedPoints = ${speedPoints}`)
    let canMoveLeft = (x - 1 >= 0) && this._isCellAvailable(x - 1, y)
    let canMoveUp = (y - 1 >= 0) && this._isCellAvailable(x, y - 1)
    let canMoveRight = (x + 1 < this.cellNumArr[0].length) && this._isCellAvailable(x + 1, y)
    let canMoveDown = (y + 1 < this.cellNumArr.length) && this._isCellAvailable(x, y + 1)
    // firstly move horizontally or vertically
    if (canMoveLeft) {
      this._recurCalc(x - 1, y, speedPoints - SPEED_POINTS_NORMAL)
    }
    if (canMoveUp) {
      this._recurCalc(x, y - 1, speedPoints - SPEED_POINTS_NORMAL)
    }
    if (canMoveRight) {
      this._recurCalc(x + 1, y, speedPoints - SPEED_POINTS_NORMAL)
    }
    if (canMoveDown) {
      this._recurCalc(x, y + 1, speedPoints - SPEED_POINTS_NORMAL)
    }
    // now move diagonally
    if (canMoveUp && canMoveLeft) {
      this._recurCalc(x - 1, y - 1, speedPoints - SPEED_POINTS_DIAGONAL)
    }
    if (canMoveUp && canMoveRight) {
      this._recurCalc(x + 1, y - 1, speedPoints - SPEED_POINTS_DIAGONAL)
    }
    if (canMoveDown && canMoveRight) {
      this._recurCalc(x + 1, y + 1, speedPoints - SPEED_POINTS_DIAGONAL)
    }
    if (canMoveDown && canMoveLeft) {
      this._recurCalc(x - 1, y + 1, speedPoints - SPEED_POINTS_DIAGONAL)
    }
  }

  _isCellAvailable(x, y) {
    return this.cellNumArr[y][x] === EMPTY_NUM || this.cellNumArr[y][x] === AVAILABLE_MOVE_NUM
  }
}
