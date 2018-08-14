export default class Creature {
  constructor(x, y) {
    this.speed = 4
    this.x = x
    this.y = y
  }
  move(toX, toY) {
    this.x = toX
    this.y = toY
  }
}
