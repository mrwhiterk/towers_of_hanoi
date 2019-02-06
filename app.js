const body = document.querySelector('body');
const gameArea = document.querySelector('.grid');
const blockAreas = document.querySelectorAll('.blockArea');

let status = document.querySelector('#status');

var towerColor = "grey";

var currentPiece;



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

      var itemFoundMappingByTower = blockAreas[towers.tower1[0]]

      if (currentPiece) {
        itemFoundMappingByTower.style.visibility = 'visible';
        currentPiece = "";
      } else {
        itemFoundMappingByTower.style.visibility = 'hidden';
        currentPiece = itemFoundMappingByTower;
      }

      updateStatus(currentPiece)


    })
  }


  function updateStatus(piece) {
    if (piece) {
      status.innerText = `You current have a block: ${piece.className} selected`;
    } else {
      status.innerText = `You have no block selected`;
    }
  }










}