class Menu extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        
        <ul class="sidebar__lista container">

            <li class="sidebar__elemento">            
                <a class="sidebar__enlace titulo-nav-modulo sidebar__elemento--borde" href="index.html">Inicio <span id="ident3" class="identificador2"> 3 </span> </a>
                
            </li>

            <li class="sidebar__elemento">
                <a class="sidebar__enlace sidebar__elemento--borde" href="informaciongeneral.html">Información general <span id="ident4" class="identificador2"> 4 </span> </a>
            </li>
            
            <li class="sidebar__elemento sangria-menu">
                <a class="sidebar__enlace" href="tema1.html">Tema 1. Conceptos básicos <span id="ident5" class="identificador2"> 5 </span></a>
            </li>

            <li class="sidebar__elemento sangria-menu">
                <a class="sidebar__enlace" href="#">Tema 2. Unidades de Accesibilidad Tecnológica </a>
            </li>

            <li class="sidebar__elemento sangria-menu">
                <a class="sidebar__enlace" href="#">Tema 3. Campus Virtuales Accesibles
                </a>
            </li>

            <li class="sidebar__elemento sangria-menu">
                <a class="sidebar__enlace" href="glosario.html">Glosario </a>
            </li>

        </ul>

        `;

    }
}

customElements.define('menu-component', Menu);

