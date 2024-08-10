// Calculator Program......
var displayElement = document.getElementById("display");
function appendToDisplay(input){
displayElement.value +=input;
}

function clearDisplay(){
displayElement.value="";
}

function calculate(){
    displayElement.value = eval(displayElement.value);
}
