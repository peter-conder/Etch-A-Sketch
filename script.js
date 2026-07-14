/**
 * So I have the basic thing done now.
 * what needs to happen now is I need to have the 'drawing canvas' function activate whenever you choose a new canvas size.
 * the drawCanvas function also needs to run once when the page is loaded with a size of 16x16, but be redrawn every time the button is clicked.
 * finally, with large numbers, the divs don't quite line up on the x axis. This needs to be fixed,
 */


let sizeInt = 16;

function sizePrompt() {
    let sizeString = prompt("How big do you want the canvas to be?")
    sizeInt = parseInt(sizeString);
    if (sizeInt > 100) {
        alert("too large! select smaller number!");
    }
};

//draws canvas
function drawCanvas(size) {
const promptButton = document.querySelector(".sizeButton");
promptButton.addEventListener ("click", sizePrompt);

const containerDiv = document.createElement('div');
containerDiv.classList.add('containerDiv');
document.body.appendChild(containerDiv);
for (let i = 0; i < size; i++) {
const rowDiv = document.createElement('div');
rowDiv.classList.add('rowDiv');
//rowDiv.classList.add("hovered");
containerDiv.append(rowDiv);

    for (let i = 0; i < size; i++) {
        const columnDiv = document.createElement('div');
        columnDiv.classList.add('columnDiv');
        //columnDiv.textContent = 'vid';
        rowDiv.append(columnDiv);
    }
}
}

drawCanvas(16);

//hover
const squares = document.querySelectorAll('.columnDiv');
squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
        square.classList.add('hovered');
    });
});
columnDiv.classList.add("hovered");

