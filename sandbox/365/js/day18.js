console.log('download one');

const btns = document.querySelector('.download');
console.log('btn');

let counter = 0;
// const items = JSON.parse(localStorage.getItem('items'));


function handleClick(e){
    // console.log(e);
    let counting = counter++;
    console.log(counting); 

       
    if(counter > 1){
        alert('Sorry! This is only available for one download!');
        btns.disabled = true;    
        localStorage.setItem('items', JSON.stringify(counter));
    }
}

function setTrue(){
    
    localStorage.setItem('items',true);
    
}

function getClicks(){
    if (localStorage.getItem('items')){
        // make the button grey and change text etc. here
        // also, you said you wanted to disable it?
        document.querySelector('.download').disabled = 'disabled';
    }
    document.querySelector('.download').addEventListener('click', setTrue())
}

btns.addEventListener('click', handleClick);
  
getClicks();