import Cell from './Cell'

export default class Board {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.cells = new Array(height)
    for (let j = 0; j < height; j++) {
      this.cells[j] = new Array(width)
      for (let i = 0; i < width; i++) {
        this.cells[j][i] = new Cell()
      }
    }
  }

  addPlayer() {
    // todo me
  }

  initCreature(creature, x, y) {
    creature.attachToBoard(this, x, y)
    this.cell(x, y).addCreature(creature)
  }

  toNumArr() {
    let self = this
    let arr = new Array(this.height)
    for (let j = 0; j < self.height; j++) {
      arr[j] = new Array(self.width)
      for (let i = 0; i < self.width; i++) {
        arr[j][i] = self.cells[j][i].toNum()
      }
    }
    return arr
  }

  cell(x, y) {
    return this.cells[y][x]
  }

  start() {
    // todo me
    // place all units on the field
    // atb.simulate(10 tours)
    // do while (game is not ended)
    //    atb.tick
    //    if is time for creature to make a turn
    //        creature.beforeTurn (negative morale) (poisoning)
    //        creature do 'move', 'attack', 'def' , 'wait'
    //        creature.afterTurn (positive morale)
    //        atb.simulate(10 tours)
    //    endif
  }
}
