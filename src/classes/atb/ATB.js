export default class ATB {
  constructor() {
    this.creatures = []
    this.curSec = 0
    this.curTour = 0
  }

  addCreature(atbCreature) {
    this.creatures.push(atbCreature)
    return this
  }

  start() {
    this.curSec = 0
    this.curTour = 0
    this.tick()
  }

  tick() {
    // todo checks that game is ended
    let creaturesToRun = this.creatures.forEach(atbCreature => atbCreature.canRunOnATB())
    creaturesToRun.forEach(atbCreature => atbCreature.atbTick())
    let creaturesToMoveNow = creaturesToRun
      .filter(atbCreature => atbCreature.curATB >= 100)
      .sort((a, b) => {
        // console.log(`first = ${a.toLogStr(true)}, second = ${b.toLogStr(true)}`)
        // todo think about how solve problem when the atb is equal
        return b.curATB - a.curATB
      })
  }

  // while (game is not ended do
  //   make a tick
  //   if (a creature is ready to do move)
  //     creature.doMove() or attack or def or wait
  //     creature.afterMove that will update curATB
  //     run simulation again
}
