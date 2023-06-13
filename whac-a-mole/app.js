const squares = document.querySelectorAll(".square")
const score = document.getElementById("score-result")
const timer = document.getElementById("timer-left")

let timerId = null
let result = 0
let randomSq
let hitPosition
timer.textContent = 10
score.textContent = 0

let currentTime = 10

const randomSquare = () => {
    squares.forEach(square => {
        square.classList.remove("mole")
    })

    randomSq = squares[Math.floor(Math.random() * 9)]
    hitPosition = randomSq.id
    randomSq.classList.add("mole")
}


const moveMole = () => {
    timerId = setInterval(randomSquare, 500)
}

moveMole()

squares.forEach((square) => {
    square.addEventListener("mousedown", () => {
        if (square.id === hitPosition){
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})


const countDown = () => {
    currentTime--
    timer.textContent = currentTime

    if(currentTime == 0) {
        clearInterval(timerId)
        clearInterval(countDownTimerId)
        alert("Game Over!, Your score is: " + result)
    }

}

let countDownTimerId = setInterval(countDown, 1000)