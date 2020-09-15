console.log('in');

const descript = document.querySelector('.description');
const list = document.querySelector('.list');


function setHTML(){
    descript.innerHTML = `
        Hello Porter team! Welcome to Charlie Stableford's redesign challenge. 
        `;
    list.innerHTML = `
    <div>Steps taken during challenge - a quick look</div>
    <ul>
    <li>Define challenge</li>
    <li>Context - What and why is this a problem? Emphasize with the user.</li>
    <li>Challenge goals - Set goals and microgoals for the challenge. This is done in order to stay on task.</li>
    <li>Challenge goals - Set goals and microgoals for the challenge. This is done in order to stay on task.</li>
    </ul>
    `;
}

document.addEventListener('DOMContentLoaded', setHTML);