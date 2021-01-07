'use strict';

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess){
        displayMessage('Enter a number!');
    }else if(guess === secretNum){
        displayMessage('Correct!');
        document.querySelector('.number').textContent = secretNum;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }else if(guess !== secretNum){
        if(score > 1){
            displayMessage(guess > secretNum ? 'Too high!' : 'Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            displayMessage('You lost!');
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretNum = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});

