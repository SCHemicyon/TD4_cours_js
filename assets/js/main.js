let clown = document.querySelector(".imgcontainer")
let scoreContainer = document.querySelector("#score")
let mainContainer = document.querySelector("main")
let coinsound = document.querySelector("audio")
let soundContainer = document.querySelector(".soundcontainer")
let muteicon = document.querySelector("#muted")
let startbutton = document.querySelector(".start")
let endbutton = document.querySelector(".end")
let scoreboard = document.querySelector("h2")
let d1 = document.querySelector("#dI")
let d2 = document.querySelector("#dII")
let d3 = document.querySelector("#dIII")
let difficultyinterval
let difficultydelay
let compteur 
let flagvolume = true
let posX = 0
let posY = 0
let score

// fonction bouger clown
function randompos() {
    posX = (Math.random() * 85) + 10
    posY = (Math.random() * 85) + 10
    clown.style.top = posY + "%"
    clown.style.left = posX + "%"
}

//fonction animer +1
function animate1(compteur) {
    let incremental = document.createElement("p")
    clown.appendChild(incremental)
    incremental.style.color = "darkorange"
    incremental.style.fontSize = "25px"
    incremental.textContent = compteur
    incremental.style.zIndex = "10"
    incremental.animate(
        [
            // étapes/keyframes
            { transform: "translateY(0px)" },
            { transform: "translateY(-50px)" },
        ],
        {
            // temporisation
            duration: 600,
        },
    )
    setTimeout(function () { incremental.remove() }, 500)
}



//bouton mute
soundContainer.addEventListener("click", function () {
    if (flagvolume) {
        flagvolume = false
        muteicon.style.display = "block"
    }
    else {
        muteicon.style.display = "none"
        flagvolume = true
    }
})

//bouton start
startbutton.addEventListener("click", function () {
    //click sur clown
    clown.style.display = "block"
    clown.addEventListener("click", function () {
        score = score + parseInt(compteur)
        if (flagvolume) {
            coinsound.cloneNode().play()
        }

        animate1(compteur)
        scoreContainer.textContent = "Score : " + score
    })
    clown.style.position = "fixed"
    score = 0
    d1.style.backgroundColor = "green"
    d2.style.backgroundColor = "white"
    d3.style.backgroundColor = "white"
    scoreContainer.textContent = "Score : " + score
    randompos()
    startbutton.style.display = "none"
    endbutton.style.display = "block"
    compteur = "+1"
    clearInterval(difficultyinterval)
    difficultydelay = 2000
    difficultyinterval = setInterval(randompos, difficultydelay)
})

// bouton stop
endbutton.addEventListener("click", function () {
    clearInterval(difficultyinterval)
    endbutton.style.display = "none"
    startbutton.style.display = "block"
    startbutton.textContent = "Recommencer"
    scoreboard.style.display = "block"
    scoreboard.textContent = "Votre score : " + score
    clown.style.display = "none"

})

d1.addEventListener("click", function(){
    d1.style.backgroundColor = "green"
    d2.style.backgroundColor = "white"
    d3.style.backgroundColor = "white"
    compteur = "+1"
    clearInterval(difficultyinterval)
    difficultydelay = 2000
    difficultyinterval = setInterval(randompos, difficultydelay)
})
d2.addEventListener("click", function(){
    d2.style.backgroundColor = "green"
    d1.style.backgroundColor = "white"
    d3.style.backgroundColor = "white"
    compteur = "+10"
    clearInterval(difficultyinterval)
    difficultydelay = 1500
    difficultyinterval = setInterval(randompos, difficultydelay)
})
d3.addEventListener("click", function(){
    d3.style.backgroundColor = "green"
    d1.style.backgroundColor = "white"
    d2.style.backgroundColor = "white"
    compteur = "+100"
    clearInterval(difficultyinterval)
    difficultydelay = 1000
    difficultyinterval = setInterval(randompos, difficultydelay)
})





