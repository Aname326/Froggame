document.addEventListener('keyup',(event) => {
    var menu = event.key;


    if (menu === "a") {
        open('menu1.html')
    } 
    if (menu === "A") {
        open('menu1.html')
    }
})
// when press "a" or "A" it opens menu page in a new tab