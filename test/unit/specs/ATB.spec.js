import Board from '@/classes/Board'
import ATB from '@/classes/ATB'
import Bowman from '@/classes/creatures/Bowman'
import Cow from '@/classes/creatures/Cow'
import Dancer from '@/classes/creatures/Dancer'
import Horse from '@/classes/creatures/Horse'

describe('ATB', () => {
  let board
  beforeEach(() => {
    board = new Board(8, 8)
  })

  it('should do something', () => {
    // todo
  })

  // it('should simulate simple 4 creatures', () => {
  //   let atb = new ATB()
  //   let bowman = new Bowman(board, 0, 0)
  //   let cow = new Cow(board, 0, 1)
  //   let dancer = new Dancer(board, 0, 2)
  //   let horse = new Horse(board, 0, 3)
  //   atb
  //     .addCreature(bowman, 0)
  //     .addCreature(cow, 0)
  //     .addCreature(dancer, 0)
  //     .addCreature(horse, 0)
  //
  //   let result = atb.simulate()
  //   console.log(result.map(atbCreature => atbCreature.toLogStr()))
  // })
})
