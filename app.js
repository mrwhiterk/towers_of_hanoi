const body = document.querySelector('body');
const gameArea = document.querySelector('.grid');
const blockAreas = document.querySelectorAll('.blockArea');

var towerColor = "green";

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
}