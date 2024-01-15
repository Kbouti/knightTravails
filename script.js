console.log(`Hello from knights`);

class Square {
  constructor(index, xCoordinate, yCoordinate) {
    this.index = index;
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
  }

  findPossibleMoves() {
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

  canWeMoveHere(x, y) {
    // Returns true if we can move from this spot to the given target spot in one move
    let canWeMove = false;
    let possibleMoves = this.findPossibleMoves();
    for (let i = 0; i < possibleMoves.length; i++) {
      let square = possibleMoves[i];
      if (square[0] == x && square[1] == y) {
        canWeMove = true;
        return canWeMove;
      }
    }
    return canWeMove;
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
      board.push(new Square(i, x, y));
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

  findSquare(x, y) {
    for (let i = 0; i < this.contents.length; i++) {
      if (
        this.contents[i].xCoordinate == x &&
        this.contents[i].yCoordinate == y
      ) {
        return this.contents[i];
      }
    }
  }

  knightMoves(startPosition, endPosition) {
    // Takes two arrays as arguments
    // Each array is 2 numbers, the xCoordiante and the yCoordinate


    let startingX = startPosition[0];
    let startingY = startPosition[1];
    let endingX = endPosition[0];
    let endingY = endPosition[1];


    let currentNode = this.findSquare(startingX, startingY);
// This might be the route to go if we wanna get recursive

    let movesCount = 0;
    let moves = [[startingX, startingY]];


    if (startingX === endingX && startingY === endingY) {
      console.log(`Start and end are the same square`);
      console.log(`movesCount: ${movesCount}`);
      console.log(`moves: ${moves}`);
      return moves;
    }

    console.log(
      `Getting possible moves for start position: [${startingX}, ${startingY}]`
    );
    console.log(`Target end position: [${endingX}, ${endingY}]`);

    let startingSquare = this.findSquare(startingX, startingY);
    let possibleFirstMoves = startingSquare.findPossibleMoves();
    console.log(possibleFirstMoves);

    let canWeMakeIt = startingSquare.canWeMoveHere(endingX, endingY);
    console.log(`Can we make it: ${canWeMakeIt}`);

        if (canWeMakeIt){
            moves.push([endingX, endingY]);
            movesCount++;
            return moves
        }



    // Maybe a while loop:
    // While current position !== endPosition:
    // moveCount ++
    // move.push(currentPosition)
    // nextmoves = nextMoves
  }
}

let board1 = new Board();

let testNode = board1.contents[58];

console.log(testNode);
console.log(testNode.findPossibleMoves());

console.log(board1.knightMoves([0, 0], [3, 3]));
