
const btnAumentarFuente = document.getElementById('font_size');
//const parrafo = document.querySelector('.parrafo');
const subtitulos = document.querySelectorAll("h2");
const parrafos = document.querySelectorAll("p");

let tamFuenteParrafos = 1.3; // Tamaño de fuente parrrafos
let tamFuenteSubtitulos = 1.5; // Tamaño de fuente subtitulos

btnAumentarFuente.addEventListener('click', function() {

    tamFuenteParrafos += 0.25; // Aumentar 0.25 rem en cada click
    tamFuenteSubtitulos +=0.25;

    if (tamFuenteParrafos > 1.8) {
        tamFuenteParrafos = 1.3; // Restablecer a 1.3 rem si se supera 1.8 rem
    }

    if (tamFuenteSubtitulos > 2) {
        tamFuenteSubtitulos = 1.5; // Restablecer a 1.5 rem si se supera 2 rem
    }

    parrafos.forEach(parrafo => {
        parrafo.style.fontSize = tamFuenteParrafos + 'rem';
        parrafo.style.transitionDuration = "1s";
    });

    subtitulos.forEach(subtitulo => {
        subtitulo.style.fontSize = tamFuenteSubtitulos + 'rem';
        subtitulo.style.transitionDuration = "1s";
    });
    
});

