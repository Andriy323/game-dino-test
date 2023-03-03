const dino = document.querySelector("#dino")
const cactus = document.querySelector('#cactus')
document.addEventListener("keydown", function(event){
    jumpDino()
})

function jumpDino ()  {
if(dino.classList !== "jump-dino"){
    dino.classList.add("jump-dino")

}
setTimeout(function(){
    dino.classList.remove("jump-dino")

},300)
}

let gameOver = setInterval(function (){
    let dinoData = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
    let cactusData = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))
if(cactusData < 70 && cactusData > 0 && dinoData >= 210){
return alert("Ooops... Game over")
}
},10)