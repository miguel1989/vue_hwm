import Board from '@/classes/Board'
// https://jestjs.io/docs/en/getting-started.html

describe('Board', () => {
  it('should convert cells to num', () => {
    let board = new Board(2, 4)
    // console.log(board.cells)
    expect(board.toNumArr()).toEqual(
      [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    )
  })
  it('should convert cells to num 2', () => {
    let board = new Board(4, 2)
    // console.log(board.cells)
    expect(board.toNumArr()).toEqual(
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ]
    )
  })
})
