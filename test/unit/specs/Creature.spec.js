import Creature from '@/classes/creature/Creature'
import Board from '@/classes/Board'
// https://jestjs.io/docs/en/getting-started.html
// https://jestjs.io/docs/en/expect

describe('Creature', () => {
  let board
  let creature
  beforeEach(() => {
    board = new Board(12, 12)
    creature = new Creature(4)
    board.initCreature(creature, 0, 0)
  })

  it('should move', () => {
    expect(creature.move(1, 2)).toBe(true)
    expect(creature.x).toEqual(1)
    expect(creature.y).toEqual(2)
    expect(creature.movePathArr.length).toBeGreaterThan(0)
  })

  it('should not move', () => {
    expect(creature.move(5, 5)).toBe(false)
    expect(creature.x).toEqual(0)
    expect(creature.y).toEqual(0)
  })
})
