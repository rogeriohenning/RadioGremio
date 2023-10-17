function tocaSomVitoria(){
    document.querySelector('#som_tecla_vitoria').play();
}
const listaDeTeclas= document.querySelectorAll(".tecla");
listaDeTeclas[8].onclick=tocaSomVitoria;

function tocaSomAplauso(){
    document.querySelector('#som_tecla_aplausos').play();
}
listaDeTeclas[0].onclick=tocaSomAplauso;