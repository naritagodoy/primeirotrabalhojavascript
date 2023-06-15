// carro

let xCarros = [400, 400, 400, 400, 400, 400]
let yCarros = [40, 100,157, 215, 270, 320]
let velocidadeCarros = [2, 3, 4, 2.7, 3.3, 5.5]
let comprimentoCarro = 40;
let alturaCarro = 30; 

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
  }

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i = i+ 1){
    xCarros[i] -= velocidadeCarros[i];
  }
  } 

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i< imagemCarros.length; i = i + 1){
    if (passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
  }
  }
  }

function passouTodaATela(xCarros){
  return xCarros < -40;
}


