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
    this.curATB = this._roundNumber(this.curATB, 2)
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

  _roundNumber(num, scale) {
    if (!('' + num).includes('e')) {
      return +(Math.round(num + 'e+' + scale) + 'e-' + scale)
    } else {
      let arr = ('' + num).split('e')
      let sig = ''
      if (+arr[1] + scale > 0) {
        sig = '+'
      }
      return +(Math.round(+arr[0] + 'e' + sig + (+arr[1] + scale)) + 'e-' + scale)
    }
  }
}
