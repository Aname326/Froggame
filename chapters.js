document.addEventListener('keyup',(event) => {
    var menu = event.key;


    if (menu === "a") {
        open('index.html')
    } 
    else if (menu === "A") {
        open('index.html')
    }
})
// when press "a" or "A" it opens menu page in a new tab


function bgm() {
    let BGM = new sound ("the-cursed-8.mp3")
    BGM.play()
}

var musicBtn = document.getElementById("musicBtn")

document.addEventListener('click', bgm)