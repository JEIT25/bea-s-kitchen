const navItems = document.querySelectorAll(".nav-item")
//  Functoon for Adding click event listeners for every navigation link
function addNavLink (navArray) {
    for(let i = 0; i < navArray.length; i++) {
        addFilePath(i,navArray)
    }
}

function addFilePath(number,navArray) {
    if(number===0) navArray[number].addEventListener("click",() => {
        window.location = "index.html"
    })
    if(number===1) navArray[number].addEventListener("click",() => {
        window.location = "dishes.html"
    })
    if(number===2) navArray[number].addEventListener("click",() => {
        window.location = "about.html"
    })
    if(number===3) navArray[number].addEventListener("click",() => {
        window.location = "log-in.html"
    })
}

addNavLink(navItems)
