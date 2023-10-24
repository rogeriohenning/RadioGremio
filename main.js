function tocaSomAplausos(){
    document.querySelector('#som_tecla_aplausos').play();
}
const listaDeTeclas= document.querySelectorAll(".tecla");
listaDeTeclas[8].onclick=tocaSomAplausos;