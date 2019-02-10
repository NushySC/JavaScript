let randomNumber = () =>
{      
        let limit = parseInt(prompt("What do you want your limit to be?"));

    console.log(Math.floor(
        Math.random() * limit ) + 1);
}

randomNumber();

