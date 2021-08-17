import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Héroes', () => {

    test('Debe retornar un héroe por id', () => {

        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h => h.id === id);

        expect( heroe ).toEqual( heroeData );
    });

    test('Debe retornar undefined si héroe no existe', () => {

        const id = 15;
        const heroe = getHeroeById( id );


        expect( heroe ).toBe( undefined );
    });

    // toEqual al array filtrado
    test('Debe devolver un array con los héroes de DC', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );

        const heroesData = heroes.filter( h => h.owner === owner);

        expect( heroes ).toEqual( heroesData );

    });

    // length = 2 (toBe)
    test('Debe devolver un array con los héroes de Marvel', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );

        const heroesOwner = heroes.filter( h => h.owner === owner);

        expect( heroes.length ).toBe( 2 );
    });

});