const cardArray = [
    { 
        name: "fries",
        icon: "images/fries.png"
    },
    {
        name: "chessburger",
        icon: "images/cheeseburger.png"
    },
    {
        name: "hotdog",
        icon: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        icon: "images/ice-cream.png"
    },
    {
        name: "milkshake",
        icon: "images/milkshake.png"
    },
    {
        name: "pizza",
        icon: "images/pizza.png"
    },
    { 
        name: "fries",
        icon: "images/fries.png"
    },
    {
        name: "chessburger",
        icon: "images/cheeseburger.png"
    },
    {
        name: "hotdog",
        icon: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        icon: "images/ice-cream.png"
    },
    {
        name: "milkshake",
        icon: "images/milkshake.png"
    },
    {
        name: "pizza",
        icon: "images/pizza.png"
    }
]

// selecting dom elements
const gridDisplay = document.getElementById("grid")
const cardChosen = []

const Board = () => {
    cardArray.forEach((item, id) => {
        const cardImage = document.createElement("img")
        cardImage.setAttribute("src", "images/blank.png")
        cardImage.setAttribute("data-id", id)

        // adding an even listener
        cardImage.addEventListener("click", flipCard);
        gridDisplay.appendChild(cardImage)
    });
}

const checkMatch = () => {
    const Images = document.querySelectorAll("img")

    if (cardChosen[0] == cardChosen[1]){
        alert("You win")

        cardArray[cardChosen[0]].icon.setAttribute("src", "images/white.png")
        cardArray[cardChosen[1]].icon.setAttribute("src", "images/white.png")

        // removing event listeners
        cardArray[cardChosen[0]].icon.removeEventListener("click", flipCard)
        cardArray[cardChosen[1]].icon.removeEventListener("click", flipCard)

    } else {
        alert("You lose")
    }
}


const flipCard = () => {
    const cardChosenId = this.getAttribute("data-id")
    cardChosen.push(cardChosenId)
    this.setAttribute("src", cardArray[cardChosenId].icon) // fliping the image

    if (cardChosen.length == 2){
        setTimeout(checkMatch, 500)
    }
}

Board();