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
    let years = 2;
    let hours = 22;
    let daysInYear = 365;
    let weeksInYear = 56;
    let AvgOrgDozen = 6.79;
    let AvgIndustDozen = 3.37;

function totalLay(){


    let hoursInYear = 24 * daysInYear;
    console.log(hoursInYear);

    // get total for a year times 2 for 2 years.
    let eggAmount = Math.round(hoursInYear/hours)*years;
    console.log(`Amount of eggs laid in 2 years ${eggAmount}`);

    // total amount of organic eggs over 2 years
    let OGTotal = Math.round(weeksInYear*AvgOrgDozen)*2;
    console.log(`Organic egg total for 2 years is $${OGTotal}`);

    // total amount of industrial eggs over 2 years
    let IndustTotal = Math.round(weeksInYear*AvgIndustDozen)*2;

    console.log(`Industrial egg total for 2 years is $${IndustTotal}`);

    
}