console.log('download one');

const btn = document.querySelector('.download');
console.log('btn');

function handleClick(e){
    console.log(e);
}

btn.addEventListener('click', handleClick);