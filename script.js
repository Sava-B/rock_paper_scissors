// choices a player has 
const choices = [
    'rock',
    'paper',
    'scissors'
    ];

let score = 0;
let game_result;

// make the buttons variables
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// edits divs and makes new ones
const result = document.querySelector('#result');
const content = document.createElement('div');
const score_content = document.createElement('div');


// function that displays the score and game result
const scoreResultDisplay = (e) => {
    game(e)
    content.classList.add('content');
    content.textContent = `You ${game_result}`

    score_content.classList.add('score_content');
    score_content.textContent = `The score is ${score}`;

    result.append(content);
    result.append(score_content);

}

const checkScore = () => {
    if (score >= 5) {
        score_content.textContent = 'You won! Congrats!';
        content.textContent = '';
        result.append(score_content);
    } 
}

// event listeners for each button, and functions get called
rock.addEventListener('click', (e) => {
    scoreResultDisplay(e)
    checkScore()
})

paper.addEventListener('click', (e) => {
    scoreResultDisplay(e)
    checkScore()
})

scissors.addEventListener('click', (e) => {
    scoreResultDisplay(e)
    checkScore()

})

// computer picks a random choice
const computerPlay = () => {
    var randomChoice = choices[Math.floor(Math.random()*choices.length)];
    return randomChoice;
}

// finds out if player won or not
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection == 'rock' && computerSelection == 'paper' || playerSelection == 'scissors' && computerSelection == 'rock' || playerSelection == 'paper' && computerSelection == 'scissors') {
        game_result = 'lost';

    } else if (playerSelection == 'scissors' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'rock' && computerSelection == 'scissors') {
        game_result = 'won';
        score ++;
        
    } else if (playerSelection == computerSelection) {
        game_result = 'tied';
    }};

// main function where the code is run.
const game = (e) => {
    let playerSelection = e.target.id
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}
