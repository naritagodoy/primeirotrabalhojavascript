// ator

let yAtor = 367;
let xAtor = 85;
let colisao = false;
let meusPontos = 0;


function mostraAtor(){
    image(imagemDoAtor,xAtor,yAtor,30, 30);
  }


function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -=2;
  }
  
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor +=2;
    }
    }
}
function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    Colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 10)
    if (Colisao){
      voltaAtorPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()){
      meusPontos -=1;}
    }
  }
}
function voltaAtorPosicaoInicial(){
  yAtor = 367;
  
}

function incluiPontos(){
  textAlign(CENTER)
  textSize(25)
  fill(color(255, 255, 0))
  text(meusPontos, width / 5, 27);
  
}

function marcaPontos(){
  if (yAtor < 20){
    meusPontos +=1;
    somDoPonto.play();
    voltaAtorPosicaoInicial();
  }
  }
function pontosMaiorQueZero(){
  return meusPontos > 0
}
function podeSeMover(){
  return yAtor < 367;
}