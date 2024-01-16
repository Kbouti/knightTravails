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

  // Need a clearAllWeights function - but that might be on the board class

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

  findBestMove() {
    let possibleMoves = this.findPossibleSquares();
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

    // ********************************************************************************************
    // If Start and end are same, return 0 moves

    if (startingX === endingX && startingY === endingY) {
      console.log(`Start and end are the same square`);
      logCount(movesCount);
      logMoves(moves);
      return;
    }

    // ********************************************************************************************
    // Else increment movesCount and check if one of our moves is targetNode
    let oneMoveAway = currentNode.canWeMoveHere(endPosition);
    // ********************************************************************************************
    // If one of our nodes is targetNode, move there and be done
    if (oneMoveAway) {
      console.log(`one move away`);
      movesCount++;
      moves.push([endingX, endingY]);
      logCount(movesCount);
      logMoves(moves);
      return;
    }
    // ********************************************************************************************
    // Create weights based on distance to targetNode
    targetNode.populateWeight(100);
    // ********************************************************************************************
    // While possibleMoves does not contain targetNode
    // sort possibleMoves
    // currentNode = node W/ highest weight

    // while (!oneMoveAway) {
    let possibleSquares = currentNode.findPossibleSquares();
    possibleSquares = possibleSquares.sort(compareFunction);


    currentNode = possibleSquares[0];
    movesCount++;
    moves.push([currentNode.xCoordinate, currentNode.yCoordinate]);
    //   logCount(movesCount);
    //   logMoves(moves);
    let foundIt = false;
    while (foundIt == false) {
      let nextOptions = currentNode.findPossibleSquares();
      if (currentNode.canWeMoveHere(endPosition)) {
        movesCount++;
        moves.push([endingX, endingY]);
        logCount(movesCount);
        logMoves(moves);
        foundIt = true;
        return;
      }
      currentNode = nextOptions.sort(compareFunction)[0];
    }

    return;
  }
}

// ********************************************************************************************
// Testing Below:
console.log(`start testing`);
let board1 = new Board();
let testNode = board1.contents[58];

// board1.knightMoves([0, 0], [0, 0]);
// board1.knightMoves([0, 0], [1, 2]);
// board1.knightMoves([0, 0], [3, 3]);

// board1.knightMoves([0, 0], [3, 7]);
// board1.knightMoves([3, 4], [0, 0]);
board1.knightMoves([0, 0], [4, 1]);

// board1.knightMoves([0, 0], [7, 7]);
