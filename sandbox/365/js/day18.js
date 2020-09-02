console.log('download one');

const btn = document.querySelector('.download');
console.log('btn');

let counter = 0;
const items = JSON.parse(localStorage.getItem('items'));

function handleClick(e){
    // console.log(e);
    let counting = counter++;
    console.log(counting); 

    localStorage.setItem('items', JSON.stringify(counter));
        
       
    if(counter > 1){
        alert('Sorry! This is only available for one download!');
        btn.disabled = true;    
        
         localStorage.getItem('items');

       
    }
}

btn.addEventListener('click', handleClick);
