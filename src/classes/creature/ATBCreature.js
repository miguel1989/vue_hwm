import Creature from './Creature'

export default class ATBCreature extends Creature {
  constructor(speed, initiative, startATB = -1) { // default startATB is for testing purposes
    super(speed, initiative)
    if (startATB === -1) {
      this.curATB = Math.floor(Math.random() * 11)
    } else {
      this.curATB = startATB
    }
  }

  atbTick() {
    this.curATB += this.initiative
  }

  atbAfterMove() {
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
    let str = super.toLogStr()
    if (withATB) {
      str += ` curATB=${this.curATB}`
    }
    return str
  }
}
