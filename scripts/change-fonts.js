$(function() {

    const btnAumentarFuente = document.getElementById('btnAumentarFuente');

    let tamañoFuente = 1.3; // Tamaño de fuente inicial

    btnAumentarFuente.addEventListener('click', function() {
      tamañoFuente += 0.2; // Aumentar 0.2 rem en cada click

      if (tamañoFuente > 1.8) {
        tamañoFuente = 1.3; // Restablecer a 1.3 rem si se supera 1.8 rem
      }

      document.body.style.fontSize = tamañoFuente + 'rem';
    });

});

