let timeSelector = document.querySelector(".timer")
let bubble = document.querySelector(".bubble")
let ground = document.querySelector(".ground")
let chekBox = document.querySelector("#check")
let label = document.querySelector(".button")
let round = document.querySelector(".round")
let FinalScore = document.querySelector(".score")
let time = 60
var increseScore = 0

function loadBubble(){
    let loadedBubble = ""
    for(let i=0; i<=160; i++){
        let x = Math.floor(Math.random()*10)
        loadedBubble += `<div class="bubble">${x}</div>`
    }
    ground.innerHTML = loadedBubble
}


function Timer(){
  let timeRun =  setInterval(() => {
    
    if(time > 0){
        timeSelector.innerHTML = time -= 1
    }else{
        clearInterval(timeRun)
        ground.innerHTML = `<div class="end "><h2>Game Over</h2>
                            <p >your score : ${FinalScore.innerHTML}</p>
                            <button type="button" onClick="restart()">Re-Start</button></div>`
                             
                     
    }
   }, 1000)
}




function score(){
    increseScore += 10
    document.querySelector(".score").innerHTML = increseScore
}

function generateHit(){
    let hit = Math.floor(Math.random()*10)
    document.querySelector(".hit").innerHTML = hit
}


document.querySelector(".ground").addEventListener("click", function(a){
     let hitvalue = document.querySelector(".hit").innerHTML
     if(hitvalue == a.target.innerHTML){
        generateHit()
        loadBubble()
        score()
     }
})



function start(){
    loadBubble()
    Timer()
    generateHit()
}

start()
function restart(){
    start()
    time = 60
    document.querySelector(".end").style.display = "none"
}

