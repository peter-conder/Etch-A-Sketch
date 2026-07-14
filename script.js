/** Etch-a-sketch
 * 
 */


const containerDiv = document.createElement('div');
containerDiv.classList.add('containerDiv');
document.body.appendChild(containerDiv);

for (let i = 0; i < 16; i++) {
const rowDiv = document.createElement('div');
rowDiv.classList.add('rowDiv');
//rowDiv.classList.add("hovered");
containerDiv.append(rowDiv);

    for (let i = 0; i < 16; i++) {
        const columnDiv = document.createElement('div');
        columnDiv.classList.add('columnDiv');
        //columnDiv.textContent = 'vid';
        rowDiv.append(columnDiv);
    }
}
const squares = document.querySelectorAll('.columnDiv');
squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
        square.classList.add('hovered');
    });
});
columnDiv.classList.add("hovered");

/*const upDiv = document.querySelector(".columnDiv");
upDiv.classList.add('hovered');
upDiv.addEventListener("mouseenter", () => {upDiv.classList.add("hovered");}
);

/**
 * hover effect stays on after mouse moves on:
 * best to use js + eventlisteners to add a class to a div once it is hovered over, then have that class modify that div using css.
 * 1) add eventListener
 * 2) eventListener adds class
 */