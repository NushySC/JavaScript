let words = [
	'coding',
	'development',
	'education',
	'technology',
	'programming',
	'javascript',
	'directory',
	'react',
	'component'
];

const successScenario = (correctAnswerArray, chosenWord) => {
	alert(correctAnswerArray.join(''));
	alert('Good job! The answer was ' + chosenWord);
};

const chooseRandomWord = wordsArray => {
	return wordsArray[Math.floor(Math.random() * wordsArray.length)];
};

const checkLetter = (arrayOfCorrectLettersInOrder, chosenWord, playerGuess) => {
	for (let j = 0; j < chosenWord.length; j++) {
		if (chosenWord[j] === playerGuess) {
			arrayOfCorrectLettersInOrder[j] = playerGuess;
			remainingLetters--;
		}
	}
};

const createAnswerArray = chosenWord => {
	let arr = [];

	for (let i = 0; i < chosenWord.length; i++) {
		arr[i] = '_';
	}

	return arr;
};

const gameLogic = (correctAnswerArray, playerGuess, chosenWord) => {
	if (playerGuess === null) {
		return;
	} else if (playerGuess.length !== 1) {
		alert('Please enter a letter');
	} else {
		checkLetter(correctAnswerArray, chosenWord, playerGuess);
	}
};

let word = chooseRandomWord(words);

let answerArray = createAnswerArray(word);

let remainingLetters = word.length;

if (window.confirm('Do you want to play a game?')) {
	while (remainingLetters > 0) {
		alert(`Guess this word ${answerArray.join(' ')}`);
		let guess = prompt('Guess a letter, or click Cancel to stop playing');
		gameLogic(answerArray, guess, word);
	}
	successScenario(answerArray, word);
}
