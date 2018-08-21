import CellCoordinates from '@/classes/CellCoordinates'
import Point from '@/classes/Point'

describe('CellCoordinates', () => {
  /** fig.1
   *    -----------
   *  /          /
   * -----------
   */
  it('should create instance correct when it is fig.1', () => {
    const tlp = new Point(10, 10)
    const trp = new Point(100, 10)
    const blp = new Point(0, 100)
    const brp = new Point(90, 100)
    const cellCoordinates = new CellCoordinates(tlp, trp, blp, brp)
    expect(cellCoordinates.centerPoint.x).toBe(50)
    expect(cellCoordinates.centerPoint.y).toBe(55)
  })
  /** fig.2
   *  -----------
   *  |         |
   *  -----------
   */
  it('should create instance correct when it is fig.2', () => {
    const tlp = new Point(0, 40)
    const trp = new Point(120, 40)
    const blp = new Point(0, 70)
    const brp = new Point(120, 70)
    const cellCoordinates = new CellCoordinates(tlp, trp, blp, brp)
    expect(cellCoordinates.centerPoint.x).toBe(60)
    expect(cellCoordinates.centerPoint.y).toBe(55)
  })
  /** fig.3
   *    -----------
   *    \          \
   *     -----------
   */
  it('should create instance correct when it is fig.3', () => {
    const tlp = new Point(0, 20)
    const trp = new Point(80, 20)
    const blp = new Point(20, 110)
    const brp = new Point(120, 110)
    const cellCoordinates = new CellCoordinates(tlp, trp, blp, brp)
    expect(cellCoordinates.centerPoint.x).toBe(60)
    expect(cellCoordinates.centerPoint.y).toBe(65)
  })

  it('should not create center point if not all points are presented', () => {
    const tlp = new Point(0, 0)
    const trp = new Point(80, 0)
    const blp = new Point(20, 110)
    const cellCoordinates = new CellCoordinates(tlp, trp, blp, null)
    expect(cellCoordinates.centerPoint.x).toBe(-1)
    expect(cellCoordinates.centerPoint.y).toBe(-1)
  })
})
