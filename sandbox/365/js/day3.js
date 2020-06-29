const submit = document.querySelector('.submit');
const inputHour = document.querySelector('.inputHour');
const inputMinute = document.querySelector('.inputMinute');
const alarmSound = document.querySelector('#alarmSound');
const AmPm = document.querySelector('#AmPm');
// console.log(alarmSound);

// let date = new Date();
// let min = date.getMinutes();
// let hour = date.getHours();

function play(){
    alarmSound.play();
}

setInterval(function alarming(e){
    e.preventDefault();

    let date = new Date();
    let min = date.getMinutes();
    let hour = date.getHours();
    let t = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    //current hour and min
    console.log(hour, min);
    console.log(inputHour.value, inputMinute.value);
    //if hour and minutes is equal to each other play audio file
     
    if(inputHour.value == hour && inputMinute.value == min && AmPm == t){
       console.log(alarmSound);
        //play audio
        play();
        // return alarmSound.play();
    } 
    timing();
}, 5000);

//update the timing of the page every second
function timing(){
    let date = new Date();
    let min = date.getMinutes();
    console.log(min);
    let hour = date.getHours();
    console.log(hour);
}
//update page every second
setInterval(timing, 1000);



submit.addEventListener('click', alarming);