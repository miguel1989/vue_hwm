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
}
