const Generico = <T>( data: T ): T => {
    return data;
};

// pruebas

let numero = Generico( 10 );
let texto = Generico( 'Hola Mundo' );
let booleano = Generico( true );
console.log( numero );
console.log( texto );
console.log( booleano );