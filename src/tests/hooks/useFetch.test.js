import { renderHook, act} from '@testing-library/react-hooks';
import useFetch from '../../hooks/useFetch';

describe('Pruebas en useFetch', () => {
    test('Debe retornar la información por defecto ', () => {
        const { result } = renderHook( ()=> useFetch(`https://www.breakingbadapi.com/api/quotes/1`));
        // Extraemos las propiedades necesarias de mi useFetch mediante result.current
        const { data, loading, error } = result.current;

        // Valores esperados por defecto de mi useFetch
        // 1. no ay data, data --> null
        expect( data ).toBe( null );
        // 2. No a termino de cargar la data, loadding --> true
        expect( loading ).toBe( true );
        // 3. No muestra un mensaje de error, error --> null
        expect( error ).toBe( null );
    });

    test('Debe retornar la info deseada ', async () => {
        // Realizamos una prueba a nuestro hook useFetch, esté lleva como parametro un URL
        const { result, waitForNextUpdate } = renderHook( ()=> useFetch(`https://www.breakingbadapi.com/api/quotes/1`));

        // Al ser una petición con asyn/await, usamos waitForNextUpdate() para esperar a que
        // se actualize el resultado, de lo contrario podria a ver errores.
        await waitForNextUpdate();

        // Extraemos las propiedades necesarias de mi useFetch mediante result.current después
        // de esperar que la petición se allá actualizado --> waitForNextUpdate();
        const { data, loading, error } = result.current;    
        
        // Manejando un error estos son los valores que esperamos de useFetch.
        // 1. Se completo la llegada de la data, y dentro lleva un (1) arreglo, data.length --> 1
        expect( data.length ).toBe( 1 );
        // 2. Termino de cargar la data, loadding --> false
        expect( loading ).toBe( false );
        // 3. No muestra un mensaje de error, error --> null
        expect( error ).toBe( null );
    });

    test('Debe de manejar el error ', async () => {
        // Colocamos una URL con error para manejar un error con useFetch
        const { result, waitForNextUpdate } = renderHook( ()=> useFetch(`https://reqres.in/apid/users?page=2`));

        // Al ser una petición con asyn/await, usamos waitForNextUpdate() para esperar a que
        // se actualize el resultado, de lo contrario podria a ver errores.
        await waitForNextUpdate();
        const { data, loading, error } = result.current;        

        // Manejando un error estos son los valores que esperamos de useFetch.
        // 1. No se completo la llegada de la data --> null
        expect( data ).toBe( null ); 
        // 2. Termino de cargar la data, loadding --> false
        expect( loading ).toBe( false );
        // 3. Muestra un mensaje de error, error --> 'No se pudo cargar la iformación'
        expect( error ).toBe( 'No se pudo cargar la iformación' );
    });
});
