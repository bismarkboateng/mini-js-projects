const allBoxElement = document.querySelectorAll(".box")

allBoxElement.forEach((box) => {
    box.addEventListener("click", () => {
        // document.body.style.backgroundClip = "red";
        console.log("Worked tho")
    })
});