const main = document.querySelector("#main");
const button = document.querySelector("#newGrid")
for (let i = 0; i != 16 * 16; i++) {
    const div = document.createElement('div');
    div.classList.add('jsDiv')
    div.addEventListener("mouseover", hoverColor);
    main.appendChild(div);

}


function hoverColor(e) {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
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
        clearGrid();
        newGridSize(demands);
    }
}


function clearGrid() {
    const gridArray = Array.from(main.childNodes);
    gridArray.forEach((element) => {
        main.removeChild(element);
    });
}