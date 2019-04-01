const numbers = [15, 4, 11, 27, 56, 10, 4, 7, 14, 25, 66, 33];
const users = ['martha', 'eve', 'johnny', 'thedude', 'onyxx', 'dagesus', 'duckling44'];
const furniture = [
  {
    name: 'Table',
    price: 100,
    available: true,
  },
  {
    name: 'Chair',
    price: 20,
    available: false,
  },
  {
    name: 'Bookshelf',
    price: 55,
    available: true,
  },
  {
    name: 'Sofa',
    price: 1200,
    available: true,
  },
  {
    name: 'Coffeetable',
    price: 45,
    available: false,
  },
  {
    name: 'Bed',
    price: 800,
    available: false,
  },
  {
    name: 'Nightstand',
    price: 12,
    available: true,
  },
];


let square = numbers.map( x => x * x);
let lengthUs = users.map( users => users.length);
let list = users.map(user => {
    document.createElement('li');
    list.textContent = user;
    return li;
}).forEach(li => usersElm.appenChild(li));

let evens = numbers.filter(i => i%2 == 0);
let odds = numbers.filter(i => i%2 != 0);

let prices = furniture.map(furniture => furniture.price);


let cheaper = furniture.filter(furniture => furniture.price < 120);
let available = furniture.filter( furniture => furniture.available = true);

let stringOfNumbers = numbers.reduce((acc,x) => [x, ...acc], []);
let totalPrice = furniture.reduce((acc, price) => [price, ...acc], [] );


// Given an array of potential voters, return an object representing the results of the vote. Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.




const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
  ];
   
  const voterResults = (arr) => {
    // your code here
  }
   
  console.log(voterResults(voters)); // Returned value shown below:
  /*
  { 
    youngVotes: 1,
    youth: 4,
    midVotes: 3,
    mids: 4,
    oldVotes: 3,
    olds: 4 
  }
  */


