import Creature from '@/classes/Creature'
import Board from '@/classes/Board'
// https://jestjs.io/docs/en/getting-started.html
// https://jestjs.io/docs/en/expect

describe('Creature available moves on empty board 7x7, with speed 3', () => {
  let board
  let creature
  beforeEach(() => {
    board = new Board(7, 7)
    creature = new Creature(board, 0, 0, 3)
  })

  it('should calculate available moves, start from center', () => {
    creature.move(3, 3)
    expect(creature.calculateAvailableMoves()).toEqual(
      [
        [0, 0, 0, 2, 0, 0, 0],
        [0, 0, 2, 2, 2, 0, 0],
        [0, 2, 2, 2, 2, 2, 0],
        [2, 2, 2, 1, 2, 2, 2],
        [0, 2, 2, 2, 2, 2, 0],
        [0, 0, 2, 2, 2, 0, 0],
        [0, 0, 0, 2, 0, 0, 0]
      ]
    )
  })

  it('should calculate available moves, start in the corner', () => {
    expect(creature.calculateAvailableMoves()).toEqual(
      [
        [1, 2, 2, 2, 0, 0, 0],
        [2, 2, 2, 0, 0, 0, 0],
        [2, 2, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ]
    )
  })

  it('should calculate available moves, start in the corner2', () => {
    creature.move(6, 0)
    expect(creature.calculateAvailableMoves()).toEqual(
      [
        [0, 0, 0, 2, 2, 2, 1],
        [0, 0, 0, 0, 2, 2, 2],
        [0, 0, 0, 0, 0, 2, 2],
        [0, 0, 0, 0, 0, 0, 2],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
      ]
    )
  })

  it('should calculate available moves, start in the corner3', () => {
    creature.move(6, 6)
    expect(creature.calculateAvailableMoves()).toEqual(
      [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 2],
        [0, 0, 0, 0, 0, 2, 2],
        [0, 0, 0, 0, 2, 2, 2],
        [0, 0, 0, 2, 2, 2, 1]
      ]
    )
  })

  it('should calculate available moves, start in the corner4', () => {
    creature.move(0, 6)
    expect(creature.calculateAvailableMoves()).toEqual(
      [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0],
        [2, 2, 0, 0, 0, 0, 0],
        [2, 2, 2, 0, 0, 0, 0],
        [1, 2, 2, 2, 0, 0, 0]
      ]
    )
  })

  it('should calculate available moves, start almost in the corner', () => {
    creature.move(5, 5)
    expect(creature.calculateAvailableMoves()).toEqual(
      [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 2, 0],
        [0, 0, 0, 0, 2, 2, 2],
        [0, 0, 0, 2, 2, 2, 2],
        [0, 0, 2, 2, 2, 1, 2],
        [0, 0, 0, 2, 2, 2, 2]
      ]
    )
  })

  it('should calculate available moves on empty board for speed = 4, board 9x9, start from center', () => {
    board = new Board(9, 9)
    creature = new Creature(board, 4, 4, 4)
    expect(creature.calculateAvailableMoves()).toEqual(
      [
        [0, 0, 0, 0, 2, 0, 0, 0, 0],
        [0, 0, 0, 2, 2, 2, 0, 0, 0],
        [0, 0, 2, 2, 2, 2, 2, 0, 0],
        [0, 2, 2, 2, 2, 2, 2, 2, 0],
        [2, 2, 2, 2, 1, 2, 2, 2, 2],
        [0, 2, 2, 2, 2, 2, 2, 2, 0],
        [0, 0, 2, 2, 2, 2, 2, 0, 0],
        [0, 0, 0, 2, 2, 2, 0, 0, 0],
        [0, 0, 0, 0, 2, 0, 0, 0, 0]
      ]
    )
  })
})
