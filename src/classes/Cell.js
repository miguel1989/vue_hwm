import {OBSTACLE_NUM, CREATURE_NUM, EMPTY_NUM} from '../constants'

export default class Cell {
  constructor() {
    this._creatures = []
    this._isObstacle = false
  }

  toNum() {
    if (this._isObstacle) {
      return OBSTACLE_NUM
    }
    let aliveCreatures = this._creatures.filter(creature => creature.isAlive)
    let hasAliveCreatures = aliveCreatures.length > 0
    return hasAliveCreatures ? CREATURE_NUM : EMPTY_NUM
  }

  addCreature(creature) {
    this._creatures.push(creature)
  }

  removeCreature(creatureUUID) {
    let idx = this._creatures.findIndex(creature => {
      return creature.uuid === creatureUUID
    })
    if (idx >= 0) {
      this._creatures.splice(idx, 1)
    }
  }

  // empty cell can only be converted to an obstacle
  makeAsObstacle() {
    this._isObstacle = true
  }
}
