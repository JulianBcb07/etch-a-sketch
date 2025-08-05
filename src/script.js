// Steps to do this activity

/* 
How to create a great Play Etch a sketch?
  
  1. Create a grid layout in a function
  2. Create the buttons to select color, paint, erease and grid size
  3. Make events to paint the grid 
  4. asign a specific function to all accions
  5. refactor

*/

// 1. global variables
let mainColor = "#471396";
let gridValue = 16;
let gridTotal = gridValue * gridValue;
let gridSizeValue = gridValue;

// flags to logic usability
let isPainting = false;
let isEreasing = false;

let isColorModeActive = false;
let isRainbowModeActive = false;
let isEreaseModeActive = false;

const gridTextValue = document.getElementById("size-value");
console.log(gridTextValue.innerHTML);

// Create buttons
const colorSelected = document.getElementById("colorPicker");
const buttonPaint = document.getElementById("button-color");
const buttonRandomPaint = document.getElementById("button-rcolor");
const buttonErease = document.getElementById("button-erease");
const buttonClear = document.getElementById("button-clear");
const buttonGridSize = document.getElementById("grid-size");
const container = document.querySelector(".container");

// create elements
const gridContainer = document.createElement("div");
const gridTable = document.createElement("div");

console.log(colorSelected);

/* perdiste un poco del conocimiento, no pasa nada, a seguir adelante. Nada nos va a detener */
// le agrega un evento a todo el documento usando mousedown para pintar y mouseup para no pintar

document.addEventListener("mousedown", () => {
  isPainting = true;
  isEreasing = true;
});

document.addEventListener("mouseup", () => {
  isPainting = false;
  isEreasing = false;
});

const createGridBackground = () => {
  // styling grid-container and put inside of the container parent
  gridContainer.classList.add("grid-container");
  gridContainer.style.backgroundColor = "#3674B5";
  gridContainer.style.width = "550px";
  gridContainer.style.height = "550px";
  gridContainer.style.margin = "0 auto";
  gridContainer.style.padding = "10px";
  gridContainer.style.display = "flex";
  gridContainer.style.flexWrap = "wrap";
  container.appendChild(gridContainer);
};

// function to create the grid
const gridSize = (gridValue) => {
  gridContainer.innerHTML = "";

  gridValue = gridValue;
  gridTotal = gridValue * gridValue;

  for (let i = 0; i < gridTotal; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add(`grid-item`);
    gridItem.style.backgroundColor = "white";
    // gridItem.style.border = "1px solid gray";
    gridItem.style.width = `calc(100% / ${gridValue})`;
    gridItem.style.aspectRatio = `1/1`;
    gridContainer.appendChild(gridItem);

    // Añadir eventos a cada gridItem
    gridItem.addEventListener("mousedown", (e) => {
      if (isColorModeActive) {
        paintGrid(gridItem);
      } else if (isEreaseModeActive) {
        ereaseGrid(gridItem);
      } else if (isRainbowModeActive) {
        paintGrid(gridItem);
      }
      e.preventDefault();
    });

    gridItem.addEventListener("mouseover", () => {
      if (isPainting && isColorModeActive) {
        paintGrid(gridItem);
      } else if (isEreasing && isEreaseModeActive) {
        ereaseGrid(gridItem);
      } else if (isPainting && isRainbowModeActive) {
        paintGrid(gridItem);
      }
    });
  }
};

createGridBackground();
gridSize(gridValue);

// asignar el evento a cada gridItem para que pueda pintar solo una vez!
// const gridPaint = document.querySelectorAll(".grid-item");
// console.log(gridPaint);
// gridPaint.forEach((element) => {
//   element.addEventListener("mousedown", (e) => {
//     if (isColorModeActive) {
//       paintGrid(element);
//     } else if (isEreaseModeActive) {
//       ereaseGrid(element);
//     } else if (isRainbowModeActive) {
//       paintGrid(element);
//     }
//     e.preventDefault();
//   });
//   element.addEventListener("mouseover", () => {
//     if (isPainting && isColorModeActive) {
//       paintGrid(element);
//     } else if (isEreasing && isEreaseModeActive) {
//       ereaseGrid(element);
//     } else if (isPainting && isRainbowModeActive) {
//       paintGrid(element);
//     }
//   });
// });

colorSelected.addEventListener("input", (e) => {
  mainColor = e.target.value;
  console.log(mainColor);
});

const paintGrid = (item) => {
  console.log(item);
  if (item === undefined) return;
  if (isColorModeActive) {
    item.style.backgroundColor = mainColor;
  } else if (isRainbowModeActive) {
    item.style.backgroundColor = getRandomRgb();
  }
};

const getRandomRgb = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b})`;
};

const ereaseGrid = (item) => {
  if (!isEreaseModeActive) return;
  item === undefined ? "" : (item.style.backgroundColor = "white");
};

document.getElementById("grid-size").addEventListener("input", (e) => {
  const textSize = document.getElementById("size-value");
  gridSizeValue = e.target.value;
  textSize.textContent = `${gridSizeValue} x ${gridSizeValue}`;
  e.preventDefault();

  gridSize(gridSizeValue);
});

buttonPaint.addEventListener("click", () => {
  isColorModeActive = !isColorModeActive;
  console.log(isColorModeActive);
  if (isColorModeActive) {
    buttonPaint.style.backgroundColor = "#52e355ff";
    isRainbowModeActive = false;
    isEreaseModeActive = false;
    buttonRandomPaint.style.backgroundColor = "#222831";
    buttonErease.style.backgroundColor = "#222831";
  } else {
    buttonPaint.style.backgroundColor = "#222831";
  }
});

buttonRandomPaint.addEventListener("click", () => {
  isRainbowModeActive = !isRainbowModeActive;
  console.log(isRainbowModeActive);
  if (isRainbowModeActive) {
    buttonRandomPaint.style.backgroundColor = "#52e355ff";
    isColorModeActive = false;
    isEreaseModeActive = false;
    buttonErease.style.backgroundColor = "#222831";
    buttonPaint.style.backgroundColor = "#222831";
  } else {
    buttonRandomPaint.style.backgroundColor = "#222831";
  }
});

buttonErease.addEventListener("click", () => {
  isEreaseModeActive = !isEreaseModeActive;
  console.log(isEreaseModeActive);
  if (isEreaseModeActive) {
    buttonErease.style.backgroundColor = "#52e355ff";
    isColorModeActive = false;
    isRainbowModeActive = false;
    buttonPaint.style.backgroundColor = "#222831";
    buttonRandomPaint.style.backgroundColor = "#222831";
    console.log(isColorModeActive);
  } else {
    buttonErease.style.backgroundColor = "#222831";
  }
});

buttonClear.addEventListener("click", () => {
  const gridClear = document.querySelectorAll(".grid-item");
  gridClear.forEach((item) => {
    item.style.backgroundColor = "white";
  });
});

// test

// I got a grid layout now how can I paint in it?
