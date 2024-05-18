window.onload = function(){
 
  var stage = document.getElementById('stage');
  var ctx = stage.getContext("2d");
  document.addEventListener("keydown", keyPush);
  setInterval(game, 80);

  const vel = 1;

  var vx = vy = 0;
  var px =10;
  var py = 15;
  var tp = 30;
  var qp = 20;
  var ax=ay=15;

  var trail = [];
  tail = 5;

  function game(){
      px += vx;
      py += vy;
      if (px <0) {
          px = qp-1;
      }
      if (px > qp-1) {
          px = 0;
      }
      if (py < 0) {
          py = qp-1;
      }
      if (py > qp-1) {
          py = 0;
      }

      ctx.fillStyle = "black";
      ctx.fillRect(0,0, stage.width, stage.height);

      ctx.fillStyle = "red";
      ctx.fillRect(ax*tp, ay*tp, tp,tp);

      ctx.fillStyle = "gray";
      for (var i = 0; i < trail.length; i++) {
          ctx.fillRect(trail[i].x*tp, trail[i].y*tp, tp-1,tp-1);
          if (trail[i].x == px && trail[i].y == py)
          {
              vx = vy=0;
              tail =5;
          }
      }

      trail.push({x:px,y:py })
      while (trail.length > tail) {
          trail.shift();
      }

      if (ax==px && ay==py){
          tail++;
          ax = Math.floor(Math.random()*qp);
          ay = Math.floor(Math.random()*qp);
      }

  }

  function keyPush(event){

      switch (event.keyCode) {
          case 37: // Left
              vx = -vel;
              vy = 0;
              break;
          case 38: // up
              vx = 0;
              vy = -vel;
              break;
          case 39: // right
              vx = vel;
              vy = 0;
              break;
          case 40: // down
              vx = 0;
              vy = vel;
              break;          
          default:
              
              break;
      }


  }

}

/*

//-------------------------------------------

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const score =document.querySelector(".score--value")
const finalScore = document.querySelector(".final-score > span")
const menu = document.querySelector(".menu-screen")
const buttonPlay = document.querySelector(".btn-play")


const size = 30

const snake = [
  {x: 270, y: 240},
  {x: 300, y: 240},
  {x: 330, y: 240},
  {x: 360, y: 240},
  {x: 390, y: 240},
  {x: 420, y: 240},
]

const incrementScore = () => {
  score.innerText = parseInt(score.innerText) + 10
}

const randomNumber = (min, max) =>{
  return Math.floor(Math.random() * (max - min) + min)
}

const randomPosition = () => {
  const number = randomNumber(0, canvas.width - size)
  return Math.round(number / 30 * 30)
}



const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;



//-------------------------------------------
window.onload = function () {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  document.addEventListener("keydown", keyDownEvent);
  let x = 8;
  setInterval(desenharJogo, 1000 / x);
};

let canvas;
let ctx;

//Tratamento de Teclas
function keyDownEvent(event) {
  // nextX e nextY representam as direções que a cobra irá percorrer
  // nos eixos X e Y, respectivamente
  switch (event.keyCode) {
    case 37:
      nextX = -1;
      nextY = 0;
      break;
    case 38:
      nextX = 0;
      nextY = -1;
      break;
    case 39:
      nextX = 1;
      nextY = 0;
      break;
    case 40:
      nextX = 0;
      nextY = 1;
      break;
  }
}


//Desenha a Snake-Run

let defaultTamanhoCauda = 3;
let tamanhoCauda = defaultTamanhoCauda;
let caminhoCobra = [];
let cobraEixoX = cobraEixoY = 10;



//Criação da tela de jogo

let tamanhoTela = tamanhoCaminho = 20;
let nextX = nextY = 0;

//Criando Comida

let appleX = (appleY = 15);

//"Update da Screen"

function desenharJogo() {
  cobraEixoX += nextX;
  cobraEixoY += nextY;

  if (cobraEixoX < 0) {
    cobraEixoX = tamanhoTela - 1;
  }

  if (cobraEixoX > tamanhoTela - 1) {
    cobraEixoX = 0;
  }

  if (cobraEixoY < 0) {
    cobraEixoY = tamanhoTela - 1;
  }

  if (cobraEixoY > tamanhoTela - 1) {
    cobraEixoY = 0;
  }

}

//Se a cobra comer o alimento

if (cobraEixoX == appleX && cobraEixoY == appleY) {
  tamanhoCauda++;
  appleX = Math.floor(Math.random() * tamanhoTela);
  appleY = Math.floor(Math.random() * tamanhoTela);
}

//Snack to-go-to

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = "green";
for (let i = 0; i < caminhoCobra.length; i++) {
  ctx.fillRect(
    caminhoCobra[i].x * tamanhoCaminho,
    caminhoCobra[i].y * tamanhoCaminho,
    tamanhoCaminho,
    tamanhoCaminho
  );
  if (caminhoCobra[i].x == cobraEixoX && caminhoCobra[i].y == cobraEixoY) {
    tamanhoCauda = defaultTamanhoCauda;
  }
}

ctx.fillStyle = "red";
ctx.fillRect(appleX * tamanhoCaminho, appleY * tamanhoCaminho, tamanhoCaminho, tamanhoCaminho);

caminhoCobra.push({
  x: cobraEixoX,
  y: cobraEixoY
});
while (caminhoCobra.length > tamanhoCauda) {
  caminhoCobra.shift();
}
*/