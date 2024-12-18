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

      strHTML += `<td class="${className}" onClick="">${cell.renderItem}</td>`
    //  ${cell}
      
    }
    strHTML += '</tr>'
  }
  strHTML += '</tbody></table>'

  const elContainer = document.querySelector('.board-container')
  elContainer.innerHTML = strHTML
}






function renderCell(location, value) {

  const elCell = document.querySelector(`.cell-${location.i}-${location.j}`)
  elCell.innerHTML = value
}
// function getMoveDiff() {
//   const randNum = getRandomIntInclusive(1, 4)

//   switch (randNum) {
//       case 1: return { i: 0, j: 1 }
//       case 2: return { i: 1, j: 0 }
//       case 3: return { i: 0, j: -1 }
//       case 4: return { i: -1, j: 0 }
//   }
// }

function openModal(msg) {
  const elModal = document.querySelector('')
  const elSpan = document.querySelector('')
  elModal.style.display = 'block'
}

function closeModal() {
  const elModal = document.querySelector('')
  elModal.style.display = 'none'
}

