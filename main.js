function tocaSomVitoria(){
    document.querySelector('#som_tecla_vitoria').play();
}
const listaDeTeclas= document.querySelectorAll(".tecla");
listaDeTeclas[8].onclick=tocaSomVitoria;