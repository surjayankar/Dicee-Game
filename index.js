var randomNumber1= Math.floor(Math.random()*6) + 1;
var randomDiceImage1= "dice"+randomNumber1+".png";
var randomImageSource1= "images/"+randomDiceImage1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);
var randomNumber2=Math.floor(Math.random()*6) + 1;
var randomDiceImage2= "dice"+randomNumber2+".png";
var randomImageSource2= "images/"+ randomDiceImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2); 
if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
} 
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}

// Add roll-animation class to trigger rolling animation
image1.classList.add("roll-animation");
image2.classList.add("roll-animation");

// Remove roll-animation class after the animation is completed
setTimeout(function() {
    image1.classList.remove("roll-animation");
    image2.classList.remove("roll-animation");
}, 500); // 500ms should match the duration of your roll animation


// JavaScript code to toggle dark mode
const body = document.body;
const darkModeToggle = document.getElementById("darkModeToggle"); // Assuming you have a button with id="darkModeToggle"

// Check user preference from localStorage
const isDarkMode = localStorage.getItem("darkMode") === "enabled";

// Set initial theme based on user preference
if (isDarkMode) {
    body.classList.add("dark-mode");
}

// Toggle dark mode on button click
darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    
    // Update user preference in localStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});
