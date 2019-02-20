// Code a loop using the usual conventions and < that tests each element of a 5-element array, answers, to see if it has the value "yes". If so, a letiable, already declared, is assigned a positive, single-digit integer. Use a number, not the array length, to limit the number of loops.

for (i=0; i<5; i++) {
    
  if (answers[i] === "yes") {
      positive = 1;
  } 
} 

//Time goal: 25 seconds. The loop is to run 10 times. Fill in the blank, using either of the 2 acceptable ways to specify the number of loops.

for ( i = 0; i<10; i++) {};
for ( i = 0; i<+9; i++) {};

//Time goal: 60 seconds. Code a loop using the usual conventions and < that displays an alert containing a string 50 times.

for ( i = 0; i < 50; i++) {
  alert("Got it already");
} 

//Time goal: 90 seconds. Code a loop using the usual conventions and < that tests each element of a 5-element array, answers, to see if it has the value "yes". If so, a letiable, already declared, is assigned a positive, single-digit integer. Use a number, not the array length, to limit the number of loops.

for (  i =0; i < 5; i++) {
  if (answers[i] === yes) {
      positive = 1;
  }
}

// Create an array with 2 number elements. Loop through the array to test whether each of the elements matches itself. (It will. ) Create an alert whose message is the element. Click the Run It button to run your code live. (Two alerts should display.)

let nums = [1, 2];
for ( i = 0; i < 2; i++) {
if (nums[i] === nums[i]) {
  alert(nums[i]);
} 
} 


//Create an array with 2 number elements. Set a for loop, limiting the number of iterations using the length keyword. Loop through the array to test whether each of the elements matches itself. (It will. ) When a match is found, display an alert with the number (it should be your first number) and stop the loop. Click the Run It button to run your code live. (Only one alert should display.)

let nums = [10, 20];
for ( i = 0; i < nums.length; i++) { 
if (nums[i] === nums[i]) {
  alert(nums[i]);
  break;
}
}

//Code nested loops. Use i and j as counters. The outer loop runs 3 times. The inner loop runs 3 times each time the outer loop iterates. Use <. With each iteration of the inner loop, an alert displays showing the sum of the two counters.

for ( i = 0; i < 3; i++) {
  for ( j = 0; j < 3; j++) {
    alert(i + j);
  }
} 

//Code an inner loop, including indentation, that displays a text message in an alert. Use any counter other than i. Declare it with the usual starting value. Run it 10 times for each outer loop iteration. Use <. Increment by 1.

for ( j = 0; j < 10; j++) {
  alert("Around and around we go.");
} 


//Code an inner loop, including indentation, that assigns a number to a letiable that has been declared beforehand. Use any counter other than i. Declare it with the usual starting value. Limit iterations by the number of elements in an array. Increment by 1.

for ( j = 0; j < someArray.length; j++) {
  cost = 99;
} 

//Code nested loops that do nothing. Start counters at zero. The outer loop runs 5 times. The inner loop runs 5 times each time the outer loop iterates. Increment by 1.

for ( i = 0; i < 5; i++) {  
  for ( j = 0; j < 5; j++) {
  }
} 

//Code nested loops. The inner loop adds the two counters and assigns the sum to a letiable that has been declared beforehand. Start counters at zero. The outer loop runs 5 times. The inner loop runs 5 times each time the outer loop iterates. Increment by 1.

for ( i = 0; i < 5; i++) {  
  for ( j = 0; j < 5; j++) {
    total = i + j; 
  }
}

/*Here are 4 lines of code.
let animals = ["goat", "cat", "crow"];
let products = ["milk", "cheese", "burger"];
let foodItems = [];
let k = 0;
Continue the code to create nested loops. The inner loop concatenates each of the elements of animals with each of the elements of products, with no space separating them. Accumulate the combinations in foodItems. The counter for foodItems is k. Limit the number of loops by the length of each array. */

for ( i = 0; i < animals.length; i++) {
  for ( j = 0; j < products.length; j++) {
    foodItems[k] = animals[i] + products[j];
    k++;
  }
} 

// Rapper generator

let firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
let lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
let fullNames = [];
for ( i = 0; i < firstNames.length; i++) {
  for ( j = 0; j < lastNames.length; j++) {
      fullNames.push(firstNames[i] + lastNames[j]);
  }
}

//In a first statement measure how many characters there are in a string represented by a variable. In a second statement slice all but the first and last characters of the string and assign it to a second variable that hasn't been declared beforehand.

let numChars = cityToCheck.length;
let seg = cityToCheck.slice(1, numChars - 1); 

// The string "elephant" has been assigned to the variable animal. Slice the four middle characters out of the string and assign it to the variable seg, which hasn't been declared beforehand.

let seg = animal.slice(2, 6); 

//Assign the first character of a string represented by a variable to a second variable that has been declared beforehand.
firstChar = name.slice(0, 1);

//In a first statement measure how many characters there are in a string represented by a variable. In a second statement slice all but the first character and last 3 characters of the string and assign it to a second variable that hasn't been declared beforehand.

let numChars = cityToCheck.length;
let seg = cityToCheck.slice(1, numChars - 3); 

//The string "boxer" has been assigned to the array element athletes[3]. Slice "x" out of the string and assign it to the variable seg, which hasn't been declared beforehand.
let seg = athletes[3].slice(2, 3); 


//Assign the number of characters in a string represented by a variable to another variable, which hasn't been declared beforehand. Then code the first line of a for statement that uses the variable as the loop limiter. Use the most common counter name, initial value, and increment.
let numChars = str.length;
for (let i = 0; i < numChars; i++) { 
}

// New Yorker does not like "World War II" with for loop
for (let i = 0; i < text.length; i++) {
   if (text.slice(i, i + 12) === "World War II") {
    text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
   }
  }

//with indexOf

let firstChar = text.indexOf("World War II"); // method returns the first index at which a given element can be found in the array, or -1 if it is not present.
  if (firstChar !== -1) { // this method assignes -1 if the variable doesn't exist
    text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
  } // text.Slice(0, x); from the beginning to the char x(not included).


//replace 

let newText = text.replace("World War II", "the Second World War"); //vew variable created
text = text.replace("World War II", "the Second World War"); // old variable modified
var newText = text.replace(/World War II/g, "the Second World War"); //all instances replaced



//Code the first line of an if statement that tests whether a 3-character slice at the beginning of a string represented by one variable can be found somewhere within a string represented by a second variable.
if (var2.indexOf(var1.slice(0, 3)) !== -1) {};

//Find the index of the first instance of a segment represented by seg in the string represented by text and assign it to the variable indx, which hasn't been declared beforehand.
var indx = text.indexOf(seg);

