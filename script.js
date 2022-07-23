// choices a player has 
const choices = [
    'rock',
    'paper',
    'scissors'
    ];


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const result = document.querySelector('#result');
const content = document.createElement('div');

rock.addEventListener('click', (e) => {
    game(e)
    content.classList.add('content');
    content.textContent = `You ${game_result}`

    result.append(content)
})
paper.addEventListener('click', (e) => {
    game(e)
    content.classList.add('content');
    content.textContent = `You ${game_result}`
    
    result.append(content)})
scissors.addEventListener('click', (e) => {
    game(e)
    content.classList.add('content');
    content.textContent = `You ${game_result}`
    
    result.append(content)
})

// computer picks a random choice
function computerPlay() {
    var randomChoice = choices[Math.floor(Math.random()*choices.length)];
    return randomChoice;
}

let game_result;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'paper' || playerSelection == 'scissors' && computerSelection == 'rock' || playerSelection == 'paper' && computerSelection == 'scissors') {
        game_result = 'lost';

    } else if (playerSelection == 'scissors' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'rock' && computerSelection == 'scissors') {
        game_result = 'won';
        
    } else if (playerSelection == computerSelection) {
        game_result = 'tied';
    }};

// main function where the code is run.
function game(e) {
    let playerSelection = e.target.id
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}
