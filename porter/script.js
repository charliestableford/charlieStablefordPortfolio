console.log('in');

const descript = document.querySelector('.description');
const list = document.querySelector('.list');
const download = document.querySelector('.download');
const purpose = document.querySelector('.purpose');
const vidDescript = document.querySelector('.vidDescript');

function setHTML(){
    download.innerHTML = `
        download PDF
    `;

    descript.innerHTML = `
        <span class="bold">Hello Porter team!</span><br><br> Welcome to <a href="./index.html" class="cLink">Charlie Stableford's</a> redesign challenge.<br><br> 
        `;

    purpose.innerHTML = `
        The purpose of this interface is to allow Porter to see an overview of the steps taken during the challenge as well as see the final video of the finished design.<br><br> 
    `;

    list.innerHTML = `
    <ul>
    <li><span>Defining challenge (steps)</span></li>
    <li><span class="left">01 - Context</span><span class="right">What and why is this a problem? Emphasize with the user.</span></li>
    <li><span  class="left">02 - Challenge goals</span><span class="right"> Set goals and microgoals for the challenge. This is done in order to stay on task.</span></li>
    <li><span class="left">03 - Assumptions and constraints</span><span class="right">Setting out assumptions made that affect the outcome of the testing. Listing constraints that may affect or alter testing.</span></li>
    <li><span class="left">04 - User testing</span><span class="right">Outlining process for testing, key points and takeaways.</span></li>
    <li><span class="left">05 - Blue sky </span><span class="right">What are some functions that users would like if the sky was the limit?</span<</li>
    <li><span class="left">06 - Notes for developers</span> Feedback that users gave specific to developers, aside from design.</li>
    <li><span class="left">07 - User personas</span><span class="right">Identifying 3 users, their stories and wants.</span></li>
    <li><span class="left">08 - Task flow</span><span class="right">My process of rebuilding a task flow with sticky notes and then a low fidelity flow.</span></li>
    <li><span class="left">09 - Wireframing</span><span class="right">Initial sketches and low fidelity screens.</span></li>
    <li><span class="left">10 - Paper prototyping </span><span class="right"> Description of my process and constraints with this form of testing.</span></li>
    <li><span class="left">11 - Notes on high fidelity mock ups</span><span class="right">Notes on my process before seeing final screen design.</span></li>
    <li><span class="left">12 - High fidelity revision</span><span class="right">The screens progression as my hypothesis's were tested on users. Designs subsequently changed.</span></li>
    <li><span class="left">13 - Colour palette</span></li>
    <li><span class="left">14 - Key screens</span></li>
    <li><span class="left">15 - High fidelity screen flow</span><span class="right">Showing the screens progressions from the expanded flow that I defined.</span> </li>
    <li><span class="left">16 - Outcome and conclusion</span><span class="right">Were my goals achieved?</span></li>
    </ul>
    `;

    vidDescript.innerHTML = `
        <span>High fidelity mock up video:</span>
    `;
}

document.addEventListener('DOMContentLoaded', setHTML);