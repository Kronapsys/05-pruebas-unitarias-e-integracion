import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base/07-deses-arr';

describe('Pruebas en 07-desestructuración de array', () => {

    test('Debe de devolver un array con un String y un numero', () => {

        // const arr = retornaArreglo(); // ['ABC', 123]
        // expect( arr ).toEqual( ['ABC', 123] );

        const [ letras, numeros ] = retornaArreglo() // ['ABC', 123]

        console.log( typeof letras );
        expect( letras ).toBe( 'ABC' );
        expect( typeof letras ).toBe( 'string' );

        console.log( typeof numeros );
        expect( numeros ).toBe( 123 );
        expect( typeof numeros ).toBe( 'number' );
    });
});