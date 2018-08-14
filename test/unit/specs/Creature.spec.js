import Creature from '@/classes/Creature'

describe('Creature', () => {
  it('should move', () => {
    let creature = new Creature(0, 0)
    creature.move(1, 2)
    expect(creature.x).toEqual(1)
    expect(creature.y).toEqual(2)
  })
})
