'use strict'

// Selecting elements 
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden')

let score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// Rolling dice functionality
btnRoll.addEventListener('click', function() {
    if(playing){
        // Generating a random dice roll
        const dice = Math.trunc(Math.random()*6) + 1;
    
        // Display the dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
    
        // Check if roll is equal to 1, if yes, switch to next player
        if(dice !== 1){
            // Add dice to current score;
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            // Switching to next player
            switchPlayer();
        }
    }
})

btnHold.addEventListener('click', function() {
    if(playing){
        // Add current score to active player's score
        score[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
    
        //Check if player's score is >= 100
        if(score[activePlayer] >= 20){
            // Finish game
            playing = false;
            diceEl.classList.remove('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else{
            // Switch to next player
            switchPlayer();
        }
    
    }
})

btnNew.addEventListener('click', function() {
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.add('hidden')

    score = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');

    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

})