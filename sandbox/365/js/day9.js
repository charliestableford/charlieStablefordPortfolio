console.log('day nine');

let numChicks = document.querySelector('.numChicks');
// let yourHourlyRate = document.querySelector('.yourHourlyRate');
let organicSelect = document.querySelector('.org');
let group = document.querySelector('.numPpl');
let feedSelect = document.querySelector('.eat');
let eatEggs = document.querySelector('.eatEggs');
let answer = document.querySelector('.answer');
let submit = document.querySelector('.submit');


// a chicken will lay an egg every 22 hours for 2 years

// if you eat more than ...

// $30/chicken 🐣
// feed is $15/month🌽
// misc $10/month
//coop - one time cost $500 🏠
// time - each day to chores for the chickens 10 minutes ⏰
// 4 hours per year - winterizing and cleaning the pen🧹🔨

// avg person eats a dozen eggs a week

//organic eggs $6.79
// industrial eggs $3.37
    let chickenCost = 30;
    let coop = 500;
    let years = 2;
    let hours = 22;
    let daysInYear = 365;
    let weeksInYear = 56;
    let monthsInYear = 12;
    //minutes per day times days per week
    let chores = (10 * 7) * monthsInYear;
    let AvgOrgDozen = 6.79;
    let AvgIndustDozen = 3.37;
    //per 2 years
    let avgEggsEaten = (56 *12)*2;
    console.log(`average amount of eggs eatten in a year ${avgEggsEaten}`);

    function handleSubmit(e) {
        e.preventDefault();
        
        eggsTotal();
        numOfChick();
        total();
    }

    function eggsTotal(){
        let howManyEggs =eatEggs.options[eatEggs.selectedIndex].value;
        let org = organicSelect.options[organicSelect.selectedIndex].value;

        let tot = Math.round(((howManyEggs * org)*monthsInYear)*years);
        console.log(`your total eggs for the year would cost $${tot}`);
        return tot;
    }

    function numOfChick(){
         let grade =feedSelect.options[feedSelect.selectedIndex].value;
         //update variable hourly rate
        // yourHourlyRate = yourHourlyRate.value;

        let numOfPplSharing = group.options[group.selectedIndex].value;
        let chickens = numChicks.value;

        let totCost= Math.round(((chickens * chickenCost) +coop+ ((grade * monthsInYear)*years))/numOfPplSharing);
        
        console.log(`the total cost for your backyard chicks is $${totCost}`);
    }


    function total(totCost, tot){

        let lost = totCost - tot;
        let saving = tot-totCost;

        if(totCost <= tot){
            console.log('Its worth it!');
            answer.innerHTML = `You would be saving $${saving} if you get backyard chickens!`;
        } else {
            console.log('just buy eggs');
            answer.innerHTML = `Just buy eggs - you'd be losing $${lost}`;
        }
    }

function totalLay(){

    let hoursInYear = 24 * daysInYear;

    // get total for a year times 2 for 2 years.
    let eggAmount = Math.round(hoursInYear/hours)*years;
    let laidDozens = Math.round(eggAmount/12);
    console.log(`Amount of eggs laid in 2 years ${eggAmount} and amount of dozens is ${
        laidDozens
    }`);
}


// function totalBackYardChick(){
//     // yourHourlyRate * 4 = amount of yearly chores
//     let total = (chickenCost * 3) + coop + (((chores * 7)*yourHourlyRate)*2) + ((yourHourlyRate *4)*2) + ((feed *12)*2);
//     console.log(`the total for your backyard chick is $${total}`);
// } chicken

function storeBoughtTotal(){
    // total amount of organic eggs over 2 years
    let OGTotal = Math.round(weeksInYear*AvgOrgDozen)*2;
    console.log(`Organic egg total for 2 years is $${OGTotal}`);

    // total amount of industrial eggs over 2 years
    let IndustTotal = Math.round(weeksInYear*AvgIndustDozen)*2;

    console.log(`Industrial egg total for 2 years is $${IndustTotal}`);
}


submit.addEventListener('click', handleSubmit);


