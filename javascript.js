/* input JavaScript code here! */
function display() {
    document.getElementById("no_display").style.display = "block";
    document.getElementById("button").style.display = "none";
    setTimeout( function() { hide(); }, 3000);
}

function hide() {
    document.getElementById("no_display").style.display = "none";
    document.getElementById("button").style.display = "block";
}