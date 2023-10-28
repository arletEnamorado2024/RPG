function Heroe(nombre, salud, poder, habilidad1, habilidad2, imagen, avatar) {
    this.nombre = nombre,
        this.salud = salud,
        this.poder = poder,
        this.habilidad1 = habilidad1,
        this.habilidad2 = habilidad2,
        this.imagen = imagen,
        this.avatar = avatar
};

// Creación de héroes
let heroeDonPatino = new Heroe(
    "Don Patino",
    150,
    30,
    {
        nombre: "Puñetazo Elástico",
        descripcion: "Un golpe que reduce 30 de salud",
        usar: function (valorPoder) { return valorPoder }
    },
    {
        nombre: "Lluvia de Golpes",
        descripcion: "Reduce 30, 40 o 60 de salud, o nada.",
        usar: function (valorPoder) { let valorMultiplicador = Math.floor(Math.random() * (5 - 1)); let valorHabilidad = valorPoder * valorMultiplicador; return valorHabilidad }
    },
    "../img/heroes/Jake.gif",
    "../img/heroes/DonPatino.jpeg"
)

let heroeFluflulapoderosa = new Heroe(
    "Flu Flu La poderosa",
    200,
    50,
    {
        nombre: "Puñetazo",
        descripcion: "Reduce 50 de salud con su espada",
        usar: function (valorPoder) { return valorPoder }
    },
    {
        nombre: "Kame-Hame-Ha",
        descripcion: "Puede reducir 100 de salud o fallar",
        usar: function (valorPoder) { let valorSuerte = Math.random(); if (valorSuerte >= 0.5) { valorHabilidad = valorPoder * 2 } else { valorHabilidad = 0 }; return valorHabilidad }
    },
    "../img/heroes/Fluflu.gif",
    "../img/heroes/fluflulapoderosa.jpeg"
)

let heroerickyPizza = new Heroe(
    "Ricky Pizza",
    120,
    25,
    {
        nombre: "Ataque de Niebla",
        descripcion: "Reduce 15, 0, o 30 de salud con su niebla",
        usar: function (valorPoder) { let valorSuerte = Math.random(); if (valorSuerte >= 0.5) { valorHabilidad = valorPoder * 2 } else { valorHabilidad = valorPoder }; return valorHabilidad }
    },
    {
        nombre: "Ataque de Murciélago",
        descripcion: "El enemigo o tú pierden 75 de salud",
        usar: function (valorPoder) { let valorSuerte = Math.random(); if (valorSuerte >= 0.5) { valorHabilidad = valorPoder * 3; return valorHabilidad } else { heroeReptiliano.salud -= valorPoder * 3; return 0 } }
    },
    "../img/heroes/RickyPizza.gif",
    "../img/heroes/RickyPizza.jpeg"
)

let heroeResbaladizo = new Heroe(
    "Resbaladizo",
    125,
    40,
    {
        nombre: "Tornado",
        descripcion: "Reduce 25 o 50 de salud con su tornado",
        usar: function (valorPoder) { let valorSuerte = Math.random(); if (valorSuerte >= 0.5) { valorHabilidad = valorPoder } else { valorHabilidad = valorPoder / 2 }; return valorHabilidad }
    },
    {
        nombre: "Caos",
        descripcion: "Reduce 80 de salud, pierdes 20 de salud",
        usar: function (valorPoder) { heroeSonic.salud -= 20; return 80 }
    },
    "../img/heroes/Resbaladizo.gif",
    "../img/heroes/Sonic_avatar.jpg"
)

let heroeCalamardo = new Heroe(
    "Calamardo",
    125,
    40,
    {
        nombre: "Tornado",
        descripcion: "Reduce 25 o 50 de salud con su tornado",
        usar: function (valorPoder) { let valorSuerte = Math.random(); if (valorSuerte >= 0.5) { valorHabilidad = valorPoder } else { valorHabilidad = valorPoder / 2 }; return valorHabilidad }
    },
    {
        nombre: "Caos",
        descripcion: "Reduce 80 de salud, pierdes 20 de salud",
        usar: function (valorPoder) { heroeSonic.salud -= 20; return 80 }
    },
    "../img/heroes/Sonic.gif",
    "../img/heroes/Sonic_avatar.jpg"
)

let heroePrincesaflama = new Heroe(
    "PrincesaFlama",
    125,
    40,
    {
        nombre: "Tornado",
        descripcion: "Reduce 25 o 50 de salud con su tornado",
        usar: function (valorPoder) { let valorSuerte = Math.random(); if (valorSuerte >= 0.5) { valorHabilidad = valorPoder } else { valorHabilidad = valorPoder / 2 }; return valorHabilidad }
    },
    {
        nombre: "Caos",
        descripcion: "Reduce 80 de salud, pierdes 20 de salud",
        usar: function (valorPoder) { heroeSonic.salud -= 20; return 80 }
    },
    "../img/heroes/pricesa-flema.gif",
    "../img/heroes/PrincesaFlama.jpg"
)
// Lista de héroes para la batalla
let listadoHeroes = []
listadoHeroes.push(heroeCalamardo, heroeDonPatino, heroeFluflulapoderosa, heroePrincesaflama, heroeResbaladizo, heroerickyPizza);