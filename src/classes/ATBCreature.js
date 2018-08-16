export default class ATBCreature {
  constructor(creature, startATB = -1) {
    // this.uuid = Math.random().toString(16).slice(2)
    this.creature = creature
    this.initiative = creature.initiative
    if (startATB === -1) {
      this.curATB = Math.floor(Math.random() * 11)
    } else {
      this.curATB = startATB
    }
  }

  tick() {
    this.curATB += this.initiative
  }

  afterMove() {
    if (this.curATB >= 100) {
      this.curATB -= 100
    }
  }

  afterDefence() {
    this.curATB -= 100
  }

  afterWait() {
    this.curATB -= 50
  }

  afterBD() {
    this.curATB -= 50
  }

  negativeBD() {
    this.curATB -= 50
  }

  toLogStr(withATB = false) {
    let str = `${this.creature.name}(${this.creature.initiative})`
    if (withATB) {
      str += ` curATB=${this.curATB}`
    }
    return str
  }
}
