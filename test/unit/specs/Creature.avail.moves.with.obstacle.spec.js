import Creature from '@/classes/Creature'
import Board from '@/classes/Board'
// https://jestjs.io/docs/en/getting-started.html
// https://jestjs.io/docs/en/expect

describe('Creature available moves on board with obstacles', () => {
  let board
  let creature
  // beforeEach(() => {
  //   board = new Board(8, 8)
  //   creature = new Creature(board, 0, 0, 6)
  // })

  it('should calculate available moves, creature in corner, 2 creatures block', () => {
    board = new Board(8, 8)
    creature = new Creature(board, 0, 0, 6)
    new Creature(board, 2, 0, 4)
    new Creature(board, 2, 1, 4)
    expect(creature.calculateAvailableMoves()).toEqual(
      [
        [1, 2, 5, 0, 0, 0, 0, 0],
        [2, 2, 5, 2, 0, 0, 0, 0],
        [2, 2, 2, 2, 2, 0, 0, 0],
        [2, 2, 2, 2, 0, 0, 0, 0],
        [2, 2, 2, 0, 0, 0, 0, 0],
        [2, 2, 0, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
      ]
    )
  })
})
