import Board from '@/classes/Board'
// https://jestjs.io/docs/en/getting-started.html

describe('Board', () => {
  it('create cells', () => {
    let board = new Board(2, 4)
    // console.log(board.cells)
    expect(board.cells).toEqual(
      [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    )
  })
  it('create cells', () => {
    let board = new Board(4, 2)
    // console.log(board.cells)
    expect(board.cells).toEqual(
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ]
    )
  })
})
