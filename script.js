const container = document.getElementById("container");

function makeGrid() {
    for (x = 0; x < 16; x++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        //cell.id = 'cell';
        container.appendChild(cell);
    }
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