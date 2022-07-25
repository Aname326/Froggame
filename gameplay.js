document.addEventListener('keyup',(event) => {
    var menu = event.key;


    if (menu == "a") {
        open('menu.html')
    } 
    else if (menu == "A") {
        open('menu.html')
    }
})
// when press "a" or "A" it opens menu page in a new tab


var notebubbles = document.getElementsByClassName("notebubbleLeft")

document.addEventListener('keydown',(pass) => {
    var test = pass.key;

    if (test == "ArrowLeft" && notebubbles >= 520 && notebubbles <= 720) {
        alert ("uh oh :0");
    } 
})