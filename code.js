
function turnblack(){
    this.style.backgroundColor='black';
}

function turnwhite(){
    this.style.backgroundColor='white';
}

function createPixels(size){
for (let i=1;i<=size;i++){
    for (let j=1;j<=size;j++){
        const onePixel= document.createElement('div');
        onePixel.classList.add('pixel');
        onePixel.style.height=`${dimensions}`
        onePixel.style.width=`${dimensions}`
        onePixel.textContent=``;
        drawingContainer.appendChild(onePixel);
        onePixel.style.gridRow= i;
        onePixel.style.gridColumn=j;
        onePixel.addEventListener('mouseover',turnblack);
    }
}}

function setSize(){
    let chosenSize =parseInt( prompt('Pick a size n: ','16'));
    if(chosenSize>100){
        alert('That is too big of a size, pick again!');
        chosenSize=setSize();
    }
    return chosenSize
}

function resizePixels(){
    while(drawingContainer.firstChild){
        drawingContainer.removeChild(drawingContainer.lastChild)
    }
    size=setSize();
    dimensions=512/size
    drawingContainer.style.gridTemplateColumns=`repeat(${size}, ${dimensions}px) `;
    drawingContainer.style.gridTemplateRows=`repeat(${size}, ${dimensions}px) `;
    createPixels(size);
}

function clearPixels(){
    const nodePixeli = document.querySelectorAll('.pixel');
    arrayPixeli = Array.from(nodePixeli);
    arrayPixeli.forEach(jedanPixelic => {
        jedanPixelic.style.backgroundColor='white';
    })}

function erasePixels(){
    const nodePixeli = document.querySelectorAll('.pixel');
    arrayPixeli = Array.from(nodePixeli);
    arrayPixeli.forEach(jedanPixel => {
        jedanPixel.removeEventListener('mouseover',turnblack);
        jedanPixel.addEventListener('mouseover',turnwhite);
    })

}



function colorPixels(){
    const nodePixeli = document.querySelectorAll('.pixel');
    arrayPixeli = Array.from(nodePixeli);
    arrayPixeli.forEach(jedanPixel => {
        jedanPixel.removeEventListener('mouseover',turnwhite);
        jedanPixel.addEventListener('mouseover',turnblack);
    })
}

function selectColor(event){
    const nodePixeli = document.querySelectorAll('.pixel');
    arrayPixeli = Array.from(nodePixeli);
    arrayPixeli.forEach(jedanPixel => { 
        jedanPixel.removeEventListener('mouseover',turnwhite);  
        jedanPixel.removeEventListener('mouseover',turnblack);  
        jedanPixel.addEventListener('mouseover',()=>{
            jedanPixel.style.backgroundColor = event.target.value;
        });
    }

)}


let size =16;
let dimensions=512/size;
const drawingContainer = document.querySelector('.drawingContainer')
drawingContainer.style.gridTemplateColumns=`repeat(${size}, ${dimensions}px) `;
drawingContainer.style.gridTemplateRows=`repeat(${size}, ${dimensions}px) `;
createPixels(size);

const sizeButton = document.querySelector('#setSize');
sizeButton.addEventListener('click',resizePixels);

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click',clearPixels);

const eraseButton = document.querySelector('#eraser');
eraseButton.addEventListener('click',erasePixels);

const colorButton = document.querySelector('#colorButton');
colorButton.addEventListener('click',colorPixels);

const colorInput = document.querySelector('#colorInput');
colorInput.addEventListener('input',selectColor);

