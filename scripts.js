const container = document.getElementById("container");

function eatchASketch(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    
    cell.addEventListener("mouseover", function() {   
       cell.style.backgroundColor = "blue";
    });

    container.appendChild(cell).className = "grid-item";
  };
};

eatchASketch(16, 16);

function clearAndNewGrid() {
  let cells = document.getElementsByClassName('grid-item');

  Array.from(cells).forEach(e => e.style.backgroundColor = "white");

  let promptNewGrid = prompt("How many squares per side do you want?");

  if (promptNewGrid > 64 || promptNewGrid < 16) {
    alert("You can`t generate more than 64 squares and less than 16");

    Array.from(cells).forEach(e => e.remove());
    eatchASketch(16, 16);
  } else {
    Array.from(cells).forEach(e => e.remove());
    eatchASketch(promptNewGrid, promptNewGrid);
  }
};

const button = document.querySelector('button');

button.addEventListener('click', clearAndNewGrid);

