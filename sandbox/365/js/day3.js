const submit = document.querySelector('.submit');
const inputHour = document.querySelector('.inputHour');
const inputMinute = document.querySelector('.inputMinute');
const alarmSound = document.querySelector('#alarmSound');
// console.log(alarmSound);

let date = new Date();
let min = date.getMinutes();
let hour = date.getHours();

function alarming(e){
    e.preventDefault();

    //current hour and min
    console.log(hour, min);
    console.log(inputHour.value, inputMinute.value);
    //if hour and minutes is equal to each other play audio file
     
    if(inputHour.value === hour && inputMinute.value === min){
       console.log(alarmSound);
        //play audio
        // return alarmSound.play();
    }
}

submit.addEventListener('click', alarming);