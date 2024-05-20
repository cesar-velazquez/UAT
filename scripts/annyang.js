document.addEventListener("DOMContentLoaded", function () {

    if (!annyang) {
        return alert("Tu navegador no soporta el reconcimiento de voz");
    }

    let refreshPage = function () {
        location.reload();
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

    let abrirAyuda = function () {
        let modal = document.getElementById("methods-help");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px"
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
    }

    let cerrarAyuda = function () {
        let modal = document.getElementById("methods-help");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.style.display = "none";
    }


    let cerrarmodal1 = function () {
        let modal = document.getElementById("methods-uno");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.style.display = "none";
    }

    let abrirmodal2 = function () {
        let modal = document.getElementById("methods-2");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px";
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
    }

    let cerrarModal2 = function () {
        let modal = document.getElementById("methods-2");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.style.display = "none";
    }

    let abrirmodal3 = function () {
        let modal = document.getElementById("methods-3");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "block";
        modal.style.paddingRight = "14px";
        modal.classList.add("show");
        document.body.classList.add("modal-open");
        backdrop.style.display = "block";
    }
    let cerrarmodal3 = function () {
        let modal = document.getElementById("methods-3");
        let backdrop = document.getElementById("modal-backdrop");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        backdrop.style.display = "none";
    }

    let modalAbierto1 = false;
    let modalAbierto2 = false;
    let modalAbierto3 = false;
    let modalAbierto4 = false;

    function abrirModal11() {
        if (modalAbierto2 == true || modalAbierto3 == true || modalAbierto4 == true) {
            cerrarModal2();
            modalAbierto2 = false;
            cerrarmodal3();
            modalAbierto3 = false;
            cerrarAyuda();
            modalAbierto4 = false;
        }
        abrirModal1();
        modalAbierto1 = true;
        document.body.classList.add("modal-open");
    }

    function abrirModal22() {
        if (modalAbierto1 == true || modalAbierto3 == true || modalAbierto4 == true) {
            cerrarmodal1();
            modalAbierto1 = false;
            cerrarmodal3();
            modalAbierto3 = false;
            cerrarAyuda();
            modalAbierto4 = false;
        }
        abrirmodal2();
        modalAbierto2 = true;
    }

    function abrirModal33() {
        if (modalAbierto1 == true || modalAbierto2 == true || modalAbierto4 == true) {
            cerrarmodal1();
            modalAbierto1 = false;
            cerrarModal2();
            modalAbierto2 = false;
            cerrarAyuda();
            modalAbierto4 = false;
        }
        abrirmodal3();
        modalAbierto3 = true;
    }

    function abrirModalAyuda() {
        if (modalAbierto1 == true || modalAbierto2 == true || modalAbierto3 == true) {
            cerrarmodal1();
            modalAbierto1 = false;
            cerrarModal2();
            modalAbierto2 = false;
            cerrarmodal3();
            modalAbierto3 = false;
        }
        abrirAyuda();
        modalAbierto4 = true;
    }
    // prueba faq    

    let abrirfaqBasicaP = function () {
        let abrirfaq = document.getElementById("basic1");
        abrirfaq.classList.remove('collapsed');
        abrirfaq.setAttribute('aria-expanded', 'true');
        abrirfaq.nextElementSibling.classList.add('show');

    }

    let cerrarfaqBasicP = function () {
        let cerrarfaq = document.getElementById("basic1");
        cerrarfaq.classList.add('collapsed');
        cerrarfaq.setAttribute('aria-expanded', 'false');
        cerrarfaq.nextElementSibling.classList.remove('show')
    }

    let faqAbierto = false;

    function abrirCerrarfaq() {
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto) {
            // Si el FAQ está cerrado, ábrelo
            abrirfaqBasicaP();
            faqAbierto = true;
        } else {
            // Si el FAQ está abierto, ciérralo
            cerrarfaqBasicP();
            faqAbierto = false;
        }
    }

    // segundo faq
    let abrirfaqBasicaP2 = function () {
        let abrirfaq = document.getElementById("basic2");
        abrirfaq.classList.remove('collapsed');
        abrirfaq.setAttribute('aria-expanded', 'true');
        abrirfaq.nextElementSibling.classList.add('show');

    }

    let cerrarfaqBasicP2 = function () {
        let cerrarfaq = document.getElementById("basic2");
        cerrarfaq.classList.add('collapsed');
        cerrarfaq.setAttribute('aria-expanded', 'false');
        cerrarfaq.nextElementSibling.classList.remove('show')
    }

    let faqAbierto2 = false;

    function abrirCerrarfaq2() {
        // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
        if (!faqAbierto2) {
            // Si el FAQ está cerrado, ábrelo
            abrirfaqBasicaP2();
            faqAbierto2 = true;
        } else {
            // Si el FAQ está abierto, ciérralo
            cerrarfaqBasicP2();
            faqAbierto2 = false;
        }
    }

    // prueba faq fin

    let abrirfaqBasic = function () {
        let abrirfaq = document.getElementById("basicas-1");
        abrirfaq.classList.remove('collapsed');
        abrirfaq.setAttribute('aria-expanded', 'true');
        // abrirfaq.nextElementSibling.classList.add('show');
    }

    let abrirfaqBasic2 = function () {
        let abrirfaq = document.getElementById("basicas-2");
        abrirfaq.classList.remove('collapsed');
        abrirfaq.setAttribute('aria-expanded', 'true');
        abrirfaq.nextElementSibling.classList.add('show');
    }

    let cerrarfaqBasic = function () {
        let cerrarfaq = document.getElementById("basicas-1");
        cerrarfaq.classList.add('collapsed');
        cerrarfaq.setAttribute('aria-expanded', 'false');
        cerrarfaq.nextElementSibling.classList.remove('show')
    }

    let cerrarfaqBasic2 = function () {
        let cerrarfaq = document.getElementById("basicas-2");
        cerrarfaq.classList.add('collapsed');
        cerrarfaq.setAttribute('aria-expanded', 'false');
        cerrarfaq.nextElementSibling.classList.remove('show')
    }

    // let faqAbierto = false;

    // function abrirCerrarfaq() {
    //     // Verifica si el FAQ está abierto o cerrado y actúa en consecuencia
    //     if (!faqAbierto) {
    //         // Si el FAQ está cerrado, ábrelo
    //         abrirfaqBasic();
    //         faqAbierto = true;
    //     } else {
    //         // Si el FAQ está abierto, ciérralo
    //         cerrarfaqBasic();
    //         faqAbierto = false;
    //     }
    // }

    // let faqAbierto2 = false;
    // function abrirCerrarfaq2() {
    //     if (!faqAbierto2) {
    //         abrirfaqBasic2();
    //         faqAbierto2 = true;
    //     } else {
    //         cerrarfaqBasic2();
    //         faqAbierto2 = false;
    //     }
    // }


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

    let btn19 = document.getElementById("ident19");
    let downloadbtnLectura = function () {
        btn19.click();
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
        // '17': abrirfaqBasicaP,
        // 'Diecisiete': abrirfaqBasicaP,

        '18': abrirCerrarfaq2,
        'Dieciocho': abrirCerrarfaq2,


        // '15': abrirfaqBasic,
        // 'Quince': abrirfaqBasic,

        // '18': abrirCerrarfaq2,
        // 'Die
        '19': downloadbtnLectura,
        'Diecinueve': downloadbtnLectura,

        '20': volverA,
        'veinte': volverA,

        '0': abrirModalAyuda,
        'cero': abrirModalAyuda,

        'cerrar': cerrarAyuda,
        // 'Dieciséis': cerrarfaqBasic,
        'F5': refreshPage,
        'efe cinco': refreshPage,



        // '17': volverA,
        // 'Diecisiete': volverA,



    };

    annyang.addCommands(commands);
    annyang.addCallback("result", frases => {
        console.log("usted ha dicho: " + frases);
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
let num0 = document.getElementById("ident0");
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
let num1_h = document.getElementById("ident1_h");
let cerrar = document.getElementById("identcerrar");

let num12 = document.getElementById("ident12");
let num13_1 = document.getElementById("ident1_2");
let num13 = document.getElementById("ident13");

let num14 = document.getElementById("ident14");
let num15 = document.getElementById("ident15");
let num15_3 = document.getElementById("ident15_3");
let num16 = document.getElementById("ident16");

let num17 = document.getElementById("ident17");
let num18 = document.getElementById("ident18_f");
let num19 = document.getElementById("ident19");
let num20 = document.getElementById("ident20");


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
    contenedor_notas.style.zIndex = "53";
    // num0.style.display = "inline-flex";
    // num0.style.position = "fixed";
    // num0.style.top = "39%";
    // num0.style.right = "3.2rem";
    num0.classList.add('ident_Cero', 'animate__animated', 'animate__heartBeat')
    num1.style.display = "flex";
    num1.style.transitionDuration = "3s";
    num1.style.animationDuration = "3s";
    num1.classList.add('animate__animated', 'animate__heartBeat');

    num2.style.display = "flex";
    num3.style.display = "inline-flex";
    num4.style.display = "inline-flex";
    num5.style.display = "inline-flex";
    num6.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat')
    num7.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat')
    num8.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat')
    num9.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat')
    // num10.style.display = "inline-flex";
    num10.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat')

    cerrar.style.display = "inline-flex";
    num11.style.display = "inline-flex";
    num11_1.style.display = "inline-flex";
    num1_h.style.display = "inline-flex";

    // num12.style.display = "inline-flex";
    num12.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat')

    num13_1.style.display = "inline-flex";

    num13.style.display = "inline-flex";
    // num14.style.display = "inline-flex";
    num14.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat')

    num15.style.display = "inline-flex";
    num15_3.style.display = "inline-flex";
    // num16.style.display = "inline-flex";
    num16.classList.add('ident_Universal', 'animate__animated', 'animate__heartBeat')
    num17.classList.add('ident_Faqs', 'animate__animated', 'animate__heartBeat');
    // num18.classList.remove = "identificador2";
    num18.classList.add("ident_Faqs", 'animate__animated', 'animate__heartBeat');
    num19.classList.add("ident_Faqs", 'animate__animated', 'animate__heartBeat');
    num20.classList.add("ident_Faqs", 'animate__animated', 'animate__heartBeat');

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

