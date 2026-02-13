// Variables
let noBtn = document.getElementById("noBtn");
let yesBtn = document.getElementById("yesBtn");

let noSize = 1;
let yesSize = 1;

// Ir a pantalla de pregunta
function goToQuestion() {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("question").classList.remove("hidden");
}

// Cuando presiona NO
function sayNo() {

  // Hacer que el botón NO se haga más pequeño
  noSize -= 0.2;
  noBtn.style.transform = `scale(${noSize})`;

  // Hacer que el botón SÍ se haga más grande
  yesSize += 1;
  yesBtn.style.transform = `scale(${yesSize})`;

  // Mover botón NO a posición random
  let x = Math.random() * (window.innerWidth - 100);
  let y = Math.random() * (window.innerHeight - 50);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

// Cuando presiona SÍ
function sayYes() {
  document.getElementById("question").classList.add("hidden");
  document.getElementById("final").classList.remove("hidden");

  startHearts();
  startStar();
}

function startHearts() {
  const container = document.getElementById("hearts-container");

  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "💗";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";

    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);

  }, 300);
}

function startStar() {
  const container = document.getElementById("star-container");

  setInterval(() => {
    const star = document.createElement("div");
    star.classList.add("star");
    star.innerText = "✨";

    star.style.left = Math.random() * 100 + "vw";
    star.style.fontSize = Math.random() * 20 + 15 + "px";

    container.appendChild(star);

    setTimeout(() => {
      star.remove();
    }, 4000);
  }, 300);
}