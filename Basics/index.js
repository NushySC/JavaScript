// Values, variables, arithmetics

// Salary 1
// Let your salary as a programmer by 20€ per hour. Using the command line compute your monthly salary if you work 8 hours a day 21 days a month.
// What is your salary after 25% taxing? Use floating point numbers to work with percents (25% = 0.25).



let monthlySalary = (wage, hours, days) => {
    console.log (wage * hours * days);
}

monthlySalary(20, 8, 21);

let taxedMonthlySalary = (wage, hours, days) => {
    console.log ((wage * hours * days) *0.75);
}

taxedMonthlySalary(20, 8, 21);

let payPerMonth = taxedMonthlySalary();

let payPerday = (wage, hours) => {
    console.log(wage * hours);
}

payPerday(8, 20);


// Salary 2
// This week you worked 9 hours on Monday, 7 hours on Tuesday, 5.5 hours on Wednesday, 6 hours on Thursday and 2 hours on Friday. How many hours did your work on average per day?
// Construct a string which will say something like

// Your avarege salary is: 2500 euro

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


// Functions

// Birth year
// Ask the user for his birth year using the prompt function. Convert the result into a number by calling parseInt. Compute the users age using the current year. Alert a message to the user reporting his age using the alert function.

const birthday = () => {
    let birthYear = prompt ('Which year were you born?');
    return 2018 - parseInt(birthYear);
}

let age = birthday();

const tellmeAge = () => {
    alert ('You are ' + age);
}

tellmeAge();

// Currency exchange
// The current exchange rate from czech crownd to euro is 25.695. Get a value from the user in euros and output equivalent value in czech crownds. Ruond the result to whole crownds using the Math.round function.
let czs = 25.6;

const czsToEuro = () => {
    let euro = prompt('How many euros do you want to convert?');
    console.log(euro * czs);
}

czsToEuro();

// Random numbers
// The function Math.random output a random floating point number between 0 and 1. Figure out how to use this function to draw whole numbers from 0 to 5.
// Figure out how to simulate a dice roll with Math.random(). Beware that this functions returns random floating point numbers between 0 and 1 but we want to have integers between 1 and 6. Thus, you have to unleash some maths of rounding and shifting the result of Math.random() to produce the desired result.

const drawNumbers = () => {
   console.log(Math.floor(Math.random() * 6) +1);
}

drawNumbers();

// Writing your Own Functions

// Mathematical functions
// Write a function square which takes a number as an input and return the square of that number.
// Write a function called hypotenuse which takes two numbers a and b and return the square root of a2 + b2. Use the Math.sqrt function to compute the square root and use your square function to compute the squares.

const squareNumber = () => {
    let number = prompt('Which number do you want to square?');
    console.log(number * number);
}

squareNumber();

const hypotenuse = () => {
    let numberA = prompt("Write number A");
    let numberB = prompt("Write number B");
    console.log( (numberA * numberA) + (numberB * numberB));
}

hypotenuse();

