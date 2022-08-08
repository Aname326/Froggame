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


document.addEventListener('keydown', (disappear) => {
    var hitTheNote = disappear.key;

    if (hitTheNote == "ArrowLeft") {
        notebubbleLeft.style.display = "none"
        notebubbleLeft.classList.add("animate")
    }
    else if (hitTheNote == "ArrowUp") {
        notebubbleUp.style.display = "none"
        notebubbleUp.style.add("animate")
    }
    else if (hitTheNote == "ArrowDown") {
        notebubbleDown.style.display = "none"
    }
    else if (hitTheNote == "ArrowRight") {
        notebubbleRight.style.display = "none"
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