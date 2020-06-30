console.log('day nine');
// a chicken will lay an egg every 22 hours for 2 years

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
    // per month
    let feed = 15;
    let coop = 500;
    //minutes per day
    let chores = 10;
    //$25/hr for your hourly rate
    let yourHourlyRate = 25;
    let years = 2;
    let hours = 22;
    let daysInYear = 365;
    let weeksInYear = 56;
    let AvgOrgDozen = 6.79;
    let AvgIndustDozen = 3.37;
    //per 2 years
    let avgEggsEaten = (56 *12)*2;
    console.log(`average amount of eggs eatten in a year ${avgEggsEaten}`);

function totalLay(){

    let hoursInYear = 24 * daysInYear;
    // console.log(hoursInYear);

    // get total for a year times 2 for 2 years.
    let eggAmount = Math.round(hoursInYear/hours)*years;
    let laidDozens = Math.round(eggAmount/12);
    console.log(`Amount of eggs laid in 2 years ${eggAmount} and amount of dozens is ${
        laidDozens
    }`);

    // total amount of organic eggs over 2 years
    let OGTotal = Math.round(weeksInYear*AvgOrgDozen)*2;
    console.log(`Organic egg total for 2 years is $${OGTotal}`);

    // total amount of industrial eggs over 2 years
    let IndustTotal = Math.round(weeksInYear*AvgIndustDozen)*2;

    console.log(`Industrial egg total for 2 years is $${IndustTotal}`);
   
}

function totalBackYardChick(){
    // yourHourlyRate * 4 = amount of yearly chores
    let total = (chickenCost * 3) + coop + ((chores * 7)*yourHourlyRate) + (yourHourlyRate *4);
    console.log(`the total for your backyard chick is $${total}`);
}