(() => {

  console.log('Inicio');

  const promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Se terminó el timeout')
    }, 1000)

  });

  promesa1
    .then(mensaje => console.log(mensaje))
    .catch(err => console.warn(err));

  console.log('Fin')
})();

