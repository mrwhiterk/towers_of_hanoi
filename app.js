const grid = document.querySelector(".grid");
const tower1 = document.querySelector("#tower1");
const tower2 = document.querySelector("#tower2");
const tower3 = document.querySelector("#tower3");
let status = document.querySelector("#status");
const startBtn = document.querySelector("#startBtn");
let blockSelect = document.querySelector("#blockSelect");
const boxWidth = 120;
let currentPiece;
var counter = 0;
var counterDashboard = document.querySelector('.counter');


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

var numOfBlocks = blockSelect.options[blockSelect.selectedIndex].value;

startBtn.addEventListener('click', () => startGame());

function startGame() {
  grid.style.visibility = "visible";
  clearBoard(tower1);
  clearBoard(tower2);
  clearBoard(tower3);
  currentPiece = null;
  counter = 0;
  display()

  var numOfBlocksSelected = blockSelect.options[blockSelect.selectedIndex].value;

  // create 3 blocks
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

      var currentPieceWidth = parseInt(currentPiece.style.width);
      var topPieceWidth = parseInt(getLastItem(tower).style.width);

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