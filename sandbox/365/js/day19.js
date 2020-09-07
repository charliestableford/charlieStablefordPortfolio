
function addArrow(){
    setTimeout( function() {
    if(movieList.isOverflowing()){
        console.log('overflow');
        arrow.innerHTML = `<span class="icon" role="img" aria-label="hand pointing to the right">👉</span>`;

    } else {
        console.log('not overflowing');
        arrow.innerHTML = ``;
    }
},500)
}

arrow.addEventListener('click', function(e){
    console.log('clicked');
    scroll = movieList.scrollWidth - movieList.clientWidth;
    mover.style.setProperty('--scroll', scroll);
    console.log(scroll);
})