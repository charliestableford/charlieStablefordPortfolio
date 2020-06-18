console.log('timer');

const digitalHour = document.querySelector('.hours');
const digitalMin = document.querySelector('.minutes');
const digitalSecond = document.querySelector('.seconds');
const submit = document.querySelector('.submit');
const alarmSound = document.querySelector('#alarmSound');
const inputHour = document.querySelector('.inputHour');
const inputMinute = document.querySelector('.inputMinute');
const inputTwo= document.querySelector('.inputTwo');
// console.log(digitalHour, digitalMin, digitalSecond);

//get the value of the input field
// let timerSet = text.value;

// define time
function timing(){
    const current = new Date();
      // define hours
      let hour = current.getHours();
      // if current hour is greater than 12 pm if less am.
      let AmPm = hour >= 12 ? 'pm' : 'am';
      // take the time and divide it by 12. If time = 0 then let equal 12.
      hour = (hour % 12) || 12;
      digitalHour.innerHTML = ` ${hour} &#58;`;
      // console.log(hour);    
      
      // define minutes
    const min = current.getMinutes();
    digitalMin.innerHTML = ` ${min} &#58;`;
    // console.log(min);

    // define seconds
    let seconds = current.getSeconds();
    // digitalSecond.innerHTML = seconds;
    digitalSecond.innerHTML = ` ${seconds}` + AmPm;
    // console.log(seconds);



}
//update page every second
setInterval(timing, 1000);

