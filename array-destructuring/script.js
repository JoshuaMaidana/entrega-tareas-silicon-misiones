
// TRABAJO PRÁCTICO 11
// Arrays - Objetos - Destructuring
// Temática: Catálogo de videojuegos



// PARTE A
// Array de valores simples

console.log("========== PARTE A ==========");

let categorias = [
    "RPG",
    "Acción",
    "Sandbox",
    "Indie"
];

// Punto 1

console.log(categorias);
console.log("Cantidad de categorías:", categorias.length);

// Punto 2

console.log("Primera categoría:", categorias[0]);
console.log("Última categoría:", categorias[categorias.length - 1]);

// Punto 3

categorias.push("Aventura");

console.log("Cantidad luego del push:", categorias.length);

// Punto 4

let categoriaEliminada = categorias.pop();

console.log("Categoría eliminada:", categoriaEliminada);



// PARTE B
// Objeto

console.log("========== PARTE B ==========");

let usuario = {

    nombre: "Joshua",

    edad: 22,

    ciudad: "Posadas",

    temaFavorito: "Videojuegos"

};

// Punto 7

console.log(
    `${usuario.nombre} tiene ${usuario.edad} años, vive en ${usuario.ciudad} y su tema favorito es ${usuario.temaFavorito}.`
);

// Punto 8

usuario.edad = 23;

console.log("Edad actualizada:", usuario.edad);

// Punto 9

usuario.profesion = "Estudiante";

console.log(usuario);



// PARTE C
// Array de objetos

console.log("========== PARTE C ==========");

let catalogo = [

    {

        titulo: "Elden Ring",

        categoria: "RPG",

        puntaje: 10,

        visto: true

    },

    {

        titulo: "Minecraft",

        categoria: "Sandbox",

        puntaje: 9,

        visto: true

    },

    {

        titulo: "Hollow Knight",

        categoria: "Metroidvania",

        puntaje: 10,

        visto: true

    },

    {

        titulo: "Cyberpunk 2077",

        categoria: "RPG",

        puntaje: 8,

        visto: false

    }

];

// Punto 11

console.log("Primer título:", catalogo[0].titulo);

console.log("Puntaje del tercer elemento:", catalogo[2].puntaje);

// Punto 12

let estado = catalogo[1].visto ? "visto" : "pendiente";

console.log(
    `${catalogo[1].titulo} — ${catalogo[1].categoria} — ${catalogo[1].puntaje}/10 — ${estado}`
);

// Punto 13

catalogo[3].puntaje = 9;

console.log("Puntaje actualizado:", catalogo[3].puntaje);

// Punto 14

catalogo.push({

    titulo: "Portal 2",

    categoria: "Puzles",

    puntaje: 10,

    visto: true

});

console.log("Cantidad del catálogo:", catalogo.length);



// PARTE D
// Destructuring

console.log("========== PARTE D ==========");

// Punto 15

let {

    titulo,

    categoria,

    puntaje,

    visto

} = catalogo[0];

console.log(
    `${titulo} — ${categoria} — ${puntaje}/10 — ${visto ? "visto" : "pendiente"}`
);

// Punto 16

let {

    nombre,

    ciudad

} = usuario;

console.log(`Nombre: ${nombre}`);
console.log(`Ciudad: ${ciudad}`);



// PARTE E (BONUS)

console.log("========== PARTE E ==========");

// Punto 17

let [primero, segundo] = catalogo;

console.log("Primer juego:", primero.titulo);
console.log("Segundo juego:", segundo.titulo);

// Punto 18

let { titulo: tituloDestacado } = catalogo[2];

console.log("Título destacado:", tituloDestacado);

// Punto 19

let { profesion = "Sin datos", hobby = "Sin datos" } = usuario;

console.log("Profesión:", profesion);
console.log("Hobby:", hobby);

// Punto 20

let a = 10;
let b = 20;

[a, b] = [b, a];

console.log("a =", a);
console.log("b =", b);