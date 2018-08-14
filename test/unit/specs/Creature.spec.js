import Creature from '@/classes/Creature'
import Board from '@/classes/Board'
// https://jestjs.io/docs/en/getting-started.html
// https://jestjs.io/docs/en/expect

describe('Creature', () => {
  let board
  beforeEach(() => {
    board = new Board(12, 12)
  })

  it('should move', () => {
    let creature = new Creature(board, 0, 0)
    creature.move(1, 2)
    expect(creature.x).toEqual(1)
    expect(creature.y).toEqual(2)
  })
})
