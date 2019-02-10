const grid = document.querySelector(".grid");
const tower1 = document.querySelector("#tower1");
const tower2 = document.querySelector("#tower2");
const tower3 = document.querySelector("#tower3");
let status = document.querySelector("#status");
const startBtn = document.querySelector("#startBtn");
let blockSelect = document.querySelector("#blockSelect");
const boxWidth = 120;
let currentPiece;
let counter = 0;
let counterDashboard = document.querySelector('.counter');
let detail_col_two = document.querySelector('.detail_col_two');
let detail_col_three = document.querySelector('.detail_col_three');


const getLastItem = list => list.childNodes[(list.childNodes.length - 1)];

const display = () => {
  while (status.firstChild) {
    status.removeChild(status.firstChild);
  }
  if (currentPiece) {
    let elemClone = currentPiece.cloneNode(true);
    status.appendChild(elemClone);
  } else {
    status.innerHTML = "-- select block --";
  }

  counterDashboard.innerText = counter;

}

function clearBoard(tower) {
  while (tower.firstChild) {
    tower.removeChild(tower.firstChild);
  }
}

let numOfBlocks = blockSelect.options[blockSelect.selectedIndex].value;

startBtn.addEventListener('click', () => startGame());

function gameStartEndSwitch() {}

function startGame() {
  grid.style.visibility = "visible";
  detail_col_two.style.visibility = "visible";
  detail_col_three.style.visibility = "visible";
  if (startBtn.textContent == "End Game") {
    startBtn.textContent = "Start Game";
    grid.style.visibility = "hidden";
    return;
  } else {
    startBtn.textContent = "End Game";
  }

  clearBoard(tower1);
  clearBoard(tower2);
  clearBoard(tower3);
  currentPiece = null;
  counter = 0;
  display()

  let numOfBlocksSelected = blockSelect.options[blockSelect.selectedIndex].value;

  for (let i = numOfBlocksSelected; i > 0; i--) {
    let block = document.createElement('div');
    block.className = "block";
    block.style.width = (boxWidth * (i / 3) + "px");
    tower1.appendChild(block);
  }

  function didPlayerWin() {
    return tower1.childNodes.length === 0 && tower2.childNodes.length === 0;
  }

  function createMovement(tower) {
    if (!currentPiece) {
      currentPiece = getLastItem(tower);
    } else if (currentPiece && tower.childNodes.length === 0) {

      tower.appendChild(currentPiece);
      counter++;
      currentPiece = null;
    } else if (currentPiece) {

      let currentPieceWidth = parseInt(currentPiece.style.width);
      let topPieceWidth = parseInt(getLastItem(tower).style.width);

      if (currentPieceWidth <= topPieceWidth) {
        tower.appendChild(currentPiece);
        counter++;
        currentPiece = null;
      }
    }
    display();

    if (didPlayerWin()) {
      setTimeout(() => alert(`Congrats, you win level:${numOfBlocksSelected} in ${counter} moves!`), 500);
    }
  }

  tower1.addEventListener('click', (evt) => createMovement(evt.target));
  tower2.addEventListener('click', (evt) => createMovement(evt.target));
  tower3.addEventListener('click', (evt) => createMovement(evt.target));

}