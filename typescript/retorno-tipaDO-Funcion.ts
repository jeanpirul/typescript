(() => {
    const sumar = (a: number, b: number): number => a + b;

    const nombre = ():string => 'HolAa Jean';

    const obtenerSalario = ():Promise<string> => {

        return new Promise( (resolve, reject) => {
            resolve('Jean');
        });
    }

    obtenerSalario().then( a => console.log( a.toUpperCase() ) )
})();

