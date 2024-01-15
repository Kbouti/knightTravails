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

    if (xCoordinate < 7 && yCoordinate < 6) {
      let move1 = [xCoordinate + 1, yCoordinate + 2];
      possibleMoves.push(move1);
    }
    if (xCoordinate < 6 && yCoordinate < 7) {
      let move2 = [xCoordinate + 2, yCoordinate + 1];
      possibleMoves.push(move2);
    }
    if (xCoordinate < 6 && yCoordinate > 0) {
      let move3 = [xCoordinate + 2, yCoordinate - 1];
      possibleMoves.push(move3);
    }
    if (xCoordinate < 7 && yCoordinate > 1) {
      let move4 = [xCoordinate + 1, yCoordinate - 2];
      possibleMoves.push(move4);
    }
    if (xCoordinate > 0 && yCoordinate > 1) {
      let move5 = [xCoordinate - 1, yCoordinate - 2];
      possibleMoves.push(move5);
    }
    if (xCoordinate > 1 && yCoordinate > 0) {
      let move6 = [xCoordinate - 2, yCoordinate - 1];
      possibleMoves.push(move6);
    }
    if (xCoordinate > 1 && yCoordinate < 7) {
      let move7 = [xCoordinate - 2, yCoordinate + 1];
      possibleMoves.push(move7);
    }
    if (xCoordinate > 0 && yCoordinate < 6) {
      let move8 = [xCoordinate - 1, yCoordinate + 2];
      possibleMoves.push(move8);
    }

    return possibleMoves;
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
      board.push(new Square(x, y));
      if (y < 8) {
        y++;
      }
      if (y == 8) {
        x++;
        y = 0;
      }
    }
    return board;
  }

  knightMoves(startPosition, endPosition) {
    // Takes two arrays as arguments
    // Each array is 2 numbers, the xCoordiante and the yCoordinate
  }
}

let board1 = new Board();

let testNode = board1.contents[58];

console.log(testNode);
console.log(testNode.findPossibleMoves());
