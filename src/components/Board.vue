<template>
  <section
    ref="wrapper"
    class="canvas_wrap">
    <canvas
      id="board_canvas"
      ref="canvas"
      width="100"
      height="100"/>
  </section>
</template>
<script>
  import Board from '../classes/Board'
  import Point from '../classes/Point'

  const HORIZONTAL_MARGIN = 300
  const VERTICAL_MARGIN = 40

  export default {
    name: 'Board',
    data() {
      return {
        ctx: null,
        width: 100,
        height: 100,
        board: new Board(10, 10),
        cellPxWidth: 10,
        cellPxHeight: 10,
        points: []
      }
    },
    computed: {},
    mounted() {
      this.resizeCanvas()
      this.ctx = this.$refs.canvas.getContext('2d')
      this.calcBoardPoints()
      this.convertPointsToCellCoordinates()
      this.renderBoardLines()
      this.renderBoardPoints()
    },
    methods: {
      resizeCanvas() {
        this.width = this.$refs.wrapper.offsetWidth
        this.height = this.$refs.wrapper.offsetHeight
        this.$refs.canvas.width = this.width
        this.$refs.canvas.height = this.height
        let tmpPxWidth = this.width - (HORIZONTAL_MARGIN * 2)
        let tmpPxHeight = this.height - (VERTICAL_MARGIN * 2)
        this.cellPxWidth = tmpPxWidth / this.board.width
        this.cellPxHeight = tmpPxHeight / this.board.height
        console.log(`canvas.width = ${this.$refs.canvas.width} canvas.height = ${this.$refs.canvas.height}`)
        console.log(`cellPxWidth = ${this.cellPxWidth} cellPxHeight = ${this.cellPxHeight}`)
      },
      calcBoardPoints() {
        const yCoef = this.cellPxHeight / 2
        // adding +1 to width and height to render additional point
        const drawBoardHeight = this.board.height + 1
        const drawBoardWidth = this.board.width + 1
        const points = new Array(drawBoardHeight)
        for (let j = 0; j < drawBoardHeight; j++) {
          points[j] = []
          const yCoefStep = (yCoef * j * 2) / (this.board.width)
          let tmpYCoef = yCoef * j * -1
          for (let i = 0; i < drawBoardWidth; i++) {
            let x = i * this.cellPxWidth + HORIZONTAL_MARGIN
            x = x + tmpYCoef
            tmpYCoef += yCoefStep
            let y = j * this.cellPxHeight + VERTICAL_MARGIN
            points[j].push(new Point(x, y))
          }
        }
        console.log(points)
        this.points = points
      },
      convertPointsToCellCoordinates() {
        for (let j = 0; j < this.points.length - 1; j++) {
          for (let i = 0; i < this.points[0].length - 1; i++) {
            let tlp = this.points[j][i]
            let trp = this.points[j][i + 1]
            let blp = this.points[j + 1][i]
            let brp = this.points[j + 1][i + 1]
            this.board.cell(i, j).addCellCoordinates(tlp, trp, blp, brp)
          }
        }
      },
      renderBoardPoints() {
        for (let j = 0; j < this.board.height; j++) {
          for (let i = 0; i < this.board.width; i++) {
            let cellCoord = this.board.cell(i, j).cellCoordinates
            this.drawPoint(cellCoord.topLeftPoint.x, cellCoord.topLeftPoint.y)
            this.drawPoint(cellCoord.topRightPoint.x, cellCoord.topRightPoint.y)
            this.drawPoint(cellCoord.bottomLeftPoint.x, cellCoord.bottomLeftPoint.y)
            this.drawPoint(cellCoord.bottomRightPoint.x, cellCoord.bottomRightPoint.y)
            this.drawPoint(cellCoord.centerPoint.x, cellCoord.centerPoint.y, 2, '#0f0')
          }
        }
      },
      renderBoardLines() {
        let lastHorIndex = this.points[0].length - 1
        let lastVerIndex = this.points.length - 1
        for (let j = 0; j < this.points.length; j++) {
          this.ctx.strokeStyle = '#00f'
          this.ctx.beginPath()
          let leftPoint = this.points[j][0]
          let rightPoint = this.points[j][lastHorIndex]
          this.ctx.moveTo(leftPoint.x, leftPoint.y)
          this.ctx.lineTo(rightPoint.x, rightPoint.y)
          this.ctx.stroke()
          this.ctx.closePath()
        }
        for (let i = 0; i < this.points[0].length; i++) {
          this.ctx.strokeStyle = '#00f'
          this.ctx.beginPath()
          let topPoint = this.points[0][i]
          let bottomPoint = this.points[lastVerIndex][i]
          this.ctx.moveTo(topPoint.x, topPoint.y)
          this.ctx.lineTo(bottomPoint.x, bottomPoint.y)
          this.ctx.stroke()
          this.ctx.closePath()
        }
      },
      drawPoint(x, y, r = 2, color = '#f00') {
        this.ctx.beginPath()
        this.ctx.fillStyle = color
        this.ctx.arc(x, y, r, 0, 2 * Math.PI)
        // this.ctx.stroke()
        this.ctx.fill()
        this.ctx.closePath()
      }
    }
  }
</script>
<style>
  .canvas_wrap {
    height: 100%;
    border: 1px solid red;
  }
</style>
