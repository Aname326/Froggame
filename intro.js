document.addEventListener('keyup',(event) => {
    var menu = event.key;


    if (menu === "a") {
        open('menu.html')
    } 
    else if (menu === "A") {
        open('menu.html')
    }
})
// when press "a" or "A" it opens menu page in a new tab


var confirm = document.querySelector("#confirm")
var string = document.querySelector("#try")
var instruction = document.getElementById("instructions")

instruction.style.display = "none"
// instructions doesn't show at the start

function instructions() {
    instruction.style.display
}