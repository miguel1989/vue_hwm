const SEC_IN_TOUR = 10
export default class ATBSimulation {
  constructor(atbCreatureArr) {
    // creating a deep clone for each instance
    this.creatures = atbCreatureArr.map(
      atbCreatureOriginal => Object.assign(Object.create(atbCreatureOriginal), atbCreatureOriginal)
    )
  }

  run(toursToSimulate = 10) {
    let moveLineArr = []
    for (let tour = 0; tour < toursToSimulate; tour++) {
      for (let sec = 0; sec < SEC_IN_TOUR; sec++) {
        this.creatures.forEach(atbCreature => atbCreature.atbTick())
        let creaturesToMoveNow = this.creatures
          .filter(atbCreature => atbCreature.curATB >= 100 && atbCreature.isAlive)
          .sort((a, b) => {
            console.log(`first = ${a.toLogStr(true)}, second = ${b.toLogStr(true)}`)
            // todo think about how solve problem when the atb is equal
            return b.curATB - a.curATB
          })
        this.creatures.forEach(atbCreature => atbCreature.atbAfterMove())
        moveLineArr = moveLineArr.concat(creaturesToMoveNow)
        // console.log('creatures to move after tick')
        // console.log(creaturesToMoveNow.map(atbCreature => atbCreature.creature.name))
      }
    }
    return moveLineArr
  }
}
