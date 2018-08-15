import MovePath from '@/classes/MovePath'
import Board from '@/classes/Board'
import Point from '@/classes/Point'

describe('MovePath', () => {
  it('should find path without obstacles', () => {
    let board = new Board(6, 6)
    let movePath = new MovePath(board.toNumArr(), new Point(0, 0), new Point(4, 2))
    expect(movePath.calculate()).toEqual(
      [
        new Point(4, 2),
        new Point(3, 2),
        new Point(2, 2),
        new Point(1, 2),
        new Point(0, 2),
        new Point(0, 1)
      ]
    )
  })
})
