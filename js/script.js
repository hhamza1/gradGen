var body = document.getElementsByTagName("body")[0];
var gradCol = document.querySelector("h3");
var firstColor = document.querySelector(".fColor");
var secondColor = document.querySelector(".sColor");

function setGradColors() {
    body.style.background = "linear-gradient(to right," + firstColor.value + "," + secondColor.value + ")";
    gradCol.textContent = body.style.background + ";";
}

firstColor.addEventListener("change", setGradColors);
secondColor.addEventListener("change", setGradColors);