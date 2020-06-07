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