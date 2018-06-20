
const botao = document.querySelector("button");
let listaImg = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];
const img = document.querySelectorAll("img");
let carta1 = 0;
let carta2 = 0;
let controle = 0;

botao.onclick = comecar;


function comecar(){
    for(let imagem in img){
        img[imagem].src = `animais/${listaImg[imagem]}.png`;
    }
    setTimeout(esconderTodos, 1000);
}

function esconderTodos(){
    const esconde = img;
    for(let imagem in esconde){
        esconde[imagem].src= `animais/fundo.jpg` ;
    }
}

function clicarImagem(){
    for(let imagem of img){
        imagem.onclick = vira;
    }
}

clicarImagem();


function desvira(){
    img[carta1].src = `animais/fundo.jpg`;
    img[carta2].src = `animais/fundo.jpg`;
}


function verificar(){
    if(img[carta1].src !== img[carta2].src){
        setTimeout(desvira, 1000);
    }
}

function vira(){
    let indice = this.name;
    this.src = `animais/${listaImg[indice]}.png`;
    if(controle % 2 === 0){
        carta1 = indice;
    }
    else{
        carta2 = indice;
        if(carta1 !== 0 && carta2 !==0){
            verificar();
        }
    }
    controle++;    
}


