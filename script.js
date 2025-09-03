/*
Demonstrates:
-scope
-parameters & Return values
-Animations
*/
// Global variables (scope example)
let box = document.getElementById("box");
let button =
document.getElementById("animationsBtn");

// Function with parameters & return value
function changeBoxColor(newColor) {
    box.style.backgroundColor = newColor;
    return 'Box color chsnged to ${newColor}';
}

// function to trigger animation
function animateBox() {
    // Add animations class
    box.classList.add("Active");

    // Log the return value of function 
    console.log(changeBoxColor("purple"));

    //Remove class after animation ends (to allow re-trigger)
    setTimeout(() => {
        box.classList.remove("active");
        changeBoxColor("steelblue"); // reset color
},100);
}

// event listener (functional logic)
button.addEventListener("click", animateBox);