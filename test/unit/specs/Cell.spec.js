import Cell from '@/classes/Cell'
import * as Const from '../../../src/constants'

describe('Cell', () => {
  it('should convert to num correct', () => {
    let cell = new Cell()

    expect(cell.toNum()).toBe(Const.EMPTY_NUM)

    // add mock creature
    cell.addCreature({uuid: '123', isAlive: true})
    expect(cell.toNum()).toBe(Const.CREATURE_NUM)

    cell.addCreature({uuid: '222', isAlive: true})
    expect(cell.toNum()).toBe(Const.CREATURE_NUM)

    cell.removeCreature('123')
    expect(cell.toNum()).toBe(Const.CREATURE_NUM)

    cell.removeCreature('222')
    expect(cell.toNum()).toBe(Const.EMPTY_NUM)

    // add mock creature
    cell.addCreature({uuid: '321', isAlive: false})
    expect(cell.toNum()).toBe(Const.EMPTY_NUM)

    cell.makeAsObstacle()
    expect(cell.toNum()).toBe(Const.OBSTACLE_NUM)
  })
})
