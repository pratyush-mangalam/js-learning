let randomNumber = parseInt(Math.random()*100 + 1)

const submit = document.querySelector('#subt')

const userInput = document.querySelector('#guessField')

const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')

const lowHi = document.querySelector('.lowOrHi')

const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevguess = []

let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (guess < 0 || isNaN(guess)) {
        alert('Please enter a valid number')
    } else if (guess > 100){
        alert('Please enter a number less than or equal than 100')
    } else if (guess < 1){
        alert('Please enter a number greater than or equal than 1')
    } else {
        prevguess.push(guess)
        if (numGuess === 10) {
            displyGuess(guess)
            displyMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        } else {
            displyGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displyMessage(`You Guessed it right`)
        endGame()
    } else if (guess < randomNumber){
        displyMessage(`Your number is low`)
    }else if (guess > randomNumber){
        displyMessage(`Your number is high`)
    }
}

function displyGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}` 
}

function displyMessage(message) {
    lowHi.innerHTML = `<h2>${message}</h2>`
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random()*100 + 1)
        prevguess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true
    })
}

const styles = {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: '2px solid #0056b3', // Add a border
    borderRadius: '5px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
    textAlign: 'center',
    fontSize: '16px',
    fontFamily: 'Arial, sans-serif',
  };


function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    const stylesString = Object.entries(styles).map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}:${value}`).join(';');
    p.innerHTML = `<h2 id="newGame" style=${stylesString}>New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}