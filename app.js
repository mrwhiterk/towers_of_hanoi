const grid = document.querySelector(".grid");
const tower1 = document.querySelector("#tower1");
const tower2 = document.querySelector("#tower2");
const tower3 = document.querySelector("#tower3");
const boxWidth = 120;
let currentPiece;
const numBlocks = 3;

const getLastItem = list => list.childNodes[(list.childNodes.length - 1)];

const display = () => {


  let status = document.querySelector("#status");

  while (status.firstChild) {
    status.removeChild(status.firstChild);
  }
  if (currentPiece) {

    let elemClone = currentPiece.cloneNode(true);
    status.appendChild(elemClone);
  } else {
    status.innerHTML = "-- select block --";
  }


}

// create 3 blocks
for (let i = numBlocks; i > 0; i--) {
  var block = document.createElement('div');
  block.className = "block";

  block.style.width = (boxWidth * (i / 3) + "px");

  tower1.appendChild(block);
}


function createMovement(tower) {
  if (!currentPiece) {
    currentPiece = getLastItem(tower);
    display();
  } else if (currentPiece && tower.childNodes.length === 0) {

    tower.appendChild(currentPiece);
    currentPiece = null;
  } else if (currentPiece) {

    var currentPieceWidth = parseInt(currentPiece.style.width);
    var topPieceWidth = parseInt(getLastItem(tower).style.width);

    if (currentPieceWidth <= topPieceWidth) {
      tower.appendChild(currentPiece);
      currentPiece = null;
    }
  }
}

tower1.addEventListener('click', (evt) => createMovement(evt.target));
tower2.addEventListener('click', (evt) => createMovement(evt.target));
tower3.addEventListener('click', (evt) => createMovement(evt.target));

display();