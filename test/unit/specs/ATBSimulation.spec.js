import ATBSimulation from '@/classes/atb/ATBSimulation'
import Bowman from '@/classes/creatures/Bowman'
import Cow from '@/classes/creatures/Cow'
import Dancer from '@/classes/creatures/Dancer'
import Horse from '@/classes/creatures/Horse'

describe('ATBSimulation', () => {
  it('should simulate 4 creatures for 2 tours', () => {
    let bowman = new Bowman(0)
    let cow = new Cow(0)
    let dancer = new Dancer(0)
    let horse = new Horse(0)
    let atbSimulation = new ATBSimulation([bowman, cow, dancer, horse])
    let result = atbSimulation.run(2)
    console.log(result.map(atbCreature => atbCreature.toLogStr()))
    expect(result.length).toBe(10)
  })
})
