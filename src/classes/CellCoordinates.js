import Point from './Point'

export default class CellCoordinates {
  constructor(tlp, trp, blp, brp) {
    this.topLeftPoint = tlp
    this.topRightPoint = trp
    this.bottomLeftPoint = blp
    this.bottomRightPoint = brp
    this.centerPoint = new Point()
    if (tlp && trp && blp && brp) {
      const tmpArr = [tlp, trp, blp, brp]
      const xPoints = tmpArr.map(point => point.x)
      const yPoints = tmpArr.map(point => point.y)
      let maxX = Math.max(...xPoints)
      let minX = Math.min(...xPoints)
      let maxY = Math.max(...yPoints)
      let minY = Math.min(...yPoints)
      this.centerPoint = new Point((maxX + minX) / 2, (maxY + minY) / 2)
    }
  }
}
