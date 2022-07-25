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

document.addEventListener('keydown',(event)) {
    if (notebubbles > 520 && notebubble < 720) {
        alert ("uh oh")
    }
}