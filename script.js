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

let cells = document.querySelectorAll("cell");



function calculateFlexBasisPercentage(element) {
  let variable = document.getElementById('input_id').value;

   let percentage = 100 / variable;
    
    element.style.flexBasis = percentage + "%";
  }

function userSubmit() {
   let variable = document.getElementById('input_id').value;
    toggleModal();
    
   calculateFlexBasisPercentage(modal);
    


    //CSS math function here
    callFunction(makeGrid, variable);
    console.log(variable); // Delete after function created
    
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
    }

    container.style.width = containerSize + 'px';
    container.style.height = containerSize + 'px';
};


const callFunction = (func, n) => {
    for (let i = 1; i <= n; i++) {
        func()
    }

}
callFunction(makeGrid, 16);

const hoverElement = document.querySelectorAll('.cell');


const makeBlack = event => event.target.style.backgroundColor = "black";
function equip(hoverElement) {
    hoverElement.addEventListener("mousedown", makeBlack);
    hoverElement.addEventListener("mouseover", event => {
        if (event.buttons == 1) makeBlack(event);
    });
}
hoverElement.forEach(equip);



//pen
let pen = document.getElementById('pen');
pen.addEventListener("click", () => {
    hoverElement.forEach(equip);
});

//eraser
let eraser = document.getElementById('eraser');
eraser.addEventListener("click", () => {

    const makeWhite = event => event.target.style.backgroundColor = "white";
    function equip(hoverElement) {
        hoverElement.addEventListener("mousedown", makeWhite);
        hoverElement.addEventListener("mouseover", event => {
            if (event.buttons == 1) makeWhite(event);
        });
    }
    hoverElement.forEach(equip);

});


//clear
let clear = document.getElementById('clear');
clear.addEventListener("click", () => {
    hoverElement.forEach(hoverElement => {
        hoverElement.style.backgroundColor = 'white';
    });
});