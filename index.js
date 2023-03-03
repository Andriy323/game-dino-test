const dino = document.querySelector("#dino");
const cactus = document.querySelector("#cactus");
const x = document.querySelector("#pretitle");
const record = document.querySelector("#record");
document.addEventListener("keydown", function (event) {
  jumpDino();
});

function jumpDino() {
  if (dino.classList !== "jump-dino") {
    dino.classList.add("jump-dino");
  }
  setTimeout(function () {
    dino.classList.remove("jump-dino");
  }, 300);
}
let y = 0;
let records = 0;
let gameOver = setInterval(function () {
  let dinoData = parseInt(
    window.getComputedStyle(dino).getPropertyValue("top")
  );
  let cactusData = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );
  if (cactusData < 70 && cactusData > 0 && dinoData >= 615) {
    y = 0;

    return alert("Ooops... Game over");
  } else {
    y += 1;
    records = records < y ? y : records;
    x.textContent = `Start: ${y}`;
    record.textContent = `Record: ${records}`;
  }
}, 30);
