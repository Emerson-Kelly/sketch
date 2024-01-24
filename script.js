let modal = document.querySelector(".modal");
let trigger = document.querySelector(".trigger");
let closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

const container = document.getElementById("container");
let isErasing = false; // Flag to track erasing state

function calculateFlexBasisPercentage(element) {
    let variable = document.getElementById('input_id').value;
    let percentage = 100 / variable;
    element.style.flexBasis = percentage + "%";
}

function userSubmit() {
    let variable = document.getElementById('input_id').value;
    toggleModal();
    calculateFlexBasisPercentage(container);
    callFunction(makeGrid, variable);
}

function makeGrid() {
    let gridSize = parseInt(document.getElementById('input_id').value) || 16;
    container.innerHTML = ''; // Clear existing content
    let maxContainerSize = 500;

    let cellSize = Math.min(maxContainerSize / gridSize, maxContainerSize / gridSize);
    let containerSize = cellSize * gridSize;

    for (let i = 0; i < gridSize * gridSize; i++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        cell.style.width = cellSize + 'px';
        cell.style.height = cellSize + 'px';
        container.appendChild(cell);
        equip(cell); // Apply event listener to the new cell
    }

    container.style.width = containerSize + 'px';
    container.style.height = containerSize + 'px';
}

function equip(cell) {
    cell.addEventListener("mousedown", makeBlack);
    cell.addEventListener("mouseover", event => {
        if (isErasing && event.buttons == 1) makeWhite(event);
        else if (event.buttons == 1) makeBlack(event);
    });
}

const hoverElement = document.querySelectorAll('.cell');

const makeBlack = event => {
    event.target.style.backgroundColor = "black";
    event.target.style.borderColor = "black"; // Set the border color as well
};

const makeWhite = event => {
    event.target.style.backgroundColor = 'transparent'; // Remove the background color
};

//pen
let pen = document.getElementById('pen');
pen.addEventListener("click", () => {
    isErasing = false;
    hoverElement.forEach(equip);
});

// eraser
let eraser = document.getElementById('eraser');
eraser.addEventListener("click", () => {
    isErasing = true;
});

// clear
let clear = document.getElementById('clear');
clear.addEventListener("click", () => {
    console.log("Clear button clicked");
    hoverElement.forEach(cell => {
        console.log("Setting cell to white:", cell);
        cell.style.removeProperty('background-color');
        cell.style.backgroundColor = 'white';
        cell.style.borderColor = 'black';
    });
});




const callFunction = (func, n) => {
    for (let i = 1; i <= n; i++) {
        func();
    }
};

callFunction(makeGrid, 16);
