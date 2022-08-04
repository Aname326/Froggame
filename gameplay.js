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

var notebubbleLeft = document.getElementById("notebubbleLeft")
var notebubbleLeftTop = document.getElementsByClassName("notebubbleLeft").getPropertyValue("top")
console.log(notebubbleLeftTop)





//function 'commentfied' to test the setInterval function Line31-34,36-38
var notebubbleUp = document.getElementById("notebubbleUp")
//function lateStart() {
//    alert ("workss")
//    notebubbleUp.style.display = "none"
//}
// function shows alert then removes notebubble in uplane after 3 seconds
//const time = 3000
//let late = 1 * time
//setTimeout(lateStart, late)