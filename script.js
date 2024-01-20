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

hoverElement.forEach(hoverElement => {
    hoverElement.addEventListener('mouseover', () => {
        hoverElement.style.backgroundColor = 'black';
    });
});

//pen
let pen = document.getElementById('pen');
pen.addEventListener("click", () => {

    hoverElement.forEach(hoverElement => {
        hoverElement.addEventListener('mouseover', () => {
            hoverElement.style.backgroundColor = 'black';
        });
    });

});

//eraser
let eraser = document.getElementById('eraser');
eraser.addEventListener("click", () => {

    hoverElement.forEach(hoverElement => {
        hoverElement.addEventListener('mouseover', () => {
            hoverElement.style.backgroundColor = 'white';
        });
    });

});

//clear
let clear = document.getElementById('clear');
clear.addEventListener("click", () => {
    hoverElement.forEach(hoverElement => {
        hoverElement.style.backgroundColor = 'white';
    });
});