import Board from '@/classes/Board'
import Creature from '@/classes/creature/Creature'
// https://jestjs.io/docs/en/getting-started.html

describe('Board', () => {
  it('should convert cells to num. width = 2. height = 4', () => {
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
  it('should convert cells to num. width = 4. height = 2', () => {
    let board = new Board(4, 2)
    // console.log(board.cells)
    expect(board.toNumArr()).toEqual(
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ]
    )
  })
  it('should convert cells to num. width = 4. height = 2. with creature', () => {
    let board = new Board(4, 2)
    board.initCreature(new Creature(), 1, 1)
    board.cell(1, 0).makeAsObstacle()
    expect(board.cell(1, 1)._creatures.length).toBe(1)
    expect(board.toNumArr()).toEqual(
      [
        [0, 10, 0, 0],
        [0, 5, 0, 0]
      ]
    )
  })
})
