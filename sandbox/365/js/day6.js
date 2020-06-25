console.log('lightbox');
const miniPic = document.querySelectorAll('img');
console.log(miniPic);
const bigPic = document.querySelector('.bigPic');

function handleClick(){
    console.log('you clicked');
    bigPic.style.display = 'block';
}

// loop over pics and add a click even to each
miniPic.forEach(pic => pic.addEventListener('click', handleClick));