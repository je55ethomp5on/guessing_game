var randomNumber = getRandomNumber(5);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1; 
  return num;
}

do {
  guess = prompt('I am thinking of a random number between 1 and 5. What is it? Each time you\'re wrong, I pick a new number!')
  console.log(guessCount += 1);
  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
  }
} while ( ! correctGuess ) 
  document.write('<h1>You guessed it!</h1>');
  document.write('It took you ' + guessCount + ' tries to guess the number ' + randomNumber);
