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


const grid = document.getElementById("grid")
// looping through the cardArray and creating an element


const createBoard = () => {
    cardArray.forEach((item, i) => {
        cardImage = document.createElement("img")
        cardImage.setAttribute("src", "images/blank.png")
        cardImage.setAttribute("data-id", i)
        cardImage.addEventListener("click", flipCard);
        grid.appendChild(cardImage)
    });
}

createBoard();