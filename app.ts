(() => {
    //uso de let y const 
    /* ---------------------------------- */

    const nombre = 'Ricardo Tapia';
    const edad = 23;

    const PERSONAJE = {
        nombre,
        edad
    };

    //Cree una interfaz que sirva para validar el siguiente objeto
    interface Batman {
        nombre: string;
        artesMarciales: string[];
    }
    const batman = {
        nombre: 'Bruno Diaz',
        artesMarciales: ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu']
    };


    //Convertir esta funcion a una función flecha
    const resultadoDoble = (a: number, b: number) => (a + b) * 2;


    // Funciión con parametros obligatorios, opcionales y por defecto
    // donde NOMRBRE = obligatorio
    //       PODER = opcional
    //       ARMA = por defecto = 'arco'

    function getAvenger(nombre: string, poder?: string, arma: string = 'supertraje') {
        let mensaje;
        if (poder) {
            mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
            console.log(``)
        } else {
            mensaje = nombre + ' tiene un ' + poder
        }
    }

    // Cree una clase que permita manejar la siguiente estructura
    // La clase se debe llamar rectangulo,
    // debe tener dos propiedades:
    //     * base 
    //     * altura
    // También un metodo que calcule el area = base * altura,
    // ese metodo debe retornar un numero`
    class Rectangulo {

        constructor(
            public base: number,
            public altura: number) { }
        calcularArea = (): number => this.base * this.altura;
    }
})();

