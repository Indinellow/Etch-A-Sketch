function getRandomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function turnBlack(){
    this.style.backgroundColor='black';
    this.style.opacity=1;
}

function turnWhite(){
    this.style.backgroundColor='white';
    this.style.opacity=1;

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
        onePixel.addEventListener('mouseover',turnBlack);
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
    const nodePixels = document.querySelectorAll('.pixel');
    arrayPixels = Array.from(nodePixels);
    arrayPixels.forEach(onePixel => {
        onePixel.style.backgroundColor='white';
        onePixel.style.opacity=1;
    })}

function erasePixels(){
    const nodePixels = document.querySelectorAll('.pixel');
    arrayPixels = Array.from(nodePixels);
    arrayPixels.forEach(onePixel => {
        onePixel.removeEventListener('mouseover',turnColor);  
        onePixel.removeEventListener('mouseover',turnBlack);
        onePixel.addEventListener('mouseover',turnWhite);
    })

}



function colorPixels(){
    const nodePixels = document.querySelectorAll('.pixel');
    arrayPixels = Array.from(nodePixels);
    arrayPixels.forEach(onePixel => {
        onePixel.removeEventListener('mouseover',turnColor);  
        onePixel.removeEventListener('mouseover',turnWhite);
        onePixel.addEventListener('mouseover',turnBlack);
    })
}

function turnColor(){
    this.style.backgroundColor = chosenColor;
    this.style.opacity=1;

}

function selectColor(event){
    chosenColor=event.target.value;
    const nodePixels = document.querySelectorAll('.pixel');
    arrayPixels = Array.from(nodePixels);
    arrayPixels.forEach(onePixel => {
        onePixel.removeEventListener('mouseover',turnColor);  
        onePixel.removeEventListener('mouseover',turnWhite);  
        onePixel.removeEventListener('mouseover',turnBlack);  
        onePixel.addEventListener('mouseover',turnColor);
    }

)}

function turnRainbow(){
    let Rvalue = getRandomIntFromInterval(1,255);
    let Gvalue = getRandomIntFromInterval(1,255);
    let Bvalue = getRandomIntFromInterval(1,255);
    if(this.style.backgroundColor === "" || this.style.backgroundColor=== 'white'){
        this.style.backgroundColor=`rgb(${Rvalue}, ${Gvalue}, ${Bvalue})`;
    }
    else{
    rgb = this.style.backgroundColor
    rgb=rgb.replace(/[^\d,]/g, '').split(',');
    Rvalue = parseInt(rgb[0])*0.85;
    Gvalue = parseInt(rgb[1])*0.85;
    Bvalue = parseInt(rgb[2])*0.85;
    this.style.backgroundColor=`rgb(${Rvalue}, ${Gvalue}, ${Bvalue})`;
    }
}

function rainbowPixels(){
    const nodePixels = document.querySelectorAll('.pixel');
    arrayPixels = Array.from(nodePixels);
    arrayPixels.forEach(onePixel => { 
        onePixel.removeEventListener('mouseover',turnWhite);  
        onePixel.removeEventListener('mouseover',turnBlack); 
        onePixel.removeEventListener('mouseover',turnColor);
        onePixel.addEventListener('mouseover',turnRainbow);
    });
}

let chosenColor='black';
let size =16;
let RGBRandom = new Array(size*size).fill(0).map(() => new Array(3).fill(0));
let RGBToBlack = new Array(size*size).fill(0).map(() => new Array(3).fill(0));
const eventfunctions={};
let rgb;
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

const rainbowButton = document.querySelector('#Rainbow');
rainbowButton.addEventListener('click',rainbowPixels);

//dodat dinamicni slider za pick a size, npr ko: https://www.google.com/search?q=photoshop+brush+size&client=ubuntu&hs=6SG&channel=fs&sxsrf=AOaemvLbFyJIYtOR2r8jfz56T7p73KTn3A:1640460237321&tbm=isch&source=iu&ictx=1&fir=_nVW42OGnbhXqM%252C79jVJ_NJMin6nM%252C_&vet=1&usg=AI4_-kRA6EhL2cW05lvIWeyadG5bFLWh8w&sa=X&ved=2ahUKEwjm5tnN1v_0AhUVhP0HHfFwAsYQ9QF6BAgMEAE&biw=1704&bih=901&dpr=2#imgrc=_nVW42OGnbhXqM


