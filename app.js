const grid = document.querySelector(".grid");
const towers = [];
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

for (let i = 1; i <= 3; i++) {
  towers.push(document.querySelector(`#tower${i}`));
}

function clearBoard(tower) {
  while (tower.firstChild) {
    tower.removeChild(tower.firstChild);
  }
}

let numOfBlocks = blockSelect.options[blockSelect.selectedIndex].value;

startBtn.addEventListener('click', () => startGame());

function startGame() {
  grid.style.visibility = "visible";
  detail_col_two.style.visibility = "visible";
  detail_col_three.style.visibility = "visible";
  if (startBtn.textContent == "End Game") {
    startBtn.textContent = "Start Game";
    grid.style.visibility = "hidden";
    location.reload();
    return;
  } else {
    startBtn.textContent = "End Game";
  }
  towers.map(clearBoard);
  currentPiece = null;
  counter = 0;
  display()

  let numOfBlocksSelected = blockSelect.options[blockSelect.selectedIndex].value;

  for (let i = numOfBlocksSelected; i > 0; i--) {
    let block = document.createElement('div');
    block.className = "block";
    block.style.width = (boxWidth * (i / 3) + "px");
    towers[0].appendChild(block);
  }

  function didPlayerWin() {
    return towers[0].childNodes.length === 0 && towers[1].childNodes.length === 0;
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
  towers.map(x => x.addEventListener('click', (evt) => createMovement(evt.target)));
}