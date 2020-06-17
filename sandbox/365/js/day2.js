console.log('timer');

const digitalHour = document.querySelector('.hours');
const digitalMin = document.querySelector('.minutes');
const digitalSecond = document.querySelector('.seconds');
// console.log(digitalHour, digitalMin, digitalSecond);

//get the value of the input field
// let timerSet = text.value;

// define time
function timing(){
    const current = new Date();
      // define hours
      const hour = current.getHours();
      digitalHour.innerHTML = ` ${hour} &#58;`;
      // console.log(hour);    
      
      // define minutes
    const min = current.getMinutes();
    digitalMin.innerHTML = ` ${min} &#58;`;
    // console.log(min);

    // define seconds
    let seconds = current.getSeconds();
    // digitalSecond.innerHTML = seconds;
    digitalSecond.innerHTML = ` ${seconds}`;
    // console.log(seconds);
}
//update page every second
setInterval(timing, 1000);


timing();
  

// define timer
// enter in time you want alarm to go off 
