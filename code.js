let size =16;
let dimensions=512/size;
const drawingContainer = document.querySelector('.drawingContainer')
drawingContainer.style.gridTemplateColumns=`repeat(${size}, ${dimensions}px) `;
drawingContainer.style.gridTemplateRows=`repeat(${size}, ${dimensions}px) `;

createPixels(size);
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
        onePixel.addEventListener('mouseover',()=>{
            onePixel.classList.add('turnblack')
        });
    }
}}

function setSize(){
    const chosenSize =parseInt( prompt('Pick a size n: ','16'));
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
const sizeButton = document.querySelector('#setSize');
sizeButton.addEventListener('click',resizePixels)


/*
let pixels=new Array(size);
for (let i=0;i<pixels.length;i++){
    pixels[i]=new Array(size);
}
*/