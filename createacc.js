var eyeUnsee = document.querySelector("#eye")
var password = document.querySelector("input:password")
var passwordSee = document.querySelector("input:password")


alert("Testing");

const eyeSee = document.createElementNS('p')
eyeSee.innerHTML = "hi"

function switchseen() {
    eyeUnsee.parentNode.replaceChild(eyeSee, eyeUnsee)
}

// not working but anwaysy