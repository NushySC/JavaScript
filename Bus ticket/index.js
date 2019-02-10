// Let's say that the basic price for a bus ticket is 12 euro. Create a page which will ask the user for their age and compute a discounted price according to these rules:
// age under 6 years (preschool kids): 0 euro,
// age between 6 and 15 (pupils): 35% of the basic price,
// age between 16 and 26 (students): 65% of the basic price,
// age between 27 and 64 (adults): 100% of the basic price,
// otherwise (seniors): 50% of the basic price.


let basicBus = 12;

let discountedPrice = () => {
    let age = prompt('What is your age?');
    if (age <6) {
        alert ("You don\'t need to pay");
    } else if (age >=6 && age <= 15) {
        alert ("Your price is " +  Math.floor(basicBus * (0.35)));
    } else if (age >=16 && age <= 26) {
        alert ("Your price is " + Math.floor(basicBus * (0.65)));
    } else if (age >=127 && age <= 64) {
        alert ("Your price is " + basicBus);
    } else {
        alert ("Your price is " + basicBus * (0.50));
    }
};

discountedPrice();