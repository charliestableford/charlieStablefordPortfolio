console.log('download one');

const btn = document.querySelector('.download');
console.log('btn');

let counter = 0;

function handleClick(e){
    // console.log(e);
    let counting = counter++;
    console.log(counting); 
}

btn.addEventListener('click', handleClick);