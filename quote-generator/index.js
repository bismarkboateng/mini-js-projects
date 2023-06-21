const quoteText = document.querySelector(".quote")
const quoteAuthor = document.querySelector(".quote-author")
const newQuoteBtn = document.querySelector(".add-quote")


const quote = [
    {
        text: "The best way to predict the future is to invent it",
        author: "Alan kay"
    },
    {
        text: "Code is like humor. When you have to explain it, it’s bad",
        author: "Cory House"
    },
    {
        text: "The computer was born to solve problems that did not exist before",
        author: "Bill Gates"
    },
    {
        text: "Simplicity is the soul of efficiency",
        author: "Edsger Dijkstra"
    },
    {
        text: "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack of will",
        author: "Vince Lombardi"
    },
    {
        text: "The computer is incredibly fast, accurate, and stupid. Man is incredibly slow, inaccurate, and brilliant. The marriage of the two is a force beyond calculation",
        author: "Leo Cherne"
    }
]

newQuoteBtn.addEventListener("click", generateRandomQuote)


function generateRandomQuote() {
    const randomNumber = Math.floor(Math.random() * quote.length)
    const randomQuote = quote[randomNumber]

    quoteText.innerHTML = randomQuote.text
    quoteAuthor.innerHTML = randomQuote.author

    console.log(randomQuote)
}