function tocaSomVitoria(){
    document.querySelector('#som_tecla_vitoria').play();
}
const listaDeTeclas= document.querySelectorAll(".tecla");
listaDeTeclas[0].onclick=tocaSomVitoria;