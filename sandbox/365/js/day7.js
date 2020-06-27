console.log('working');

let hexcode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
const display = document.querySelector('.display');
let button = document.querySelector('button');
// console.log(button);

function createHex(index){
    let hex = '#';

   for(let i =0; i < 6; i++){        
       console.log(index);
        let randNum = Math.random() * 9;
        let rounded = Math.floor(randNum);
        hex += hexcode[rounded];
    }
return hex;
}

button.addEventListener('click', createHex);