import ATBCreature from './ATBCreature'

const TOURS_LIMIT = 2

export default class ATB {
  constructor() {
    this.creatures = []
  }

  addCreature(creature, startATB = -1) {
    this.creatures.push(new ATBCreature(creature, startATB))
    return this
  }

  simulate() {
    // we have 10 seconds per tour
    // and we simulate 10 tours
    let moveLineArr = []
    for (let tour = 0; tour < TOURS_LIMIT; tour++) {
      for (let sec = 0; sec < 10; sec++) {
        this.creatures.forEach(atbCreature => atbCreature.tick())
        let creaturesToMoveNow = this.creatures
          .filter(atbCreature => atbCreature.curATB >= 100 && atbCreature.creature.isAlive)
          .sort((a, b) => {
            console.log(`first = ${a.toLogStr(true)}, second = ${b.toLogStr(true)}`)
            // todo think about how solve problem when the atb is equal
            return b.curATB - a.curATB
          })
        this.creatures.forEach(atbCreature => atbCreature.afterMove())
        moveLineArr = moveLineArr.concat(creaturesToMoveNow)
        // console.log('creatures to move after tick')
        // console.log(creaturesToMoveNow.map(atbCreature => atbCreature.creature.name))
      }
    }
    return moveLineArr
  }
}
