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
var notebubbleLeftTop = document.querySelector(".notebubbleLeft").style.top



document.addEventListener('keypress', (event) => {
    var hitTheNote = event.key;

    if (hitTheNote == "ArrowLeft") {
        notebubbleLeft.style.display = "none"
    }
})






var notebubbleUp = document.getElementById("notebubbleUp")
function lateStart() {
    notebubbleUp.style.display = "none"
}
// function shows alert then removes notebubble in uplane after 3 seconds

const time = 3000
let late = 1 * time
setTimeout(lateStart, late)