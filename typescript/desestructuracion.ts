(() => {
  const avenger = {
    nombre: 'Steve',
    clave: 'Capitan America',
    poder: 'Super hombre'
  }

  const extraer = ({ nombre, poder }: any) => {
    //const { nombre, clave, poder } = avenger; //desestructuración

    console.log(nombre);
    console.log(poder);
  }
  //extraer(avenger);

  const avengers: string[] = ['Thor', 'Ironman', 'Spiderman'];

  const [thor, ironman, spiderman] = avengers;
  const extraerArr = ([thor, ironman, spiderman]: string[]) => {
    //const { nombre, clave, poder } = avenger; //desestructuración

    console.log(thor);
    console.log(ironman);
    console.log(spiderman);
  }
  extraerArr(avengers);

})();

