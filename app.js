const grid = document.querySelector(".grid");
const tower1 = document.querySelector("#tower1");
const tower2 = document.querySelector("#tower2");
const tower3 = document.querySelector("#tower3");
const boxWidth = 192;
let currentPiece;

// create 3 blocks
for (let i = 0; i < 3; i++) {
  var block = document.createElement('div');
  block.className = "block";

  if (i < 1) {
    block.style.width = boxWidth + "px";
  } else if (i < 2) {
    block.style.width = (boxWidth * 0.75) + "px";
  } else {
    block.style.width = (boxWidth * 0.50) + "px";
  }
  tower1.appendChild(block);
}

function getLastItem(list) {
  return list.childNodes[(list.childNodes.length - 1)]
}

tower1.addEventListener('click', function (evt) {

  if (!currentPiece) {
    currentPiece = getLastItem(evt.target);
  } else if (currentPiece && evt.target.childNodes.length == 0) {

    evt.target.appendChild(currentPiece);
    currentPiece = null;
  } else if (currentPiece) {

    var currentPieceWidth = parseInt(currentPiece.style.width);
    var topPieceWidth = parseInt(getLastItem(evt.target).style.width);
    if (currentPieceWidth <= topPieceWidth) {
      evt.target.appendChild(currentPiece);
      currentPiece = null;
    }
  }
  console.log('current piece', currentPiece);

})

tower2.addEventListener('click', function (evt) {

  if (!currentPiece) {
    currentPiece = evt.target.childNodes[(evt.target.childNodes.length - 1)];
  } else if (currentPiece && evt.target.childNodes.length == 0) {

    evt.target.appendChild(currentPiece);
    currentPiece = null;
  } else if (currentPiece) {

    var currentPieceWidth = parseInt(currentPiece.style.width);
    var topPieceWidth = parseInt(getLastItem(evt.target).style.width);
    if (currentPieceWidth <= topPieceWidth) {
      evt.target.appendChild(currentPiece);
      currentPiece = null;
    }
  }
  console.log('current piece', currentPiece);
})

tower3.addEventListener('click', function (evt) {

  if (!currentPiece) {
    currentPiece = evt.target.childNodes[(evt.target.childNodes.length - 1)];
  } else if (currentPiece && evt.target.childNodes.length == 0) {

    evt.target.appendChild(currentPiece);
    currentPiece = null;
  } else if (currentPiece) {

    var currentPieceWidth = parseInt(currentPiece.style.width);
    var topPieceWidth = parseInt(getLastItem(evt.target).style.width);
    if (currentPieceWidth <= topPieceWidth) {
      evt.target.appendChild(currentPiece);
      currentPiece = null;
    }
  }
  console.log('current piece', currentPiece);
})