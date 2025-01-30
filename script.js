const choices = document.querySelectorAll('.choice');
const resultText = document.getElementById('result-text');

choices.forEach(choice => choice.addEventListener('click', playGame));

function playGame(e) {
    const userChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = determineWinner(userChoice, computerChoice);
    displayResult(userChoice, computerChoice, winner);
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(user, computer) {
    if (user === computer) {
        return 'draw';
    } else if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        return 'user';
    } else {
        return 'computer';
    }
}

function displayResult(user, computer, winner) {
    if (winner === 'draw') {
        resultText.textContent = `It's a draw! You both chose ${user}.`;
    } else {
        resultText.textContent = `${capitalize(user)} beats ${capitalize(computer)}. ${winner === 'user' ? 'You win!' : 'Computer wins!'}`;
    }
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
