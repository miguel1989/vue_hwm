export default class Board {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.cells = new Array(height)
    for (let j = 0; j < height; j++) {
      this.cells[j] = new Array(width)
      for (let i = 0; i < width; i++) {
        this.cells[j][i] = 0
      }
    }
    // this.cells.forEach(row => {
    //   row = new Array(width)
    // })
  }
}
