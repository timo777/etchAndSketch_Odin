const main = document.querySelector("#main");
console.log(main)
for (let i = 0; i != 16 * 16; i++) {
    const div = document.createElement('div');
    div.style.background = "blue"
    div.classList.add('jsDiv')
    main.appendChild(div);
}