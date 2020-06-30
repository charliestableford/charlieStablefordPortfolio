console.log('day nine');
// a chicken will lay an egg every 22 hours for 2 years

// $30/chicken 🐣
// feed is $15/month🌽
// misc $10/month
//coop - one time cost $500 🏠
// time - each day to chores for the chickens 10 minutes ⏰
// 4 hours per year - winterizing and cleaning the pen🧹🔨

//organic eggs $6.79
// industrial eggs $3.37

function totalLay(){
    let years = 2;
    let hours = 22;
    let daysInYear = 365;

    let hoursInYear = 24 * daysInYear;
    console.log(hoursInYear);

    // get total for a year times 2 for 2 years.
    let eggAmount = Math.round(hoursInYear/hours)*years;
    console.log(eggAmount);

    // total amount of organic eggs over 2 years
    let OGTotal = Math.round(eggAmount/ 12)*6.79;
    console.log(`Organic egg total is ${OGTotal}`);

    // total amount of industrial eggs over 2 years
    let IndustTotal = Math.round(eggAmount/ 12)*3.37;

    console.log(`Industrial egg total is ${IndustTotal}`);

    
}