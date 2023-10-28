// Definición de jugadores
let jugadorA = "JugadorA";
let jugadorB = "JugadorB";

// Determinación de quién elige primero
let eligeJugadorA = true;

// Elementos del DOM del menú
let menuHeroes = document.getElementsByClassName("columns")[0];
let cartaHeroe = document.getElementsByClassName("column")[0];
let avatarHeroe = cartaHeroe.getElementsByTagName('img')[0];
let nombreHeroe = cartaHeroe.getElementsByClassName('titulo')[0];
let saludHeroe = cartaHeroe.getElementsByClassName('vidaHeroe')[0];
let habilidad1 = cartaHeroe.getElementsByClassName('tituloHabilidad')[0];
let describeHabilidad1 = cartaHeroe.getElementsByClassName('describeHabilidad')[0];
let habilidad2 = cartaHeroe.getElementsByClassName('tituloHabilidad')[1];
let describeHabilidad2 = cartaHeroe.getElementsByClassName('describeHabilidad')[1];
let indicadorMensajesMenu = document.getElementById("indicadorMensajesMenu");
let fondos = document.getElementsByClassName("fondo");

function cargarHeroes() {
    listadoHeroes.forEach(function (heroe) {
        avatarHeroe.src = heroe.avatar;
        nombreHeroe.innerText = heroe.nombre;
        saludHeroe.innerText = heroe.salud;
        habilidad1.innerText = heroe.habilidad1.nombre;
        describeHabilidad1.innerText = heroe.habilidad1.descripcion;
        habilidad2.innerText = heroe.habilidad2.nombre;
        describeHabilidad2.innerText = heroe.habilidad2.descripcion;

        let nuevaCartaHeroe = cartaHeroe.cloneNode(true);
        nuevaCartaHeroe.style.display = "inline";
        nuevaCartaHeroe.className += " activo";
        menuHeroes.appendChild(nuevaCartaHeroe);
    });
}

cargarHeroes();

function asignarHeroe(heroeElegido) {
    for (const heroe of listadoHeroes) {
        if (heroeElegido === heroe.nombre) {
            return Object.create(heroe);
        }
    }
}

function elegirHeroe(opcion) {
    let nombreOpcion = String(opcion.getElementsByClassName('titulo')[0].innerText);
    let muestraNombre = document.getElementById("jugadores").getElementsByTagName("span");

    if (eligeJugadorA) {
        jugadorA = asignarHeroe(nombreOpcion);
        muestraNombre[0].innerText = jugadorA.nombre;
        indicadorMensajesMenu.innerText = "JUGADOR B: Elige un héroe";
        eligeJugadorA = false;
    } else {
        jugadorB = asignarHeroe(nombreOpcion);
        muestraNombre[1].innerText = jugadorB.nombre;
        cambiarVista();
    }
}

let heroesEnMenu = document.getElementsByClassName("column activo");

for (const opcion of heroesEnMenu) {
    opcion.addEventListener("click", function () { elegirHeroe(opcion) });
}

function cambiarVista() {
    fondos[1].style.backgroundColor = "red";
    setTimeout(() => {
        console.log("Comienza el juego");
        fondos[1].classList.add("ocultarFondo");
        fondos[0].classList.remove("ocultarFondo");
        cargarBatalla(jugadorA, jugadorB);
        determinarTurno();
    }, 1500);
}