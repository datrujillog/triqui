var board = ['', '', '', '', '', '', '', '', ''];
var currentPlayer = 'X';
var gameEnded = false;

function makeMove(index) {
    if (board[index] === '' && !gameEnded) {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].innerText = currentPlayer;
        checkWinner();
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    }
}

function checkWinner() {
    var winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
        [0, 4, 8], [2, 4, 6] // Diagonales
    ];

    for (var i = 0; i < winningCombos.length; i++) {
        var combo = winningCombos[i];
        var a = combo[0], b = combo[1], c = combo[2];

        if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
            announceWinner(board[a]);
            return;
        }
    }

    if (!board.includes('')) {
        announceDraw();
    }
}

function announceWinner(player) {
    gameEnded = true;
    alert('¡El jugador ' + player + ' ha ganado!');
}

function announceDraw() {
    gameEnded = true;
    alert('¡Empate!');
}

function resetBoard() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameEnded = false;

    var cells = document.getElementsByClassName('cell');
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }
}


    

