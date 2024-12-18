'use strict'
//game elements
const BOMB = '💣'
const FLAG = '🚩'
const EMPTY = ''
////gVars
var gBoard = []
var gLevel = {
    SIZE: 4,
    MINES: 2
}
var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}

function onInit(level = 4) {
    // setLevel(level)
    console.log('game start')
    gBoard = buildBoard()
    setMinesNegsCount()
    renderBoard()
}
function buildBoard(board) {/////need to fix

    var board = []

    for (var i = 0; i < gLevel.SIZE; i++) {
        board[i] = []

        for (var j = 0; j < gLevel.SIZE; j++) {
            board[i][j] = {
                minesAroundCount: 0,
                isShown: false,
                isMine: false,
                isMarked: false,
                renderItem: EMPTY
            }
        }
    }
    board[0][1] = {
        minesAroundCount: 0,
        isShown: false,
        isMine: true,
        isMarked: false,
    }
    board[2][3] = {
        minesAroundCount: 0,
        isShown: false,
        isMine: true,
        isMarked: false,
    }
    board[3][0] = {
        minesAroundCount: 0,
        isShown: false,
        isMine: false,
        isMarked: true
    }
    // console.log(board)
    // console.table(board)
    return board
}
function setMinesNegsCount() {
    for (var i = 0; i < gLevel.SIZE; i++) {
        for (var j = 0; j < gLevel.SIZE; j++) {
            const cell = gBoard[i][j]
            if (!cell.isMine) {
                cell.minesAroundCount = countMinesAround(i, j)
            }
            // console.log(cell)
        }
    }
    renderBoard()
}
function countMinesAround(rowIdx, colIdx) {
    var negsCount = 0;

    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i === -1) continue

        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (j === -1) continue
            if (i === rowIdx && j === colIdx) continue;
            console.log('i', i, 'j', j)
            if (i >= 0 && i < gBoard.length && j >= 0 && j < gBoard[0].length) {
                if (gBoard[i][j].isMine) {
                    negsCount++;
                }
            }
        }
    }
    console.log(`'cell [${rowIdx},${colIdx}] has ${negsCount} negs'`)
    return negsCount;
}

function onCellClicked(elCell, i, j) {
    if (gBoard[i][j].isShown) return
    gGame.markedCount += gBoard[i][j].isMarked ? -1 : 1
    console.log('gGame.markedCount:', gGame.markedCount)

}
function onCellMarked(elCell) {

}
function expandShown(board, elCell, i, j) {

}
function checkGameOver() {

}
function setLevel(level){

}
// function countMinesAround(rowIdx, colIdx) {
//     var negsCount = 0;


//     for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
//         if (i === -1) continue
//         for (var j = colIdx - 1; j <= colIdx + 1; j++) {
//             if (j === -1) continue
//             if (i === rowIdx && j === colIdx) continue;
//             console.log('i', i, 'j', j)


//             if (i >= 0 && i < gBoard.length && j >= 0 && j < gBoard[0].length) {

//                 if (gBoard[i][j].isMine) {
//                     negsCount++;
//                 }
//             }
//         }
//     }
//     console.table(`'cell [${rowIdx},${colIdx}] has ${negsCount} negs'`)

//     return negsCount;
// }

// function countMinesAround(rowIdx, colIdx) {
//     var negsCount = 0;


//     for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
//         if (i === -1) continue
//         for (var j = colIdx - 1; j <= colIdx + 1; j++) {
//             if (j === -1) continue
//             if (i === rowIdx && j === colIdx) continue;
//             console.log('i', i, 'j', j)


//             if (i >= 0 && i < gBoard.length && j >= 0 && j < gBoard[0].length) {

//                 if (gBoard[i][j].isMine) {
//                     negsCount++;
//                 }
//             }
//         }
//     }
//     console.table(`'cell [${rowIdx},${colIdx}] has ${negsCount} negs'`)

//     return negsCount;
// }