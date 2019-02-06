const body = document.querySelector('body');
const gameArea = document.querySelector('.grid');
const blockAreas = document.querySelectorAll('.blockArea');

let status = document.querySelector('#status');

var towerColor = "grey";

var currentPiece = []
let pieceInPlay = () => currentPiece.length > 0;

function updateStatus(piece) {
  console.log('piece', piece)
  if (pieceInPlay()) {
    status.innerText = `You current have a block: ${piece[0][1].className} selected`;
  } else {
    status.innerText = `You have no block selected`;
  }
}

function mapClassToNumber(className) {
  switch (className) {
    case "small":
      return 50;
    case "medium":
      return 75;
    case "large":
      return 100
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
    } else {
      // blockAreas[i].style.width = "100%";
      // blockAreas[i].classList.add("large");
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
      if (blockAreas[towers.tower1[0]].style.backgroundColor == "white" && !pieceInPlay()) {
        console.log('tower 1 dropdown hit');

        towers.tower1stackOffset = 1;
      }

      // test code 
      if (blockAreas[towers.tower1[1]].style.backgroundColor == "white" && !pieceInPlay()) {
        console.log('tower 1 dropdown hit');

        towers.tower1stackOffset = 2;
      }

      var itemFoundMappingByTower = blockAreas[towers.tower1[towers.tower1stackOffset]]

      if (pieceInPlay()) {
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

      //check where lowest available is
      if (blockAreas[towers.tower2[len2 - 1]].style.backgroundColor === towerColor && pieceInPlay()) {
        console.log('tower 2 offset detector')
        towers.tower2stackOffset++;
      }

      var availableSpot = blockAreas[towers.tower2[(len2 - 1) - towers.tower2stackOffset]];
      console.log('avail', availableSpot);

      if (pieceInPlay()) {
        var currentPieceWidth = currentPiece[0][1].className.split(" ")[1];
        console.log('cur piece width', mapClassToNumber(currentPieceWidth));

        var downOneInTower = blockAreas[towers.tower2[(len2 - 1) - towers.tower2stackOffset + 1]];

        // if there is item below
        if (downOneInTower) {
          var downOneTowerSize = downOneInTower.className.split(" ")[1];

          console.log("down piece width", mapClassToNumber(downOneTowerSize));

          if (downOneInTower && mapClassToNumber(currentPieceWidth) < mapClassToNumber(downOneTowerSize)) {
            console.log('i can go');

            availableSpot.style.backgroundColor = towerColor;
            availableSpot.className = currentPiece[0][1].className;

            currentPiece.pop();
          }
        } else {
          availableSpot.style.backgroundColor = towerColor;
          availableSpot.className = currentPiece[0][1].className;

          currentPiece.pop();

        }

      } else {
        itemFoundMappingByTower.style.visibility = 'hidden';
        currentPiece.push([2, itemFoundMappingByTower]);
      }

      updateStatus(currentPiece)
    })
  }

  //tower 3 build functionality - update
  var len3 = towers.tower3.length;

  for (let i = 0; i < len3; i++) {

    blockAreas[towers.tower3[i]].addEventListener('click', function () {

      //check where lowest available is
      if (blockAreas[towers.tower3[len3 - 1]].style.backgroundColor === towerColor && pieceInPlay()) {
        console.log('tower 3 offset detector')
        towers.tower3stackOffset++;
      }

      var availableSpot = blockAreas[towers.tower3[(len3 - 1) - towers.tower3stackOffset]];
      console.log('avail', availableSpot);

      if (pieceInPlay()) {
        var currentPieceWidth = currentPiece[0][1].className.split(" ")[1];
        console.log('cur piece width', mapClassToNumber(currentPieceWidth));

        var downOneInTower = blockAreas[towers.tower3[(len3 - 1) - towers.tower3stackOffset + 1]];

        // if there is item below
        if (downOneInTower) {
          var downOneTowerSize = downOneInTower.className.split(" ")[1];

          console.log("down piece width", mapClassToNumber(downOneTowerSize));

          if (downOneInTower && mapClassToNumber(currentPieceWidth) < mapClassToNumber(downOneTowerSize)) {
            console.log('i can go');

            availableSpot.style.backgroundColor = towerColor;
            availableSpot.className = currentPiece[0][1].className;

            currentPiece.pop();
          }
        } else {
          availableSpot.style.backgroundColor = towerColor;
          availableSpot.className = currentPiece[0][1].className;

          currentPiece.pop();

        }

      } else {
        itemFoundMappingByTower.style.visibility = 'hidden';
        currentPiece.push([3, itemFoundMappingByTower]);
      }

      updateStatus(currentPiece)
    })
  }


















}