console.log('scrolling');

const amount = document.body;
const rootElement = document.documentElement;
const li = document.querySelector('.list');
const ul = document.querySelector('ul');
const nav = document.querySelector('nav');


// call immediately
window.onscroll = function(){
    headerHighlight();
}

function headerHighlight(){
    console.log(rootElement);
    if(amount.scrollTop > 100 || rootElement.scrollTop > 100 ){
        nav.style.backgroundColor= `#0f4c81`;
    } else {
        nav.style.backgroundColor = `#b5c7d3`;
    }
}
