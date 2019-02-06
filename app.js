const body = document.querySelector('body');
const gameArea = document.querySelector('.grid');
const blockAreas = document.querySelectorAll('.blockArea');

var towerColor = "grey";

var currentPiece = {};



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
  }

  for (let i = 0; i < blockAreas.length; i++) {
    if (i % 3 === 0) towers.tower1.push(i);
  }

  towers.tower2 = towers.tower1.map(num => num + 1)
  towers.tower3 = towers.tower2.map(num => num + 1)

  for (let i = 0; i < towers.tower1.length; i++) {

    blockAreas[towers.tower1[i]].addEventListener('click', function () {

      var itemFoundMappingByTower = blockAreas[towers.tower1[0]]

      itemFoundMappingByTower.style.visibility = 'hidden';

      currentPiece.piece = itemFoundMappingByTower;
    })
  }

  console.log(currentPiece);









}