const secret = (input) => {
    return input *input;
}

console.log(secret(4));

//--------------

const distance = (a,b) => {
    if (a > b) {
        return a - b;
    } else {
        return b - a;
    }
}

console.log(distance(16,10));


//--------------

const secret2 = (c) => {
    return distance(c, c*10);
}

console.log(secret2(5));


//--------------


const square = (a) => {
    return a*a;
}

const distance2 = (a,b) => {
    if (a > b) {
        return a - b;
    } else {
        return b - a;
    }
}

//--------------


//---------


const greet = () => {
    alert ('Hello');
}
setTimeout(greet, 30);

//----

setTimeout(() => {
    alert('hello');
}, 30);

//---

setInterval(() => {
    alert('hello');
}, 100);

//---



const account1 = '000256784';
const account2 = '000986056';
const account3 = '001546238';
const account4 = '030987456';

let balance1 = 790;



let userAccount = prompt('Your account number');
let userBalance = null;

        if(userAccount === account1) {
            alert('your balance is: ' + balance1);
        }
        else 



if(userAccount === account1) {
    userBalance = balance1;
        } else if(userAccount === account2) {
            userBalance = balance2;
        }

        //--------------


let userAction = prompt('Your action:');
if (userAction === 'balance') {

}