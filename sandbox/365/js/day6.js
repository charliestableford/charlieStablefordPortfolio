console.log('lightbox');
const miniPic = document.querySelectorAll('img');
console.log(miniPic);
const bigPic = document.querySelector('.bigPic');
const awesome = document.querySelector('.fa-times');

function handleClick(event){
        console.log(event.currentTarget);
        const { id } = event.currentTarget;
        console.log(`you clicked ${id}`);

        
        // add style to each clicked.
        bigPic.style.display = 'block';
        awesome.style.display = 'block';
        
  
    }


// loop over pics and add a click even to each
miniPic.forEach(pic => pic.addEventListener('click', handleClick));
awesome.addEventListener('click', function(e){
    console.log('close click');
    bigPic.style.display = 'none';
    awesome.style.display = 'none';
});