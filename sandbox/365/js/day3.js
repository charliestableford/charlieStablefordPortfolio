const submit = document.querySelector('.submit');
const inputHour = document.querySelector('.inputHour');
const inputMinute = document.querySelector('.inputMinute');

let date = new Date();
let min = date.getMinutes();
let hour = date.getHours();

submit.addEventListener('click', async function(e){
    e.preventDefault();
    console.log(hour, min);
    // console.log(e);
    //if hour and minutes is equal to each other play audio file
    if(inputHour === hour.value && inputMinute === min.value){
        // console.log(alarmSound);
        //play audio
        return alarmSound.play();
    }
});