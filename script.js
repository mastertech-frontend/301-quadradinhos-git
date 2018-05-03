let quadrados = document.querySelectorAll(".interna");

let cores = ["blue","red","yellow","green"]

function aleatorio(min, max){
  return Math.floor(Math.random() * (max-min+1)) + min;
}

function trocarCor(){
  let cor = aleatorio(0,3);
  this.style.backgroundColor = cores[cor];
}

for(let quadrado of quadrados){
  quadrado.onmouseenter = trocarCor;
}
