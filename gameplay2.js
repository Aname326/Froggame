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

var notebubbleLeft = document.querySelector(".notebubbleLeft")
var notebubbleUp = document.getElementById("notebubbleUp")
var notebubbleDown = document.getElementById("notebubbleDown")
var notebubbleRight = document.getElementById("notebubbleRight")
var notbubbles = document.getElementsByClassName("notebubbles")
// all the notebubble variables

var pleasantRate = 0
console.log(pleasantRate)

