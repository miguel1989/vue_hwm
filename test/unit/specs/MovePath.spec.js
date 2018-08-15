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
  it('should not find path', () => {
    let board = new Board(6, 6)
    board.cell(1, 0).makeAsObstacle()
    board.cell(1, 1).makeAsObstacle()
    board.cell(1, 2).makeAsObstacle()
    board.cell(1, 3).makeAsObstacle()
    board.cell(1, 4).makeAsObstacle()
    board.cell(1, 5).makeAsObstacle()
    let movePath = new MovePath(board.toNumArr(), new Point(0, 0), new Point(4, 4))
    expect(movePath.calculate()).toEqual([])
  })
  it('should find path zig-zag', () => {
    let board = new Board(6, 6)
    board.cell(1, 0).makeAsObstacle()
    board.cell(1, 1).makeAsObstacle()
    board.cell(1, 2).makeAsObstacle()
    board.cell(1, 3).makeAsObstacle()
    board.cell(1, 4).makeAsObstacle()

    board.cell(3, 5).makeAsObstacle()
    board.cell(3, 4).makeAsObstacle()
    board.cell(3, 3).makeAsObstacle()
    board.cell(3, 2).makeAsObstacle()
    board.cell(3, 1).makeAsObstacle()
    let movePath = new MovePath(board.toNumArr(), new Point(0, 0), new Point(4, 4))
    expect(movePath.calculate()).toEqual(
      [
        new Point(4, 4),
        new Point(4, 3),
        new Point(4, 2),
        new Point(4, 1),
        new Point(3, 0),
        new Point(2, 1),
        new Point(2, 2),
        new Point(2, 3),
        new Point(2, 4),
        new Point(1, 5),
        new Point(0, 4),
        new Point(0, 3),
        new Point(0, 2),
        new Point(0, 1)
      ]
    )
  })
})
