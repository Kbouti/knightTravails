console.log(`Hello from knights`);

class Square {
  constructor(xCoordinate, yCoordinate) {
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
  }

  findPossibleMoves() {
    // Write a function that outputs a list of all the possible squares a knight could move to from here

    let xCoordinate = this.xCoordinate;
    let yCoordinate = this.yCoordinate;
    let possibleMoves = [];

console.log(`finding moves for ${xCoordinate}, ${yCoordinate}`);

    // We have to take into account the edges of the board and return all possible moves from this space
// The first possible spot is up two, right 1
// Then right two up one
// then right two down one
// etc. Check if each of these are possible, if yes add it to the possibleMoves array and return it at the end



  }
}

class Board {
  constructor() {
    this.contents = this.createBoard();
  }

  createBoard() {
    let board = [];
    let x = 0;
    let y = 0;
    for (let i = 0; i < 64; i++) {
        board.push(new Square(x, y))
      if (y < 8) {
        y++;
      }
      if (y == 8) {
        x++;
        y = 0;
      }
    }
    return board
  }

  knightMoves(startPosition, endPosition) {
    // Takes two arrays as arguments
    // Each array is 2 numbers, the xCoordiante and the yCoordinate
  }
}


let board1 = new Board;

let testNode = board1.contents[0];

console.log(testNode)
testNode.findPossibleMoves();