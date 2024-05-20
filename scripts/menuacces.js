let menu = document.querySelector('.menuacces');
let btnAccess = document.querySelector('.btnAccessUniversal');

function handleMenu() {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    } else {
        menu.classList.add('active');
    }
}
document.addEventListener('click', function (e) {
    const isClickInsideMenu = menu.contains(e.target);
    const isClickOnBtnAcces = btnAccess.contains(e.target);

    if (!isClickInsideMenu && !isClickOnBtnAcces) {
        menu.classList.remove('active');
    }
});

// Función para mostrar linea

let linea = document.getElementById("readline");
function showLine() {
    if (linea.classList.contains('active')) {
        linea.classList.remove('active');
    } else {
        linea.classList.add('active');
    }
}

function detectarPosicionMouse(event) {
    let line = document.getElementById("readline");
    const y = event.clientY;
    line.style.top = y + 'px';
}

// Fin función


// Función para tamaño de fuente
// let titulos = document.querySelectorAll("h2");
// let parrafos = document.querySelectorAll("p");
// let btnFont = document.getElementById("font_size");

// btnFont.addEventListener('click', function (e) {
//     titulos.forEach(function (titulo) {
//         titulo.style.fontSize = "2rem";
//         titulo.style.transitionDuration = "2s";
//         titulo.style.color = "red";
//     })
//     parrafos.forEach(function (parrafo) {
//         parrafo.style.color = "green";
//         parrafo.style.fontSize = "1.5rem";
//     })
// })


// Función para cambiar el tamaño del cursor
let btncursor = document.getElementById("cursorBig");
let cursorActivo = false;

btncursor.addEventListener('click', function (e) {
    if (!cursorActivo) {
        document.body.style.cursor = "url('../images/cursor/cursoracces.png'), auto";
        btncursor.classList.add("active");
        cursorActivo = true;
    } else {
        document.body.style.cursor = "auto";
        btncursor.classList.remove("active");
        cursorActivo = false;
    }
})




// let btncursor = document.getElementById("cursorBig");
// let cursorActivo = false;

// btncursor.addEventListener('click', function (e) {
//     if (!cursorActivo) {
//         document.body.style.cursor = "url('../images/cursor/cursoracces.png'), auto";
//         btncursor.classList.add("active");
//         cursorActivo = true;
//     } else {
//         document.body.style.cursor = "auto";
//         btncursor.classList.remove("active");
//         cursorActivo = false;
//     }
// });



