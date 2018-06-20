
const botao = document.querySelector("button");
botao.onclick = comecar;
let listaImg = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];
const img = document.querySelectorAll("img");

function comecar(){
    for(let imagem in img){
        img[imagem].src = `animais/${listaImg[imagem]}.png`;
    }
    setTimeout(esconderTodos, 5000);
}

function esconderTodos(){
    const esconde = document.querySelectorAll("img");
    for(let imagem in esconde){
        esconde[imagem].src= `animais/fundo.jpg` ;
    }
}

/*function vira(){
    img[].src
}*/

function desvira(){

}

function verifica(){

}