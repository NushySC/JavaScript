// Calculates bruto and neto salaries and shows an alert

const wage = 20;
const hours = 8;
const days = 21;
const tax = 0.25;

function calcNeto() {
    return wage * hours * days * (1-tax);
}

function calcBruto() {
    return wage * hours * days;
}

const neto = calcNeto();
const bruto = calcBruto();

function tellSalary () {
    alert("Your neto salary is " + neto);
    alert("Your neto salary is " + bruto);
}

tellSalary();

// Average

const monday  = 9;
const tuesday = 7;
const wednesday = 5.5;
const thrusday = 6;
const friday = 2;


function averageTime() {
    return (monday + tuesday + wednesday + thrusday + friday) / 2;
}

const averageDay = averageTime();

function tellMeDay() {
    alert ("You have worked an average of " + averageDay + " this week.");
}

tellMeDay();


//Which one is a better salary? Round your computed salary from previous exerices to the nearest euro. Use function Math.max() to tell you which salary is better. - (This just resturn a number.)

// const wage = 20;
// const hours = 8;
// const days = 21;
// const tax = 0.25;

function calcSalary1() {
    return wage * hours * days * (1-tax);
}

const wage2 = 20;
const hours2 = 6;
const days2 = 26;
const tax2 = 0.20;

function calcSalary2() {
    return wage2 * hours2 * days2 * (1-tax2);
}

const salary1 = calcSalary1();
const salary2 = calcSalary2();

function bestSalary() {
    if (salary1 >salary2) {
        alert("You better work 21 days a month");
    } else {
        alert("You better get the lowest tax posible");
    }
}

bestSalary();


Math.max(salary1, salary2);


// Dice

function rollDice() {
    return Math.round (Math.random() * 5) + 1;
}

const roll = rollDice();

function myDice() {
    alert("You got " + roll );
}

myDice();

//
