document.addEventListener("DOMContentLoaded", function () {

    if (!annyang) {
        return alert("Tu navegador no soporta el reconcimiento de voz");
    }

    var getPageNext = function () {
        location.href = './index.html';
        // window.open("https://github.com/TalAter/annyang", '_blank');
    }

    var getPageNext1 = function () {
        location.href = './informaciongeneral.html';
    }

    var getPageNext2 = function () {
        location.href = './tema1.html';
    }

    var abrirMenuPrincipal = function () {
        var elemento = document.getElementById("menu-item");
        elemento.classList.add("active");
        var elemento = document.querySelector(".overlay");
        elemento.classList.add("active");
    }

    let abrirModal1 = function () {
        let modal = document.getElementById("methods-uno");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px"
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
    }



    let cerrarmodal1 = function () {
        let modal = document.getElementById("methods-uno");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        modalAbierto1 = false;
        backdrop.style.display = "none";
    }

    let abrirmodal2 = function () {
        let modal = document.getElementById("methods-2");
        modal.style.display = "block";
        modal.style.paddingRight = "14px";
        modal.classList.add("show");
    }

    let cerrarModal2 = function () {
        let modal = document.getElementById("methods-2");
        modal.style.display = "none";
    }

    let abrirmodal3 = function () {
        let modal = document.getElementById("methods-3");
        modal.style.display = "block";
        modal.style.paddingRight = "14px";
        modal.classList.add("show");
    }
    let cerrarmodal3 = function () {
        let modal = document.getElementById("methods-3");
        modal.style.display = "none";
    }

    let modalAbierto1 = false;
    let modalAbierto2 = false;
    let modalAbierto3 = false;

    function abrirModal11() {
        if (modalAbierto2 == true || modalAbierto3 == true) {
            cerrarModal2();
            modalAbierto2 = false;
            cerrarmodal3();
            modalAbierto3 = false;
        }
        // Abre el modal 1
        abrirModal1();
        modalAbierto1 = true;
        document.body.classList.add("modal-open");
    }

    function abrirModal22() {
        if (modalAbierto1 == true || modalAbierto3 == true) {
            cerrarmodal1();
            modalAbierto1 = false;
            cerrarmodal3();
            modalAbierto3 = false;
        }
        // Abre el modal 1
        abrirmodal2();
        modalAbierto2 = true;
    }

    function abrirModal33() {
        if (modalAbierto1 == true || modalAbierto2 == true) {
            cerrarmodal1();
            modalAbierto1 = false;
            cerrarModal2();
            modalAbierto2 = false;
        }
        // Abre el modal 1
        abrirmodal3();
        modalAbierto3 = true;
    }

    let abrirfaqBasic = function () {
        let abrirfaq = document.getElementById("basicas-1");
        abrirfaq.classList.add("expandido");
        abrirfaq.classList.add("btn-expandido");
        abrirfaq.classList.remove('collapsed');
        abrirfaq.setAttribute('aria-expanded', 'true');
        abrirfaq.nextElementSibling.classList.add('show');
    }

    let cerrarfaqBasic = function () {
        let cerrarfaq = document.getElementById("basicas-1");
        cerrarfaq.classList.remove("expandido");
        cerrarfaq.classList.remove("btn-expandido");
        cerrarfaq.classList.add('collapsed');
        cerrarfaq.setAttribute('aria-expanded', 'false');
        cerrarfaq.nextElementSibling.classList.remove('show');
    }

    let faqAbierto = false;

    function abrirCerrarfaq() {
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto) {
            // Si el FAQ está cerrado, ábrelo
            abrirfaqBasic();
            faqAbierto = true;
        } else {
            // Si el FAQ está abierto, ciérralo
            cerrarfaqBasic();
            faqAbierto = false;
        }
    }


    let descargarlecturafacil = function () {
        location.href = '#btnLectura';
        let descargar = document.getElementById("btnLectura");
        descargar.click();
    }

    let PositionTop = function (element) {
        if (element) {
            // Calcula la posición del elemento en relación con la parte superior de la página
            let offsetTop = element.offsetTop;

            // Ajusta la posición para subir un poco más (por ejemplo, 50 píxeles adicionales)
            let scrollToPosition = offsetTop - 50;

            // Realiza el scroll suavemente hacia la posición ajustada
            window.scrollTo({
                top: scrollToPosition,
                behavior: 'smooth'
            });
        }
    }

    let PositionTop100 = function (element) {
        if (element) {
            // Calcula la posición del elemento en relación con la parte superior de la página
            let offsetTop = element.offsetTop;

            // Ajusta la posición para subir un poco más (por ejemplo, 50 píxeles adicionales)
            let scrollToPosition = offsetTop - 100;

            // Realiza el scroll suavemente hacia la posición ajustada
            window.scrollTo({
                top: scrollToPosition,
                behavior: 'smooth'
            });
        }
    }

    let section6 = function () {
        let element = document.getElementById('ident1_6');
        PositionTop(element);
    }


    let section7 = function () {
        let element = document.getElementById('ident1_7');
        PositionTop(element);
    }

    let section8 = function () {
        let element = document.getElementById('ident1_8');
        PositionTop100(element);
    }

    let section9 = function () {
        let element = document.getElementById('ident1_9');
        PositionTop(element);
    }

    let section16 = function () {
        let element = document.getElementById("ident1_16");
        PositionTop(element);
    }

    // let section13 = function () {
    //     let element = document.getElementById('ident1_13');
    //     PositionTop(element);
    // }

    // let section16 = function () {
    //     let element = document.getElementById('ident1_16');
    //     PositionTop(element);
    // }





    var cerrarMenuPrincipal = function () {
        var cerrarmenu = document.getElementById("menu-item");
        cerrarmenu.classList.remove("active");

        var elemento = document.querySelector(".overlay"); // Ejemplo: Obtener el elemento con ID "menu-item"
        elemento.classList.remove("active");
    }

    var inicioPagina = function () {
        // Desplazar la ventana al inicio de la página (coordenada Y = 0)
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Animación suave
        });
    }

    var scrollBottom = function () {

        // Obtener la posición actual de scroll vertical
        var scrollTopActual = window.pageYOffset || document.documentElement.scrollTop;

        // Desplazar la ventana hacia abajo la cantidad especificada
        window.scrollBy(0, 200);

        // Obtener la nueva posición de scroll vertical
        var scrollTopNuevo = window.pageYOffset || document.documentElement.scrollTop;

        // Verificar si el scroll llegó al final de la página
        if (scrollTopNuevo + window.innerHeight >= document.documentElement.scrollHeight) {
            // Si llegó al final, ajustar el scroll a la altura máxima del documento
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth"
            });
        }

    };

    var scrollTo = function () {

        // Obtener la posición actual de scroll vertical
        var scrollTopActual = window.pageYOffset || document.documentElement.scrollTop;

        // Desplazar la ventana hacia arriba la cantidad especificada
        window.scrollBy(0, -200);

        // Obtener la nueva posición de scroll vertical
        var scrollTopNuevo = window.pageYOffset || document.documentElement.scrollTop;

        // Verificar si el scroll llegó al inicio de la página
        if (scrollTopNuevo <= 0) {
            // Si llegó al inicio, ajustar el scroll a la parte superior
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    };

    let volverArriba = document.getElementById("btnVolver_Arriba");
    let volverA = function () {
        volverArriba.click();
    }





    var commands = {
        'Desplazar hacia abajo': scrollBottom,
        'Desplazar hacia arriba': scrollTo,
        'Descargar lectura fácil': descargarlecturafacil,
        'Inicio': inicioPagina,

        '1': abrirMenuPrincipal,
        'uno': abrirMenuPrincipal,

        'dos': cerrarMenuPrincipal,
        '2': cerrarMenuPrincipal,

        '3': getPageNext,
        'tres': getPageNext,

        '4': getPageNext1,
        'cuatro': getPageNext1,

        '5': getPageNext2,
        'cinco': getPageNext2,

        '6': section6,
        'seis': section6,

        '7': section7,
        'siete': section7,

        '8': section8,
        'ocho': section8,

        '9': section9,
        'nueve': section9,

        '10': abrirModal11,
        'Diez': abrirModal11,

        '11': cerrarmodal1,
        'Once': cerrarmodal1,

        '12': abrirModal22,
        'Doce': abrirModal22,


        '13': cerrarModal2,
        'Trece': cerrarModal2,

        '14': abrirModal33,
        'catorce': abrirModal33,

        '15': cerrarmodal3,
        'Quince': cerrarmodal3,

        '16': section16,
        'Dieciséis': section16,

        '17': abrirCerrarfaq,
        'Diecisiete': abrirCerrarfaq,

        // '15': abrirfaqBasic,
        // 'Quince': abrirfaqBasic,

        // '18': abrirCerrarfaq2,
        // 'Dieciocho': abrirCerrarfaq2,

        '19': abrirCerrarfaq,
        'Diecinueve': abrirCerrarfaq,

        // '16': cerrarfaqBasic,
        // 'Dieciséis': cerrarfaqBasic,

        // '17': cerrarfaqBasic,
        // 'Dieciséis': cerrarfaqBasic,



        // '17': volverA,
        // 'Diecisiete': volverA,



    };

    annyang.addCommands(commands);
    annyang.addCallback("result", frases => {
        function escribir() {
            document.getElementById("container_notes").innerHTML = ' <b>Usted a dicho: </b>' + "'" + frases + "'";
        }
        escribir();
    });
    annyang.setLanguage("es-MX");
});


let microfono = document.getElementById("micro");
const btn_access = document.getElementById('btn-access');
let contenedor_notas = document.getElementById("container_notes");
let num1 = document.getElementById("ident1");
let num2 = document.getElementById("ident2");
let num3 = document.getElementById("ident3");
let num4 = document.getElementById("ident4");
let num5 = document.getElementById("ident5");
let num6 = document.getElementById("ident6");
let num7 = document.getElementById("ident7");
let num8 = document.getElementById("ident8");
let num9 = document.getElementById("ident9");
let num10 = document.getElementById("ident10");
let num11 = document.getElementById("ident11");
let num11_1 = document.getElementById("ident1_1");

let num12 = document.getElementById("ident12");
let num13_1 = document.getElementById("ident1_2");
let num13 = document.getElementById("ident13");

let num14 = document.getElementById("ident14");
let num15 = document.getElementById("ident15");
let num15_3 = document.getElementById("ident15_3");
let num16 = document.getElementById("ident16");

let num17 = document.getElementById("ident17");
let num18 = document.getElementById("ident18");



btn_access.addEventListener('click', function () {
    const parrafos = document.querySelectorAll('.section-comandos');
    parrafos.forEach(parrafo => parrafo.style.display = 'block');
    annyang.start();
    console.log("inicioFrases");
    microfono.classList.add("activeMicro");
    microfono.style.transitionDuration = "1s";
    contenedor_notas.style.display = "flex";
    contenedor_notas.style.flexDirection = "column";
    contenedor_notas.style.justifyContent = "center";
    contenedor_notas.style.alignItems = "center";
    contenedor_notas.style.padding = "2rem";
    // Número 1
    num1.style.display = "flex";
    num1.style.transitionDuration = "3s";
    num1.style.animationDuration = "3s";
    num1.classList.add('animate__animated', 'animate__heartBeat');

    num2.style.display = "flex";
    num3.style.display = "inline-flex";
    num4.style.display = "inline-flex";
    num5.style.display = "inline-flex";
    num6.style.display = "inline-flex";
    num7.style.display = "inline-flex";
    num8.style.display = "inline-flex";
    num9.style.display = "inline-flex";
    num10.style.display = "inline-flex";
    num11.style.display = "inline-flex";
    num11_1.style.display = "inline-flex";

    num12.style.display = "inline-flex";
    num13_1.style.display = "inline-flex";

    num13.style.display = "inline-flex";
    num14.style.display = "inline-flex";
    num15.style.display = "inline-flex";
    num15_3.style.display = "inline-flex";
    num16.style.display = "inline-flex";
    num17.style.display = "inline-flex";
    num17.style.position = "absolute";
    num17.style.top = "0";
    num17.style.right = "0";

    num18.style.display = "inline-flex";
    num18.style.position = "absolute";
    num18.style.top = "0";
    num18.style.right = "0";

});


navigator.mediaDevices.getUserMedia({ audio: true })
    .then(function (stream) {
        console.log('Permiso concedido para acceder al micrófono');
        // Aquí puedes iniciar el reconocimiento de voz
        const recognition = new webkitSpeechRecognition();

        recognition.continuous = true; // Esto hace que el reconocimiento sea continuo

        recognition.onstart = function () {
            console.log('El reconocimiento de voz ha comenzado.');
        };

        recognition.onresult = function (event) {
            const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase().trim();
            console.log('Texto reconocido:', transcript);

            if (transcript != 'iniciar comandos') {
                console.log("Para activar la función de comandos de voz, debes decir: ´iniciar comandos´ ");
            }

            // Llama a iniciarComandosVoz() solo si se detecta la frase "iniciar comandos"            
            if (transcript == 'iniciar comandos') {
                console.log("ident");
                num1.style.display = "flex";
                microfono.classList.add("activeMicro");
                contenedor_notas.style.display = "flex";
                contenedor_notas.style.flexDirection = "column";
                contenedor_notas.style.justifyContent = "center";
                contenedor_notas.style.alignItems = "center";
                contenedor_notas.style.padding = "2rem";
                iniciarComandosVoz();
            }
        };

        recognition.onerror = function (event) {
            console.error('Error de reconocimiento:', event.error);
        };

        // Inicia el reconocimiento de voz después de haber definido los eventos
        recognition.start();
    })
    .catch(function (err) {
        console.error('Error al solicitar permiso para acceder al micrófono:', err);
    });

function iniciarComandosVoz() {
    let iniciarReconocimiento = document.getElementById("btn-access");
    iniciarReconocimiento.click();
}

