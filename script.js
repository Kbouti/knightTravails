function logCount(count) {
  console.log(`# of moves: ${count}`);
}

function logMoves(array) {
  let string = `moves: `;
  string += `[${array[0][0]},${array[0][1]}]`;
  for (let i = 1; i < array.length; i++) {
    string += ` -> [${array[i][0]},${array[i][1]}] `;
  }
  console.log(string);
}

class Square {
  constructor(index, xCoordinate, yCoordinate) {
    this.index = index;
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    this.possibleMoves = this.findPossibleMoves();
    this.weight = null;
  }

  generateAllWeights() {
    // This method is called on a square node, so it will take a weight of 100, everything it touches will get a weight of 99, everything touching one of those that isn' already weighted gets a 98 and so on
    this.weight = 100;
    let possibleMoves = this.possibleMoves;
    console.log(possibleMoves);

    for (let i = 0; i < possibleMoves; i++){

    }

  }

  generateThisWeight(previousWeight) {}

  // Need a clearAllWeights function - but that might be on the board class

  findPossibleMoves() {
    let xCoordinate = this.xCoordinate;
    let yCoordinate = this.yCoordinate;
    let possibleMoves = [];
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

  canWeMoveHere(targetPosition) {
    // Returns true if targetPosition is among possible moves
    let canWeMove = false;
    let possibleMoves = this.findPossibleMoves();
    for (let i = 0; i < possibleMoves.length; i++) {
      let square = possibleMoves[i];
      if (square[0] == targetPosition[0] && square[1] == targetPosition[1]) {
        canWeMove = true;
        return canWeMove;
      }
    }
    return canWeMove;
  }

  async pathToTarget(targetPosition) {
    //I think we need an async function to call here on the square so can ask for several possible paths and compare to find the shortest
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
    let targetNode = this.findSquare(endingX, endingY);
    let movesCount = 0;
    let moves = [[startingX, startingY]];

    if (startingX === endingX && startingY === endingY) {
      console.log(`Start and end are the same square`);
      logCount(movesCount);
      logMoves(moves);
      return;
    }

    movesCount++;
    let oneMoveAway = currentNode.canWeMoveHere(endPosition);

    if (oneMoveAway) {
      moves.push([endingX, endingY]);
      logCount(movesCount);
      logMoves(moves);
      return;
    }

    targetNode.generateAllWeights();
    // while (oneMoveAway == false) {
    //   let possibleMoves = currentNode.findPossibleMoves();
    //   for (let i = 0; i < possibleMoves.length; i++) {
    //     currentNode = this.findSquare(possibleMoves[i][0], possibleMoves[i][1]);
    //     movesCount++;
    //     moves.push([possibleMoves[i][0], possibleMoves[i][1]]);

    //     if (currentNode.canWeMoveHere(endPosition)) {
    //       oneMoveAway = true;
    //       moves.push(endPosition);
    //       logCount(movesCount);
    //       logMoves(moves);
    //       return;
    //     }
    //   }
    // }
    // logCount(movesCount);
    // logMoves(moves);
    // return moves;
    return
  }
}

// ********************************************************************************************
// Testing Below:

let board1 = new Board();
let testNode = board1.contents[58];

// board1.knightMoves([0, 0], [0, 0]);
// board1.knightMoves([0, 0], [1, 2]);
// board1.knightMoves([0, 0], [3, 3]);

// ********************************************************************************************
board1.knightMoves([0, 0], [3, 4]);
// Absolutely not working. The answer to this is bogus^^^^

// board1.knightMoves([0,0], [7,7]);
// It can't do this one^^^
// Takes a while then nothing happens

// Bedtime thoughts:
// Take the target node and give it a score of 100
// Every node "touching" that gets a score of 99, every node touching one of those gets a 98, etc.
// Direct the piece to  move from currentNode to the nightest value node
