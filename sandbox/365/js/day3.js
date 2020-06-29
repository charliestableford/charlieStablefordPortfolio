const submit = document.querySelector('.submit');
const inputHour = document.querySelector('.inputHour');
const inputMinute = document.querySelector('.inputMinute');
const alarmSound = document.querySelector('#alarmSound');
const AmPm = document.querySelector('#AmPm');
// console.log(alarmSound);

function play(){
    alarmSound.play();
}

function scheduleAlarm(e) {

    e.preventDefault();
  
    let inputHour = document.querySelector('.inputHour').value;
    let inputMinute = document.querySelector('.inputMinute').value;
    let NightDay = document.querySelector('#AmPm').value;

    setInterval(function(){
      
      let date = new Date;
  
      let hours = date.getHours();  
      let minutes = date.getMinutes();
      let AmPm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; 
      
      if (inputHour == hours && inputMinute == minutes && NightDay == AmPm){
        play();
      }
    }, 5000); 
    
  }

  submit.addEventListener('click', scheduleAlarm);