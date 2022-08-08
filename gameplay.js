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
var notebubbleUp = document.getElementById("notebubbleUp")


document.addEventListener('keydown', (disappear) => {
    var hitTheNote = disappear.key;

    if (hitTheNote == "ArrowLeft") {
        notebubbleLeft.style.display = "none"
    }
    else if (hitTheNote == "ArrowUp") {
        notebubbleUp.style.display = "none"
    }
})
// when click arrow left, notebubbleLeft disappears







function lateStart() {
    notebubbleUp.style.display = "none"
}
// function shows alert then removes notebubble in uplane after 3 seconds

const time = 3000
let late = 1 * time
setTimeout(lateStart, late)