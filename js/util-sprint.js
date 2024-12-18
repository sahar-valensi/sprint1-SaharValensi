'use strict'
// setTimeout(() => {
//     console.log("Delayed for 1 second.");
//   }, 1000);
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function getRandomColor() {
  const letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

function renderBoard(board) {

  var strHTML = '<table><tbody>'
  for (var i = 0; i < gLevel.SIZE; i++) {

    strHTML += '<tr>'
    for (var j = 0; j < gLevel.SIZE; j++) {

      const cell = gBoard[i][j]
      const className = `cell cell-${i}-${j}`

      strHTML += `<td class="${className}" onClick="">
                ${getRenderItem(cell)}
                </td>`
    }
    strHTML += '</tr>'
  }
  strHTML += '</tbody></table>'

  const elContainer = document.querySelector('.board-container')
  elContainer.innerHTML = strHTML
}






function getRenderItem(cell) {

  var renderItem = ''
  if (cell.isMark) {
    renderItem = FLAG
  } else if (cell.isMine) {
    renderItem = BOMB
  } else if (cell.isShown) {
    renderItem = cell.minesAroundCount
  } else {
    renderItem = EMPTY
  }
return renderItem
}

function openModal(msg) {
  const elModal = document.querySelector('')
  const elSpan = document.querySelector('')
  elModal.style.display = 'block'
}

function closeModal() {
  const elModal = document.querySelector('')
  elModal.style.display = 'none'
}

