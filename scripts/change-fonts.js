$(function() {

    const btnAumentarFuente = document.getElementById('font-size');
    const parrafo = document.querySelector('.parrafo');
    const titulos = document.querySelectorAll("h2");
    const parrafos = document.querySelectorAll("p");

    let tamFuenteParrafos = 1.3; // Tamaño de fuente inicial

    btnAumentarFuente.addEventListener('click', function() {
    
        tamFuenteParrafos += 0.25; // Aumentar 0.2 rem en cada click

        if (tamFuenteParrafos > 1.8) {
            tamFuenteParrafos = 1.3; // Restablecer a 1.3 rem si se supera 1.8 rem
        }

        parrafos.style.add = tamFuenteParrafos + 'rem';
        parrafos.style.transitionDuration = "2s";
      
    });

});