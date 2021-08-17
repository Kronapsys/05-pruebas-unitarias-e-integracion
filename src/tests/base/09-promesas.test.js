import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas con promesas', () => {

    // Hay que llamar done al callback para decirle al test cuando debe terminar la prueba, así será asincrono
    test('getHeroeByIdAsync debe devolver un héroe async', ( done ) => { 

        const id = 1;

        getHeroeByIdAsync( id )
        .then ( heroe => {

            expect( heroe ).toBe( heroes[0] );
            done(); // LLamamos aquí de nuevo a done para avisar al test de que ya terminamos con el proceso
        });
    });

    test('Debe devolver un error si el heroe por id no existe', ( done ) => { 

        const id = 1481;

        getHeroeByIdAsync( id )
        .catch ( error => {

            expect( error ).toBe( 'No se pudo encontrar el héroe' );
            done();
        });
    });

});