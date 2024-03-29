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

function compareFunction(a, b) {
  if (a.weight > b.weight) {
    return -1;
  }
  return 1;
}

class Square {
  constructor(index, xCoordinate, yCoordinate) {
    this.index = index;
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    this.board;
    // this.possibleMoves = this.findPossibleMoves();
    this.weight = null;
  }

  populateWeight(weight) {
    if (this.weight === weight) {
      // console.log(`called function on an already edited weight`);
      let possibleMoves = this.findPossibleMoves();
      for (let i = 0; i < possibleMoves.length; i++) {
        let thisNode = this.board.findSquare(
          possibleMoves[i][0],
          possibleMoves[i][1]
        );
        if (thisNode.weight === null) {
          thisNode.weight = weight - 1;
        }
      }
      for (let i = 0; i < possibleMoves.length; i++) {
        let thisNode = this.board.findSquare(
          possibleMoves[i][0],
          possibleMoves[i][1]
        );
        thisNode.populateWeight(weight - 1);
      }
    }

    if (this.weight === null) {
      this.weight = weight;
      let possibleMoves = this.findPossibleMoves();
      // Accurate so far
      for (let i = 0; i < possibleMoves.length; i++) {
        let thisNode = this.board.findSquare(
          possibleMoves[i][0],
          possibleMoves[i][1]
        );
        if (thisNode.weight === null) {
          thisNode.weight = weight - 1;
        }
      }

      for (let i = 0; i < possibleMoves.length; i++) {
        let thisNode = this.board.findSquare(
          possibleMoves[i][0],
          possibleMoves[i][1]
        );
        thisNode.populateWeight(weight - 1);
      }
    }

    return;
  }

  logMovesWithWeights() {
    let possibleMoves = this.findPossibleMoves();
    for (let i = 0; i < possibleMoves.length; i++) {
      let currentNode = this.board.findSquare(
        possibleMoves[i][0],
        possibleMoves[i][1]
      );
      console.log(
        `possibleMove[${i}]: [${currentNode.xCoordinate},${currentNode.yCoordinate}] weight: ${currentNode.weight}`
      );
    }
  }

  // Outputs an array of each node that can be visited from this one. Same as below but outputs objects not coordinates
  findPossibleSquares() {
    // returns an array containing square objects
    let xCoordinate = this.xCoordinate;
    let yCoordinate = this.yCoordinate;
    let possibleMoves = [];
    if (xCoordinate < 7 && yCoordinate < 6) {
      //   let move1 = [xCoordinate + 1, yCoordinate + 2];
      let move1 = this.board.findSquare(xCoordinate + 1, yCoordinate + 2);

      possibleMoves.push(move1);
    }
    if (xCoordinate < 6 && yCoordinate < 7) {
      let move2 = this.board.findSquare(xCoordinate + 2, yCoordinate + 1);
      possibleMoves.push(move2);
    }
    if (xCoordinate < 6 && yCoordinate > 0) {
      let move3 = this.board.findSquare(xCoordinate + 2, yCoordinate - 1);
      possibleMoves.push(move3);
    }
    if (xCoordinate < 7 && yCoordinate > 1) {
      let move4 = this.board.findSquare(xCoordinate + 1, yCoordinate - 2);
      possibleMoves.push(move4);
    }
    if (xCoordinate > 0 && yCoordinate > 1) {
      let move5 = this.board.findSquare(xCoordinate - 1, yCoordinate - 2);
      possibleMoves.push(move5);
    }
    if (xCoordinate > 1 && yCoordinate > 0) {
      let move6 = this.board.findSquare(xCoordinate - 2, yCoordinate - 1);
      possibleMoves.push(move6);
    }
    if (xCoordinate > 1 && yCoordinate < 7) {
      let move7 = this.board.findSquare(xCoordinate - 2, yCoordinate + 1);
      possibleMoves.push(move7);
    }
    if (xCoordinate > 0 && yCoordinate < 6) {
      let move8 = this.board.findSquare(xCoordinate - 1, yCoordinate + 2);
      possibleMoves.push(move8);
    }
    return possibleMoves;
  }

  // Can probably get rid of this function and substitute the one above^ This does the same  but outputs x and y cooridnates
  findPossibleMoves() {
    // Returns an array containing x and y cooridnates
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

    for (let i = 0; i < 64; i++) {
      let square = board[i];
      square.board = this;
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

  resetWeights() {
    let contents = this.contents;
    for (let i = 0; i < contents.length; i++) {
      contents[i].weight = null;
    }
  }

  knightMoves(startPosition, endPosition) {
    // Takes two arrays as arguments. Each array is 2 numbers, the xCoordiante and the yCoordinate
    let startingX = startPosition[0];
    let startingY = startPosition[1];
    let endingX = endPosition[0];
    let endingY = endPosition[1];
    console.log(
      `searching for path between [${startingX}, ${startingY}] and [${endingX},${endingY}]`
    );
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
    targetNode.populateWeight(100);
    let oneMoveAway = currentNode.canWeMoveHere(endPosition);
    let withinReach;
    if (oneMoveAway) {
      withinReach = true;
    } else {
      withinReach = false;
    }
    while (!withinReach) {
      let possibleSquares = currentNode.findPossibleSquares();
      possibleSquares = possibleSquares.sort(compareFunction);
      currentNode = possibleSquares[0];
      movesCount++;
      moves.push([currentNode.xCoordinate, currentNode.yCoordinate]);
      if (currentNode.canWeMoveHere(endPosition)) {
        withinReach = true;
      }
    }
    movesCount++;
    moves.push([endingX, endingY]);
    logCount(movesCount);
    logMoves(moves);
    this.resetWeights();
    return;
  }
}


// ********************************************************************************************
// Testing Below:
let board1 = new Board();
let testNode = board1.contents[58];

// board1.knightMoves([0, 0], [0, 0]);
// board1.knightMoves([0, 0], [1, 2]);
// board1.knightMoves([0, 0], [3, 3]);

// board1.knightMoves([0, 0], [3, 7]);
// board1.knightMoves([3, 4], [0, 0]);
// board1.knightMoves([0, 0], [4, 1]);
board1.knightMoves([3, 3], [4, 3]);

// board1.knightMoves([0, 0], [7, 7]);
board1.knightMoves([7, 7], [0, 0]);

// Their answer to the above is different from mine but it's the same number of steps:
//  [[0,0],[2,1],[4,2],[6,3],[4,4],[6,5],[7,7]]
//  [[0,0],[2,1],[4,2],[6,3],[7,5],[5,6],[7,7]]