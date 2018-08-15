import Point from './Point'
// calculate the move path between 2 dos on the map
// this step should ALWAYS return path, because this is called after AvailableMoves calculations
export default class MovePath {
  constructor(cellNumArr, startPoint, endPoint) {
    this.cellNumArr = cellNumArr
    this.startPoint = startPoint
    this.endPoint = endPoint
    // todo take into account isLarge, isFly
  }

  // https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC_%D0%9B%D0%B8
  calculate() {
    // let self = this
    let arr = this._transformArr()
    let arrHeight = arr.length
    let arrWidth = arr[0].length
    let idx = 0
    let totalSize = arrHeight * arrWidth
    let indicator = 1
    arr[this.startPoint.y][this.startPoint.x] = indicator
    do {
      idx++
      for (let j = 0; j < arrHeight; j++) {
        for (let i = 0; i < arrWidth; i++) {
          if (arr[j][i] === indicator) {
            let nextIndicator = indicator + 1
            if (i - 1 >= 0 && arr[j][i - 1] === 0) {
              arr[j][i - 1] = nextIndicator
            }
            if (j - 1 >= 0 && arr[j - 1][i] === 0) {
              arr[j - 1][i] = nextIndicator
            }
            if (i + 1 < arrWidth && arr[j][i + 1] === 0) {
              arr[j][i + 1] = nextIndicator
            }
            if (j + 1 < arrHeight && arr[j + 1][i] === 0) {
              arr[j + 1][i] = nextIndicator
            }
            // diagonally. left up
            if (i - 1 >= 0 && j - 1 >= 0 && arr[j - 1][i - 1] === 0) {
              arr[j - 1][i - 1] = nextIndicator
            }
            // diagonally. right up
            if (i + 1 < arrWidth && j - 1 >= 0 && arr[j - 1][i + 1] === 0) {
              arr[j - 1][i + 1] = nextIndicator
            }
            // diagonally. left down
            if (i - 1 >= 0 && j + 1 < arrHeight && arr[j + 1][i - 1] === 0) {
              arr[j + 1][i - 1] = nextIndicator
            }
            // diagonally. right down
            if (i + 1 < arrWidth && j + 1 < arrHeight && arr[j + 1][i + 1] === 0) {
              arr[j + 1][i + 1] = nextIndicator
            }
          }
        }
      }
      indicator++
    } while (arr[this.endPoint.y][this.endPoint.x] <= 0 && idx < totalSize)

    console.log(arr)

    if (arr[this.endPoint.y][this.endPoint.x] > 0) {
      let pathArr = []
      this._recurFindPath(arr, this.endPoint.x, this.endPoint.y, pathArr)
      return pathArr
    }
    return []
  }

  // simplify the array to "0" and "-1" values
  // "0" - means cell can be accessed
  // "-1" - means it can not be accessed (no mater what, creature or obstacle or other stuff)
  _transformArr() {
    let self = this
    let arrHeight = this.cellNumArr.length
    let arr = new Array(arrHeight)
    for (let j = 0; j < arrHeight; j++) {
      arr[j] = self.cellNumArr[j].map(num => num > 0 ? -1 : 0)
    }
    return arr
  }

  _recurFindPath(arr, curX, curY, pathArr) {
    if (this.startPoint.x === curX && this.startPoint.y === curY) {
      return
    }
    pathArr.push(new Point(curX, curY))
    let targetNum = arr[curY][curX] - 1
    // left
    if (curX - 1 >= 0 && arr[curY][curX - 1] === targetNum) {
      return this._recurFindPath(arr, curX - 1, curY, pathArr)
    }
    // up
    if (curY - 1 >= 0 && arr[curY - 1][curX] === targetNum) {
      return this._recurFindPath(arr, curX, curY - 1, pathArr)
    }
    // right
    if (curX + 1 < arr[0].length && arr[curY][curX + 1] === targetNum) {
      return this._recurFindPath(arr, curX + 1, curY, pathArr)
    }
    // down
    if (curY + 1 < arr.length && arr[curY + 1][curX] === targetNum) {
      return this._recurFindPath(arr, curX, curY + 1, pathArr)
    }
    // diagonally. left up
    if (curX - 1 >= 0 && curY - 1 >= 0 && arr[curY - 1][curX - 1] === targetNum) {
      return this._recurFindPath(arr, curX - 1, curY - 1, pathArr)
    }
    // diagonally. right up
    if (curX + 1 < arr[0].length && curY - 1 >= 0 && arr[curY - 1][curX + 1] === targetNum) {
      return this._recurFindPath(arr, curX + 1, curY - 1, pathArr)
    }
    // diagonally. left down
    if (curX - 1 >= 0 && curY + 1 < arr.length && arr[curY + 1][curX - 1] === targetNum) {
      return this._recurFindPath(arr, curX - 1, curY + 1, pathArr)
    }
    // diagonally. right down
    if (curX + 1 < arr[0].length && curY + 1 < arr.length && arr[curY + 1][curX + 1] === targetNum) {
      return this._recurFindPath(arr, curX + 1, curY + 1, pathArr)
    }
  }
}
