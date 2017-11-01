var colors = [
    "rgb(255, 0, 0)", 
    "rgb(25, 125, 75)", 
    "rgb(125, 0, 200)",
    "rgb(50, 255, 234)",
    "rgb(0, 0, 125)",
    "rgb(150, 200, 0)"
];

var squares = document.querySelectorAll(".square");
var pickedColor = pickedColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add event listeners to squares
    squares[i].addEventListener("click", function () {
        //grab color of clicked squares
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct";
            changeColors(clickedColor);
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        };
    });
};

function changeColors(color) {
    //loop through all squares
  for(var i = 0; i < squares.length; i++) {
      //change each color to match given color
      squares[i].style.backgroundColor = color;
  }
};

function pickedColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}