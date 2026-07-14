let sizeInt = 16;
function sizePrompt() {
    let sizeString = prompt("How big do you want the canvas to be?")
    //sizeInt = parseInt(sizeString);
    //sizeInt = Number(Sizestring);
     if (isNaN(sizeString) === true) {
        alert("bruh");
        return;
     }

    if (sizeString > 100) {
        alert("too large! select smaller number!");
        return; }
    
    let removeContainer = document.querySelector('.containerDiv');
    removeContainer.remove();
    
    drawCanvas(sizeString);
    
    const squares = document.querySelectorAll('.columnDiv');
    squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
    square.classList.add('hovered');
    });
});


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
//columnDiv.classList.add("hovered");

