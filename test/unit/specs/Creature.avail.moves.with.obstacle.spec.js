import Creature from '@/classes/Creature'
import Board from '@/classes/Board'
// https://jestjs.io/docs/en/getting-started.html
// https://jestjs.io/docs/en/expect

describe('Creature available moves on board with obstacles', () => {
  let board
  let creature

  it('should calculate available moves, creature in corner, 2 creatures block', () => {
    board = new Board(8, 8)
    creature = new Creature(6)
    board.initCreature(creature, 0, 0)
    board.initCreature(new Creature(), 2, 0)
    board.initCreature(new Creature(), 2, 1)
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
    expect(creature.move(4, 2)).toBe(true)
    expect(creature.calculateAvailableMoves()).toEqual(
      [
        [2, 2, 5, 2, 2, 2, 2, 2],
        [2, 2, 5, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 1, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2],
        [2, 2, 2, 2, 2, 2, 2, 2],
        [0, 2, 2, 2, 2, 2, 2, 2],
        [0, 0, 2, 2, 2, 2, 2, 0],
        [0, 0, 0, 2, 2, 2, 0, 0]
      ]
    )
  })

  it('should calculate available moves, creature in corner, 2 creatures block, speed = 4', () => {
    board = new Board(8, 8)
    creature = new Creature(4)
    board.initCreature(creature, 0, 0)
    board.initCreature(new Creature(), 1, 0)
    board.initCreature(new Creature(), 1, 1)
    expect(creature.calculateAvailableMoves()).toEqual(
      [
        [1, 5, 0, 0, 0, 0, 0, 0],
        [2, 5, 0, 0, 0, 0, 0, 0],
        [2, 2, 2, 0, 0, 0, 0, 0],
        [2, 2, 0, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
      ]
    )
  })

  it('should calculate available moves, creature in corner, 4 creatures block, should do diagonal move', () => {
    board = new Board(8, 8)
    creature = new Creature(6)
    board.initCreature(creature, 0, 0)
    board.initCreature(new Creature(), 2, 0)
    board.initCreature(new Creature(), 2, 1)
    board.initCreature(new Creature(), 1, 2)
    board.initCreature(new Creature(), 0, 3)
    expect(creature.calculateAvailableMoves()).toEqual(
      [
        [1, 2, 5, 0, 0, 0, 0, 0],
        [2, 2, 5, 2, 0, 0, 0, 0],
        [2, 5, 2, 2, 2, 0, 0, 0],
        [5, 2, 2, 2, 0, 0, 0, 0],
        [2, 2, 2, 0, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
      ]
    )
  })
})
