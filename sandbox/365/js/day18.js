console.log('download one');

const btn = document.querySelector('.download');
console.log('btn');

function handleClick(e){
    console.log(e);
    let counting = e;
    counting = counting + 1;
    console.log(counting);
    
}

btn.addEventListener('click', handleClick);