const body = document.querySelector('body');
const gameArea = document.querySelector('.grid');
const blockAreas = document.querySelectorAll('.blockArea');

let status = document.querySelector('#status');

var towerColor = "grey";

var currentPiece = []

function updateStatus(piece) {
  console.log('piece', piece)
  if (piece.length > 0) {
    status.innerText = `You current have a block: ${piece[0][1].className} selected`;
  } else {
    status.innerText = `You have no block selected`;
  }
}



//initial tower coloring on left side
for (let i = 0; i < (blockAreas.length / 3); i++) {
  if (i == 0) {
    blockAreas[i].style.backgroundColor = towerColor;
  } else {
    blockAreas[i * 3].style.backgroundColor = towerColor;
  }
}

if (blockAreas.length === 9) {

  for (let i = 0; i < blockAreas.length - 1; i++) {
    if (i <= 2) {
      blockAreas[i].style.width = "50%";
      blockAreas[i].classList.add("small");
    } else if (i <= 5) {
      blockAreas[i].style.width = "75%";
      blockAreas[i].classList.add("medium");
    }

  }

  //create 3 columns to represent towers 
  var towers = {
    tower1: [],
    tower1stackOffset: 0,
    tower2stackOffset: 0,
    tower3stackOffset: 0,
  }

  for (let i = 0; i < blockAreas.length; i++) {
    if (i % 3 === 0) towers.tower1.push(i);
  }

  towers.tower2 = towers.tower1.map(num => num + 1)
  towers.tower3 = towers.tower2.map(num => num + 1)

  //tower 1 build functionality
  var len1 = towers.tower1.length;

  for (let i = 0; i < len1; i++) {

    blockAreas[towers.tower1[i]].addEventListener('click', function () {


      //if top item is gone and no piece then go down 1 and get piece
      if (blockAreas[towers.tower1[0]].style.backgroundColor == "white" && currentPiece.length === 0) {
        console.log('tower 1 dropdown hit');
        towers.tower1stackOffset++;
      }

      var itemFoundMappingByTower = blockAreas[towers.tower1[towers.tower1stackOffset]]

      if (currentPiece.length > 0) {
        itemFoundMappingByTower.style.backgroundColor = towerColor;
        currentPiece.pop();
      } else {
        itemFoundMappingByTower.style.backgroundColor = "white";
        currentPiece.push([1, itemFoundMappingByTower]);
      }

      updateStatus(currentPiece)
    })
  }

  //tower 2 build functionality - update
  var len2 = towers.tower2.length;

  for (let i = 0; i < len2; i++) {

    blockAreas[towers.tower2[i]].addEventListener('click', function () {

      var availableSpot = blockAreas[towers.tower2[len2 - 1]];



      if (currentPiece.length > 0) {
        availableSpot.style.backgroundColor = towerColor;
        availableSpot.className = currentPiece[0][1].className;

        // console.log(availableSpot);

        currentPiece.pop();
      } else {
        itemFoundMappingByTower.style.visibility = 'hidden';
        currentPiece.push([2, itemFoundMappingByTower]);
      }

      updateStatus(currentPiece)
    })
  }














}