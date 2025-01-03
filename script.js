let divContainer = document.querySelector("#container");
let buttonSetGrid = document.querySelector("#set-grid");

let sketchOptions = {
    gridSize: 16,
};


function getUserGridSize() {
    let size = parseInt(prompt("Set your new grid size"));
    while (size > 100) {
        size = parseInt(prompt("Please, enter a value below or equal to 100"));
    }
    sketchOptions.gridSize = size;

    return size;
}

function generateGrid() {
    divContainer.setAttribute("style", `
        display: flex;
        max-width: ${sketchOptions.gridSize}rem;
        max-height: ${sketchOptions.gridSize}rem;

        width: ${sketchOptions.gridSize};
        height: ${sketchOptions.gridSize};

        flex-wrap: wrap;
    `);

    // Removes all children
    divContainer.innerHTML = "";

    let gridSizeSquared = Math.pow(sketchOptions.gridSize, 2);
    for (let i=1; i <= gridSizeSquared; i++) {
        let div = document.createElement("div");
        div.setAttribute("style", "background-color: gray; width: 1rem; height: 1rem;");
        divContainer.appendChild(div);    

        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "black";
        });
    }
}


buttonSetGrid.addEventListener("click", () => {
    getUserGridSize();
    generateGrid();
});


generateGrid();