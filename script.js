/** Etch-a-sketch
 * Using just javascript, create a 16x16 grid of divs, all inside one larger div called 'container', using flexbox 
 * How to make divs a grid?
 * Horizontal div: use for loop to make 16 divs
 * How to make vertical divs?
 * Would need to go to each rowDiv and make 16 more divs as childs of those rowDivs. But I need to select each div individually, making sure that each div has exactly 16 children.
 *  
 */


const containerDiv = document.createElement('div');
containerDiv.classList.add('containerDiv');
containerDiv.textContent = "hello there";
document.body.appendChild(containerDiv);

for (let i = 0; i < 16; i++) {
const rowDiv = document.createElement('div');
rowDiv.classList.add('rowDiv');
rowDiv.textContent = 'div';
containerDiv.append(rowDiv);

    for (let i = 0; i < 16; i++) {
        const columnDiv = document.createElement('div');
        columnDiv.classList.add('columnDiv');
        columnDiv.textContent = 'vid';
        rowDiv.append(columnDiv);
    }
}
