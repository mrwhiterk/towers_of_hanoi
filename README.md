# Towers of Hanoi

My first project at General Assembly building the classic Towers of Hanoi game
Deployed Site: https://mrwhiterk.github.io/towers_of_hanoi/

# How to Play

The objective of the game is to move all the blocks from the left most column to the right most column. Click on the slider to select the number of blocks you want to play with then click the "New Game" button. Click on any part of the column to select the top most block. That block will show up on the right side of your dashboard, then you can click on one of the columns again to move it to that location.

# Rules

1. You can only move one block at a time.
2. You cannot place a larger block on a smaller block.

# Approach to Creation

In my game area, I use 3 divs inside a css grid container. I also have a flexbox on each container to column-reverse so newly appended divs goes to the top(ie: tower piece). Then I wrote functionality to pull a current elem and push or pop based on the size or presence of the underlying elem.

# Technology used

HTML, CSS, Javascript
