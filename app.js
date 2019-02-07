const grid = document.querySelector(".grid");
const tower1 = document.querySelector("#tower1");
const tower2 = document.querySelector("#tower2");
const tower3 = document.querySelector("#tower3");

let boxWidth = 192;

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