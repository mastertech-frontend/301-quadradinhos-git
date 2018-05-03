let quadrados = document.querySelectorAll(".interna");

let cores = ["blue","red","yellow","green"]

function aleatorio(min, max){
  return Math.floor(Math.random() * (max-min+1)) + min;
}

function verificar(){
  let cor0 = quadrados[0].style.backgroundColor;
  let cor1 = quadrados[1].style.backgroundColor;
  let cor2 = quadrados[2].style.backgroundColor;
  let cor3 = quadrados[3].style.backgroundColor;

  if(cor0 === cor1 && cor1 === cor2 && cor2 === cor3){
    for(let quadrado of quadrados){
      quadrado.onmouseenter = null;
    }

    alert("Você venceu!");
  }
}

function trocarCor(){
  let cor = aleatorio(0,3);
  this.style.backgroundColor = cores[cor];

  verificar();
}

for(let quadrado of quadrados){
  quadrado.onmouseenter = trocarCor;
}
