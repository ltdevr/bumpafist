const square = document.querySelectorAll('.square')
const fist = document.querySelectorAll('.fist')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('fist')
    })
    let randomPostion = square[Math.floor(Math.random() * 9)]
    randomPostion.classList.add('fist')

    //assign the id of the randomPostion to hitPosition for us to use later
    hitPosition = randomPostion.id
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition){
            result = result + 1
            score.textContent = result
        }
    })
})


function moveFist() {
    let timerId = null
    timerId = setInterval(randomSquare, 1000)
}

moveFist()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime === 0) {
        clearInterval(timerId)
        // alert('GAME OVER! Your final score is ' + result)
        gameOver();
    }
}

//Reset game
function resetGame() {
    result = 0;
    currentTime = 60;
    score.textContent = result;
    timeLeft.textContent - currentTime;
}

//Game over
function gameOver() {
    alert('GAME OVER! Your final score is ' + result)

    //Ask if user wants to play again
    const playAgain = confirm('Do you want to play again?');

    if (playAgain) {
        resetGame();
        moveFist();
        timerId = setInterval(countDown, 1000);
    } else {
        clearInterval(timerId);
    }
}

function startGame() {
    resetGame();
    moveFist();
    timerId = setInterval(countDown, 1000);
}

function pauseGame() {
    clearInterval(timerId);
}

function endGame() {
    clearInterval(timerId);
    alert('Game ended. Your final score is ' + result);
}

// moveFist();

// let timerId = setInterval(countDown, 1000)
