import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js', () => {

    test('getSaludo debe devolver Hola Nombre!', () => {

        const nombre = 'Fernando';

        const saludo = getSaludo( nombre );

        expect ( saludo ).toBe('Hola ' + nombre + '!');
    });

    // getSaludo debe devolver Hola Carlos! si no hay argumento nombre
    test('getSaludo debe devolver Hola Carlos !', () => {

        const saludo = getSaludo();

        expect ( saludo ).toBe('Hola Carlos!' );
    });


});