const colors = [
    "rgb(255, 0, 0)", 
    "rgb(25, 125, 75)", 
    "rgb(125, 0, 200)",
    "rgb(50, 255, 234)",
    "rgb(0, 0, 125)",
    "rgb(150, 200, 0)"
];

let squares = document.querySelectorAll(".square");
let pickedColor = colors[3];
let colorDisplay = document.querySelector("#colorDisplay");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function () {
        let clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            alert("Correct");
        } else {
            alert("Try Again");
        }
    })
}