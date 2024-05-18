$(function() {

    const btnAumentarFuente = document.getElementById('btnAumentarFuente');
    const parrafo = document.querySelector('.parrafo');

    let tamañoFuente = 1.3; // Tamaño de fuente inicial

    btnAumentarFuente.addEventListener('click', function() {
      tamañoFuente += 0.25; // Aumentar 0.2 rem en cada click

      if (tamañoFuente > 1.8) {
        tamañoFuente = 1.3; // Restablecer a 1.3 rem si se supera 1.8 rem
      }

      parrafo.classList.add = tamañoFuente + 'rem';
      
    });

});
