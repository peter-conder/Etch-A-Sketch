/** Etch-a-sketch
 * 
 */


const containerDiv = document.createElement('div');
containerDiv.classList.add('containerDiv');
//containerDiv.textContent = "hello there";
document.body.appendChild(containerDiv);

for (let i = 0; i < 16; i++) {
const rowDiv = document.createElement('div');
rowDiv.classList.add('rowDiv');
//rowDiv.textContent = 'div';
containerDiv.append(rowDiv);

    for (let i = 0; i < 16; i++) {
        const columnDiv = document.createElement('div');
        columnDiv.classList.add('columnDiv');
        //columnDiv.textContent = 'vid';
        rowDiv.append(columnDiv);
    }
}
