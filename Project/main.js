function tocaSom (seletorAudio) {
   const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') { 
        elemento.play();
    }

    else {
        //alert("Elemento não encontrado");
        console.log("Elemento não encontrado ou seletor inválido");
    }
}
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    
    // template string
    const idAudio = `#som_${instrumento}`;
    
    //console.log(instrumento);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        console.log(evento.code);
        if(evento.code === 'Space' || evento.key === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

    contador+= 1;
    
}
