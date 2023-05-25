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


// first create a function to append all the images in the array 
// under the dom node #grid
// add click even listeners to each of the images 

// on the call to the event listener, create an array to store the clicked images
// get their ids, and flip the images by resetting their src attributes 
// to the required images using array indexing


// for checking a match, we need to look for both ids and see if they are equal
// if so, we alert the use for a win, we reset the attributes to blank images and remove the event listeners


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


const flipCard = () => {
    const cardChosenId = this.getAttribute("data-id")
    cardChosen.push(cardChosenId)
    this.setAttribute("src", cardArray[cardChosenId].icon) // fliping the image

    if (cardChosen.length == 2){
        if (cardChosen[0] === cardChosen[1]) {
            alert("You win")
            this.setAttribute("src", "images/white.png") // resetting the image to white
        }
    }
}

Board();