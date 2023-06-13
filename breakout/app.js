const grid = document.querySelector(".grid")
const scoreDisplay = document.querySelector("#score")

const blockWidth = 100
const blockHeight = 30
const userStart = [230, 10]
const boardWidth = 600
const boardHeight = 300
const ballStart = [260, 30]

let ballPosition = ballStart
let currentPosition = userStart
let timerId
let xDirection = -2
let yDirection = 2
let ballDiameter = 20
let score = 0

// class to create a block
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}

const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),

    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),

    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210)
]

const addBlocks = () => {
    for (let i=0; i<blocks.length; i++) {
        const block = document.createElement("div")
        block.classList.add("block")
        block.style.left = blocks[i].bottomLeft[0] + "px"
        block.style.bottom = blocks[i].bottomLeft[1] + "px"
        grid.appendChild(block)
    }
}

addBlocks()

const user = document.createElement("div")
user.classList.add("user")
// this sets the initial position of the current user
drawUser()
grid.appendChild(user)


// to paint the user block on screen
function drawUser() {
    user.style.left = currentPosition[0] + "px"
    user.style.bottom = currentPosition[1] + "px"    
}

// create a ball element to play 
const ball = document.createElement("div")
ball.classList.add("ball")
drawBall()
grid.appendChild(ball)


// to paint the ball to the screen
function drawBall() {
    ball.style.left = ballPosition[0] + "px"
    ball.style.bottom = ballPosition[1] + "px"
}


// function called to move the user
function moveUser(event) {
    switch(event.key) {
        case "ArrowLeft":
            if (currentPosition[0] > 0) {
                currentPosition[0] -= 10
                drawUser()
            }
            break;
        case "ArrowRight":
            if (currentPosition[0] < boardWidth - blockWidth) {
                currentPosition[0] += 10
                drawUser()
            }
            break;
    }
}checkForCollision()



moveBall()

function moveBall() {
    ballPosition[0] += xDirection
    ballPosition[1] += yDirection
    drawBall()
    checkForCollision()
}

timerId = setInterval(moveBall, 20)

// adding event listener to move the user
document.addEventListener("keydown", moveUser)

function checkForCollision() {
    // check for block collision
    for (let i=0; i<blocks.length; i++) {
        if (
            (ballPosition[0] > blocks[i].bottomLeft[0] && 
             ballPosition[0] < blocks[i].bottomRight[0]) && 
            ((ballPosition[1] + ballDiameter) > blocks[i].bottomLeft[1] && 
             ballPosition[1] < blocks[i].topLeft[1]
            )
        ) {
            const allBlocks = Array.from(document.querySelectorAll(".block"))
            allBlocks[i].classList.remove("block")
            blocks.splice(i, 1)
            changeDirection()
            score++
            scoreDisplay.textContent = score

            // check for win
            if (blocks.length === 0) {
                scoreDisplay.textContent = "You Win"
                clearInterval(timerId)
                document.removeEventListener("keydown", moveUser)
            }
        }
    }


    if (ballPosition[0] >= (boardWidth - ballDiameter) ||
        ballPosition[1] >= (boardHeight - ballDiameter)
    ) {
        changeDirection()
    }

    // check for user collisions
    if ((ballPosition[0] > currentPosition[0] && 
        ballPosition[0] < currentPosition[0] +  blockWidth) && 
        (ballPosition[1] > currentPosition[1] && ballPosition[1] < currentPosition[1] + blockHeight)
       ) {
         changeDirection()
       }
       

    if (ballPosition[1] <= 0) {
        clearInterval(timerId)
        scoreDisplay.textContent = "You lose"
        document.removeEventListener("keydown", moveUser)
    }
}


function changeDirection() {
    if (xDirection === 2 && yDirection === 2) {
        yDirection = -2
        return
    }
    if (xDirection === 2 && yDirection === -2) {
        xDirection = -2
        return
    }
    if (xDirection === -2 && yDirection === -2) {
        yDirection = 2
        return 
    }
    if (xDirection === -2 && yDirection === 2) {
        xDirection = 2
        return
    }
}