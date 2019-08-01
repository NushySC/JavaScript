let randomBodyParts = [ "face", "hands", "feet", "fingers", "belly" ];
let randomAdjectives = [ "fat", "floppy", "ugly", "stinky", "stupid"];
let randomAnimals = [ "monkey", "pig", "dog", "cat", "snake" ];

let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 5)];
let randomAdjective = randomAdjectives[Math.floor(Math.random() * 5)];
let randomAnimal = randomAnimals[Math.floor(Math.random() *5)];


const randomInsult = () => {
    console.log(`Your ${randomBodyPart} are like a ${randomAdjective} ${randomAnimal}!!`)
}

randomInsult()

