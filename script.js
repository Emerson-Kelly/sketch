let modal = document.querySelector(".modal");
let trigger = document.querySelector(".trigger");
let closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
    document.getElementById('alert').style.color = "black";
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
if (variable >= 101) {
    document.getElementById('alert').style.color = "red";
   return;
}
else {
    toggleModal();
    calculateFlexBasisPercentage(container);
    callFunction(makeGrid, variable);
}
}

// Add an event listener for the "Enter" key press
document.getElementById('input_id').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        userSubmit(); // Call userSubmit function when "Enter" is pressed
    }
});

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
    cell.addEventListener("mousedown", event => {
        if (isErasing && event.buttons == 1) makeWhite(event);
        else if (event.buttons == 1) makeBlack(event);
    });
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

//clear
let clear = document.getElementById('clear');
clear.addEventListener("click", () => {
    console.log("Clear button clicked");
    const hoverElements = document.querySelectorAll('.cell');
    hoverElements.forEach(cell => {
        cell.style.backgroundColor = 'transparent';
        cell.style.borderColor = 'black'; // Set border color if needed
    });
});






const callFunction = (func, n) => {
    for (let i = 1; i <= n; i++) {
        func();
    }
};

callFunction(makeGrid, 16);
