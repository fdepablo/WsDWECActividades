const videojuegos = [
  { nombre: 'Minecraft', precio: 30,
    valoracion: 9, genero: 'Sandbox' },
  { nombre: 'Hollow Knight', precio: 15,
    valoracion: 9.5, genero: 'Metroidvania' },
  { nombre: 'Stardew Valley', precio: 14,
    valoracion: 9, genero: 'Simulación' },
  { nombre: 'EA Sports FC 24', precio: 40,
    valoracion: 7, genero: 'Deportes' },
  { nombre: 'Elden Ring', precio: 60,
    valoracion: 9.5, genero: 'Rol' },
  { nombre: 'Terraria', precio: 10,
    valoracion: 8.5, genero: 'Sandbox' }
];


// 1. Presentar un videojuego con su nombre, precio y valoración. Probar con dos juegos.
const presentar = juego =>
  `${juego.nombre} cuesta ${juego.precio} € y tiene una valoración de ${juego.valoracion} sobre 10`;

console.log(presentar(videojuegos[0]));
console.log(presentar(videojuegos[1]));


// 2. Comprobar si puedes comprar un juego con tu presupuesto, incluido el precio exacto.
const puedeComprar = (juego, presupuesto) => juego.precio <= presupuesto;

console.log(puedeComprar(videojuegos[0], 35));
console.log(puedeComprar(videojuegos[0], 20));
console.log(puedeComprar(videojuegos[0], 30));


// 3. Elegir el juego mejor valorado entre dos. Indicar si hay empate.
const elegirMejor = (juegoA, juegoB) => {
  if (juegoA.valoracion === juegoB.valoracion) {
    return 'Tienen la misma valoración';
  }
  return juegoA.valoracion > juegoB.valoracion ? juegoA.nombre : juegoB.nombre;
};

console.log(elegirMejor(videojuegos[0], videojuegos[1]));
console.log(elegirMejor(videojuegos[0], videojuegos[2]));


// 4. Obtener una lista con los nombres de todos los juegos, en el orden original.
const nombres = videojuegos.map(juego => juego.nombre);
console.log(nombres);


// 5. Obtener las fichas completas de los juegos del género Sandbox.
const juegosSandbox = videojuegos.filter(juego => juego.genero === 'Sandbox');
console.log(juegosSandbox);


// 6. Buscar juegos de hasta 20 € con una valoración de al menos 9.
let buenasCompras = videojuegos.filter(juego =>
  juego.precio <= 20 && juego.valoracion >= 9
);
console.log(buenasCompras);

buenasCompras = videojuegos.filter(juego =>
  juego.precio <= 20).filter(juego => juego.valoracion >= 9);

// 7. Mostrar los juegos numerados desde 1, con su nombre y precio.
videojuegos.forEach((juego, indice) => {
  console.log(`${indice + 1}. ${juego.nombre} — ${juego.precio} €`);
});


// 8. Crear un catálogo con un descuento del 25 %, conservando los demás datos.
const catalogoRebajado = videojuegos.map(juego => ({
  nombre: juego.nombre,
  precio: juego.precio * 0.75,
  valoracion: juego.valoracion,
  genero: juego.genero
}));

console.log(catalogoRebajado);


// 9. Calcular cuánto cuesta comprar una copia de cada juego.
let total = 0;
videojuegos.forEach(juego => {
  total += juego.precio;
});
console.log(`Comprar todo el catálogo cuesta ${total} €`);


// 10. Obtener los nombres de los juegos que cuestan entre 15 y 40 €, ambos incluidos.
const nombresEnIntervalo = videojuegos
  .filter(juego => juego.precio >= 15 && juego.precio <= 40)
  .map(juego => juego.nombre);

console.log(nombresEnIntervalo);


// 11. Buscar juegos por presupuesto y devolver mensajes con su nombre y precio.
const buscarPorPresupuesto = (catalogo, presupuesto) => catalogo
  .filter(juego => juego.precio <= presupuesto)
  .map(juego => `${juego.nombre}: ${juego.precio} €`);

console.log('Con 15 €:');
console.log(buscarPorPresupuesto(videojuegos, 15));
console.log('Con 5 €:');
console.log(buscarPorPresupuesto(videojuegos, 5));


// 12. Mostrar juegos con valoración de al menos 9 que cuesten hasta 15 € tras rebajarlos un 10 %.
videojuegos
  .filter(juego => juego.valoracion >= 9)
  .map(juego => ({
    nombre: juego.nombre,
    precio: juego.precio * 0.9
  }))
  .filter(juego => juego.precio <= 15)
  .forEach(juego => {
    console.log(`${juego.nombre}: ${juego.precio} €`);
  });
