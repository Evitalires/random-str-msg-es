const messages = [
  "Aquí es donde todo comienza...",
  "Compromiso comprometido",
  "El control de versiones es terrible",
  "¡COMPROMETER TODOS LOS ARCHIVOS!",
  "Lo mismo que hacemos todas las noches, Pinky, tratar de conquistar el mundo",
  "Bloquear alas S en posición de ataque",
  "Este compromiso es una mentira",
  "Te lo explicaré cuando seas mayor",
  "Aquí hay dragones",
  "Reinventando la rueda. Otra vez.",
  "Este no es el mensaje de compromiso que estás buscando",
  "¡Batman! (este commit no tiene padres)",
  "El código es poesía",
  "¡Al infinito y más allá!",
  "Hoy es el primer día del resto de tu código",
  "La vida es corta, usa Python",
  "En busca de la llave perdida del compilador",
  "Nada es imposible en el mundo del software",
  "¡Cuidado con el error 404: vida no encontrada!",
  "La mejor documentación es el código en sí",
  "En el código confiamos",
  "La programación es magia digital",
];

const funnyCommit = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(`\x1b[34m${message}\x1b[89m`);
};

module.exports = {
  funnyCommit,
};
