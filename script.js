let quadrados = document.querySelectorAll(".interna");

function trocarCor(){
  this.style.backgroundColor = "blue";
}

for(let quadrado of quadrados){
  quadrado.onmouseenter = trocarCor;
}
