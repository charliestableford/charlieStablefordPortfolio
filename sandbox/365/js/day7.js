console.log('working');

const display = document.querySelector('.display');
const button = document.querySelector('button');
const color = document.querySelector('.box');

// console.log(button);

function createHex(){
    let hex = '#';
    let hexcode = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

   for(let i =0; i < 6; i++){        
        let randNum = Math.random() * 16;
        let rounded = Math.floor(randNum);
        hex += hexcode[rounded];
    }
    console.log(hex); 
    color.style.backgroundColor = `${hex}`; 
return hex;
}

function returnColor(hex){
    console.log(hex);
}

// on click place the outcome of createHex in display.
button.addEventListener('click', () => display.innerHTML = createHex());
// button.addEventListener('click', returnColor);
