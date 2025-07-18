// Steps to do this activity

/* 
How to create a great Play Etch a sketch?
  - use solid principles 

  steps to perform it
  1. Create the buttons using javascript. Paint, Erease, change color, change size of grid.
  2. I need to create the grid, using a parameter to put dinamicaly the size. (create a function)
  3. I need to get all the pixels or grid-items to use in an event so I can paint them. (create a function of that)
  4. Set events to hold click and paint. If click is out don't paint. Using a function to paint.
  5. Set event to clean the colors, using a function to erease.

*/

// 1. global variables
let mainColor = "#471396";
let gridSize = 16;
let gridTotal = gridSize * gridSize;
let isPainting = true;

// Create buttons to use
const buttonGridSize = document.createElement("button");
const buttonSelectColor = document.createElement("button");
const buttonPaint = document.createElement("button");
const buttonErease = document.createElement("button");
buttonGridSize.classList.add("btn-style");
buttonSelectColor.classList.add("btn-style");
buttonPaint.classList.add("btn-style");
buttonErease.classList.add("btn-style");

// create the parentNode grid-container
const container = document.querySelector(".container");

// create a button section
const buttonSection = document.createElement("div");
buttonSection.classList.add(".button-section");
buttonSection.style.backgroundColor = "#03A6A1";
buttonSection.style.Width = "400px";
buttonSection.style.margin = "0 auto";
container.appendChild(buttonSection);

buttonSection.appendChild(buttonGridSize);
buttonSection.appendChild(buttonSelectColor);
buttonSection.appendChild(buttonPaint);
buttonSection.appendChild(buttonErease);

// create a grid-container
const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");
gridContainer.style.backgroundColor = "#3674B5";
gridContainer.style.width = "650px";
gridContainer.style.height = "650px";
gridContainer.style.margin = "0 auto";
gridContainer.style.padding = "10px";
gridContainer.style.display = "flex";
gridContainer.style.flexWrap = "wrap";
container.appendChild(gridContainer);

// function to create the grid
const newGrid = (gridSize) => {
  for (let i = 0; i < gridTotal; i++) {
    const divFlexbox = document.createElement("div");
    divFlexbox.classList.add("grid-item");
    divFlexbox.style.backgroundColor = "lightgray";
    divFlexbox.style.border = "1px solid gray";
    divFlexbox.style.width = `calc(100% / ${gridSize})`;
    divFlexbox.style.aspectRatio = `1/1`;
    gridContainer.appendChild(divFlexbox);

    divFlexbox.onmousedown = function (event) {
      event.preventDefault();
      if (isPainting) {
        divFlexbox.onmouseover = function (event) {
          let target = event.target;
          target.style.backgroundColor = mainColor;
        };
      }
    };
  }
};

const paintGrid = () => {};

// test
newGrid(gridSize);

// I got a grid layout now how can I paint in it?
