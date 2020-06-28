console.log('day eight');

const before = document.querySelector('.before');
const after = document.querySelector('.after');
const add = document.querySelector('.add');
const subtract = document.querySelector('.subtract');

const arr = ['🍏', '🍇', '🍅', '🍑', '🍌', '🍉', '🍊', '🥭'];
const copy = [];

function displayArr(){

    let ul = document.createElement('ul');
    before.appendChild(ul);

    arr.forEach(function(arr){
        let li = document.createElement('li');
        let button = document.createElement('button');
        ul.appendChild(li);
        li.appendChild(button);

        button.innerHTML += arr; 
        
        button.addEventListener('click', adding)
    })

    // arr.forEach(fruit => console.log(fruit));

    // arr.forEach(fruit => after.innerHTML = fruit);

}

function adding(e){
    // console.log(e);
    //get value of what you click
    let clicking = e.currentTarget;
    console.log(clicking);
    // take that value and put it into the new array.

    console.log('added');
    
    let ul = document.createElement('ul');
    after.appendChild(ul);

    let li = document.createElement('li');
    let button = document.createElement('button');
    ul.appendChild(li);
    li.appendChild(button);

    button.innerHTML += copy; 
        

    }





function subtracting(){
    console.log('subtract');
}

window.addEventListener('load', displayArr());

add.addEventListener('click', adding);
subtract.addEventListener('click', subtracting);
// button.addEventListener('click', () => display.innerHTML = createHex());




