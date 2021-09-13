(function () {
  function getEdad() {
    return 100 + 100 + 500;
  }

  const nombre = 'Jean';
  const apellido = 'Pirul';
  const edad = 21;

  const salida = ` 
  ${nombre}
  ${apellido}
  ( ${getEdad()} )`

  console.log(salida);
})();

