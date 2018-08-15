import MovePath from '@/classes/MovePath'
import Board from '@/classes/Board'
import Point from '@/classes/Point'

describe('MovePath', () => {
  it('should find path without obstacles from left top corner', () => {
    let board = new Board(6, 6)
    let movePath = new MovePath(board.toNumArr(), new Point(0, 0), new Point(4, 2))
    expect(movePath.calculate()).toEqual(
      [
        new Point(4, 2),
        new Point(3, 2),
        new Point(2, 2),
        new Point(1, 1)
      ]
    )
  })
  it('should find path without obstacles from bottom left corner', () => {
    let board = new Board(6, 6)
    let movePath = new MovePath(board.toNumArr(), new Point(0, 5), new Point(4, 2))
    expect(movePath.calculate()).toEqual(
      [
        new Point(4, 2),
        new Point(3, 2),
        new Point(2, 3),
        new Point(1, 4)
      ]
    )
  })
  it('should find path without obstacles from bottom right corner', () => {
    let board = new Board(6, 6)
    let movePath = new MovePath(board.toNumArr(), new Point(5, 5), new Point(1, 3))
    expect(movePath.calculate()).toEqual(
      [
        new Point(1, 3),
        new Point(2, 3),
        new Point(3, 3),
        new Point(4, 4)
      ]
    )
  })
  it('should find path without obstacles from top right corner', () => {
    let board = new Board(6, 6)
    let movePath = new MovePath(board.toNumArr(), new Point(5, 0), new Point(1, 3))
    expect(movePath.calculate()).toEqual(
      [
        new Point(1, 3),
        new Point(2, 3),
        new Point(3, 2),
        new Point(4, 1)
      ]
    )
  })
})
