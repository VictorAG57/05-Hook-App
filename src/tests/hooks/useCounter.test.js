import { renderHook, act} from '@testing-library/react-hooks';
import useCounter from '../../hooks/useCounter';

// Testeamos nuestro custom Hook use counter, un contador que cuenta
// con tres funciones, incrementar, decrementar y reset.

describe('Se muestre correctamente el componente', ()=> {
    test('debe retornar correctamente los valores por defecto', () => {
        
        const { result } = renderHook( ()=> useCounter() );
        // console.log(result.current);

        // Esperamos el valor por defecto de nuestro counter/state.
        expect( result.current.counter ).toBe(1);
        // Testeamos que nuestras tres funciones sean de tipo 'function'.
        expect( typeof result.current.increment ).toBe('function');
        expect( typeof result.current.decrement ).toBe('function');
        expect( typeof result.current.reset ).toBe('function');
    });

    test('debe retornar correctamente los valores de argumento (100)', () => {
        
        const { result } = renderHook( ()=> useCounter( 100 ));

        // Esperamos el valor puesto en el argumento 
        // de nuestro counter/state.
        expect( result.current.counter ).toBe(100);
    });

    test('debe de incrementar el counter en 1 (+1)', () => {
        
        const { result } = renderHook( ()=> useCounter( 100 ));
        // Extraemos la función de nuestro custom Hook
        const { increment } = result.current;

        // act(()=>{}) nos permite ejecutar acciones, en esté caso funciones
        // ya que  por si solas no funcionarian. 
        // Nos permite ejecutar funciones.
        act( ()=> {
            // Esto ejecutara un +1 en mi valor (100)
            increment();
        });

        // Ahora extraemos el conter/state, donde estara nuestro valor 
        // esperado (100 + 1 === 101).
        const { counter } = result.current;
        expect( counter ).toBe(101)
    });

    test('debe de decrementar el counter en 1 (-1)', () => {
        
        const { result } = renderHook( ()=> useCounter( 100 ));
        // Extraemos la función de nuestro custom Hook
        const { decrement } = result.current;

        // act(()=>{}) nos permite ejecutar acciones, en esté caso funciones
        // ya que por si solas no funcionarian. 
        // Nos permite ejecutar funciones.
        act( ()=> {
            // Esto ejecutara un +1 en mi valor (100)
            decrement();
        });

        // Ahora extraemos el conter/state, donde estara nuestro valor 
        // esperado (100 - 1 === 99).
        const { counter } = result.current;
        expect( counter ).toBe(99)
    });

    test('debe de resetear el counter en al valor inicial (100)', () => {
        
        const { result } = renderHook( ()=> useCounter( 100 ));
        // Extraemos la función de nuestro custom Hook
        const { increment, reset } = result.current;
        // const { reset } = result.current;

        // act(()=>{}) nos permite ejecutar acciones, en esté caso funciones
        // ya que  por si solas no funcionarian. 
        // Nos permite ejecutar funciones.
        act( ()=> {
            // Esto ejecutara un +1 en mi valor (100)
            increment();
            // Reseteamos el valor (100)
            reset();
        });

        // Ahora extraemos el conter/state, donde estara nuestro valor 
        // esperado (100 + 1 === 101, reset === 100).
        const { counter } = result.current;
        expect( counter ).toBe(100)
    });
});