/* input JavaScript code here! */

var button = document.querySelector("button");
var image = document.getElementById("no_display")

function display() {
    image.style.display = "block";
    button.style.display = "none";
    setTimeout( function() { hide(); }, 3000 );
}

function hide() {
    image.style.display = "none";
    button.style.display = "block";
}