console.log('scroll working');

let progress = document.querySelector('#progressbar');
// this will be updating
let scrollTop = window.scrollY;
let viewportHeight = document.body.clientHeight - window.innerHeight;
let scrollPercent = (scrollTop/viewportHeight)*100;

progress.setAttribute('value', scrollPercent);
console.log(progress);

window.addEventListener('scroll', function(){
    //update scrolTop
    scrollTop = window.scrollY;
    viewportHeight = document.body.clientHeight - window.innerHeight;
    scrollPercent = (scrollTop/ viewportHeight)*100;
    progress.setAttribute('value', scrollPercent);
});

// from day 4 javascript experiment
console.log('scrolling');

const amount = document.body;
const rootElement = document.documentElement;
const li = document.querySelector('li>a');
const ul = document.querySelector('ul');
const nav = document.querySelector('nav');


// call immediately
window.onscroll = function(){
    headerHighlight();
}

function headerHighlight(){
    console.log(rootElement);
    if(amount.scrollTop > 100 || rootElement.scrollTop > 100 ){
        nav.style.backgroundColor= `rgba(241, 59, 57, .75)`;
        nav.style.borderRadius=`100px`;
        nav.style.zIndex=`10`;

    } else {
        nav.style.backgroundColor = `transparent`;
    }
}