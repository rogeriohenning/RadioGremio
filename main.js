function tocaSomVitoria(){
    document.querySelector('#som_tecla_vitoria').play();
}
const listaDeTeclas= document.querySelectorAll(".tecla");
listaDeTeclas[8].onclick=tocaSomVitoria;

function tocaSomAplausos(){
    document.querySelector('#som_tecla_aplausos').play();
}
listaDeTeclas[0].onclick=tocaSomAplausos;

function tocaSomVaia(){
    document.querySelector('#som_tecla_vaia').play();
}
listaDeTeclas[1].onclick=tocaSomVaia;