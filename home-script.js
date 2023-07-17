const allImages = document.querySelectorAll(".sliders-wrap img")
const navItems = document.querySelectorAll(".nav-item")
const rightArrow = document.querySelector(".next")
const leftArrow = document.querySelector(".prev")
let dishesBtn = document.querySelector(".dishes")
let currentImage = 1;
let autoSlideEnd = false;

//Fucntion for sliding Images
function navigateImage() {
    if (currentImage <= 2 && !autoSlideEnd) {
        allImages[currentImage].classList.add("active")
        currentImage += 1
    } else if (autoSlideEnd && currentImage >= 1 && currentImage !== 0) {
        allImages[currentImage].classList.remove("active")
        currentImage -= 1
    } else if (currentImage === 3 & !autoSlideEnd) {
        currentImage -= 1
        autoSlideEnd = true
    } else {
        currentImage += 1
        autoSlideEnd = false
    }
}

//  Functoon for Adding click event listeners for every navigation link
function addNavLink (navArray) {
    for(let i = 0; i < navArray.length; i++) {
        addFilePath(i,navArray)
    }
}

function addFilePath(number,navArray) {
    if(number===0) navArray[number].addEventListener("click",() => {
        window.location = "home.html"
    })
    if(number===1) navArray
    [number].addEventListener("click",() => {
        window.location = "dishes.html"
    })
    if(number===2) navArray[number].addEventListener("click",() => {
        window.location = "about.html"
    })
    if(number===3) navArray[number].addEventListener("click",() => {
        window.location = "log-in-page.html"
    })
}

addNavLink(navItems)

rightArrow.addEventListener("click", navigateImage)
leftArrow.addEventListener("click", navigateImage)
setInterval(navigateImage, 4000)


