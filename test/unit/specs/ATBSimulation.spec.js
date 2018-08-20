import ATBSimulation from '@/classes/atb/ATBSimulation'
import Bowman from '@/classes/creatures/Bowman'
import Cow from '@/classes/creatures/Cow'
import Dancer from '@/classes/creatures/Dancer'
import Horse from '@/classes/creatures/Horse'
import ATBCreature from '@/classes/creature/ATBCreature'

describe('ATBSimulation', () => {
  it('should simulate 4 creatures for 2 tours', () => {
    let bowman = new Bowman(0)
    let cow = new Cow(0)
    let dancer = new Dancer(0)
    let horse = new Horse(0)
    let atbSimulation = new ATBSimulation([bowman, cow, dancer, horse])
    let result = atbSimulation.run(2)
    let mappedResult = result.map(atbCreature => atbCreature.toLogStr())
    // console.log(mappedResult)
    expect(result.length).toBe(10)
    expect(mappedResult).toEqual([
      'Horse(21.7)',
      'Dancer(16.6)',
      'Cow(12)',
      'Horse(21.7)',
      'Dancer(16.6)',
      'Bowman(8)',
      'Horse(21.7)',
      'Cow(12)',
      'Dancer(16.6)',
      'Horse(21.7)'
    ])
  })

  it('should simulate bowman and dragon like in http://help.ordenmira.ru/', () => {
    let bowman = new ATBCreature(
      4, // speed
      8.6, // ini
      3) // initialATB
    bowman.name = 'Bowman'

    let dragon = new ATBCreature(
      5, // speed
      8, // ini
      10) // initialATB
    dragon.name = 'Dragon'

    let atbSimulation = new ATBSimulation([bowman, dragon])
    let result = atbSimulation.run(1)
    // if we simulate only 1 tour -> then the creatures will not yet reach the finish line
    let mappedResult = result.map(atbCreature => atbCreature.toLogStr())
    // console.log(mappedResult)
    expect(result.length).toBe(0)

    // simulate 1 more tour. and bowman should go first than the dragon
    result = atbSimulation.run(1)
    mappedResult = result.map(atbCreature => atbCreature.toLogStr())
    // console.log(mappedResult)
    expect(result.length).toBe(2)
    expect(mappedResult).toEqual(
      ['Bowman(8.6)', 'Dragon(8)']
    )
  })

  it('should simulate bowman and dragon, but dragon goes first', () => {
    let bowman = new ATBCreature(
      4, // speed
      8.5, // ini
      4) // initialATB
    bowman.name = 'Bowman'

    let dragon = new ATBCreature(
      5, // speed
      8, // ini
      10) // initialATB
    dragon.name = 'Dragon'

    let atbSimulation = new ATBSimulation([dragon, bowman])
    let result = atbSimulation.run(1)
    // if we simulate only 1 tour -> then the creatures will not yet reach the finish line
    let mappedResult = result.map(atbCreature => atbCreature.toLogStr())
    // console.log(mappedResult)
    expect(result.length).toBe(0)

    // simulate 1 more tour. and bowman should go first than the dragon
    result = atbSimulation.run(1)
    mappedResult = result.map(atbCreature => atbCreature.toLogStr())
    // console.log(mappedResult)
    expect(result.length).toBe(2)
    expect(mappedResult).toEqual(
      ['Dragon(8)', 'Bowman(8.5)']
    )
  })
})
