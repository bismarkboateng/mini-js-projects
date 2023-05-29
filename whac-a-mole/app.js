const squares = document.querySelectorAll(".square")
const score = document.getElementById("score-result")
const timer = document.getElementById("timer-left")

let timerId = null
let result = 0
let randomSq
let hitPosition
timer.textContent = 60
score.textContent = 0
// timer = 60

const randomSquare = () => {

    squares.forEach(square => {
        square.classList.remove("mole")

    })

    randomSq = squares[Math.floor(Math.random() * 9)]
    hitPosition = randomSq.id
    randomSq.classList.add("mole")
}


function moveMole() {
    timerId = setInterval(randomSquare, 500)
}


moveMole()

squares.forEach((square) => {
    square.addEventListener("mousedown", () => {
        if (square.id === hitPosition){
            result++
            score.textContent = result
        }
    })
})