import Creature from '@/classes/Creature'
import Board from '@/classes/Board'
// https://jestjs.io/docs/en/getting-started.html
// https://jestjs.io/docs/en/expect

describe('Creature available moves on empty board 7x7, with speed 3', () => {
  let board
  beforeEach(() => {
    board = new Board(7, 7)
  })

  it('should calculate available moves, start from center', () => {
    let creature = new Creature(3)
    board.initCreature(creature, 3, 3)
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
    let creature = new Creature(3)
    board.initCreature(creature, 0, 0)
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
    let creature = new Creature(3)
    board.initCreature(creature, 6, 0)
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
    let creature = new Creature(3)
    board.initCreature(creature, 6, 6)
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
    let creature = new Creature(3)
    board.initCreature(creature, 0, 6)
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
    let creature = new Creature(3)
    board.initCreature(creature, 5, 5)
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
    let creature = new Creature(4)
    board.initCreature(creature, 4, 4)
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

  it('should calculate available moves on empty board for speed = 6, board 13x13, start from center', () => {
    board = new Board(13, 13)
    let creature = new Creature(6)
    board.initCreature(creature, 6, 6)
    expect(creature.calculateAvailableMoves()).toEqual(
      [
        [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0],
        [0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0],
        [0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0],
        [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
        [2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2],
        [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
        [0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0],
        [0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0],
        [0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0]
      ]
    )
  })
})
