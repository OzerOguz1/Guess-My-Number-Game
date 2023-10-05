'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const playGame = document
  .querySelector('.check')
  .addEventListener('click', function () {
    const guess = document.querySelector('.guess').value;
    console.log(guess, typeof guess);

    if (!guess) {
      displayMessage('Hey! Where is the number?');
      // When player wins
    } else if (guess == secretNumber) {
      document.querySelector('.number').textContent = secretNumber;
      displayMessage('🎉 Correct Answer!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? 'Too high 📈!' : 'Too low 📈!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('You lost the game!! 💣');
        document.querySelector('.score').textContent = 0;
      }
    }
  });

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
