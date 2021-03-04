const main = document.querySelector("#main");
const button = document.querySelector("#newGrid")

function setDefault() {
    main.style.gridTemplateColumns = `repeat(${16}, 1fr)`;
    for (let i = 0; i != 16 * 16; i++) {
        const div = document.createElement('div');
        div.classList.add('jsDiv')
        div.addEventListener("mouseover", hoverColor);
        main.appendChild(div);

    }
}
window.onload = function() {
    setDefault();
}


function hoverColor(e) {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function newGridSize(size) {
    main.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (let i = 0; i != size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('jsDiv')
        div.addEventListener("mouseover", hoverColor);
        main.appendChild(div);

    }
}


function changeGrid() {
    const demands = prompt("Please enter the size of the grid")
    if (demands <= 0 || demands > 100) {
        alert("not the right number");
    } else {
        removeGrid();
        newGridSize(demands);
    }
}


function removeGrid() {
    const gridArray = Array.from(main.childNodes);
    gridArray.forEach((element) => {
        main.removeChild(element);
    });
}