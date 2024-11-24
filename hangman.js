const readline = require('readline');

// Function to determine the winner of the game
function determineWinner(board1, board2, shots) {
    let shipsLeft1 = countShips(board1);
    let shipsLeft2 = countShips(board2);

    // Simulate shots
    for (let [x, y] of shots) {
        if (board1[y][x] === '#') {
            board1[y][x] = '_'; // Mark hit on player one's board
            shipsLeft1--;
            if (shipsLeft1 === 0) return 'player two wins';
        } else if (board2[y][x] === '#') {
            board2[y][x] = '_'; // Mark hit on player two's board
            shipsLeft2--;
            if (shipsLeft2 === 0) return 'player one wins';
        }
    }

    // If both players' ships are sunk or shots are exhausted, it's a draw
    return 'draw';
}

// Function to count the remaining ships on the board
function countShips(board) {
    let count = 0;
    for (let row of board) {
        for (let cell of row) {
            if (cell === '#') count++;
        }
    }
    return count;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let testCases;
let currentTestCase = 0;

rl.on('line', (line) => {
    if (!testCases) {
        testCases = parseInt(line);
    } else {
        currentTestCase++;
        const [width, height, shots] = line.split(' ').map(Number);
        let board1 = [];
        let board2 = [];

        // Read player one's deployment map
        for (let i = 0; i < height; i++) {
            board1.push(rl.question().split(''));
        }

        // Read player two's deployment map
        for (let i = 0; i < height; i++) {
            board2.push(rl.question().split(''));
        }

        let shotOrders = [];
        // Read shot orders
        for (let i = 0; i < shots; i++) {
            shotOrders.push(rl.question().split(' ').map(Number));
        }

        const result = determineWinner(board1, board2, shotOrders);
        console.log(result);

        // Check if all test cases are processed
        if (currentTestCase === testCases) {
            rl.close();
        }
    }
});