import { renderHook, act} from '@testing-library/react-hooks';
import useForm from '../../hooks/useForm';


describe('El custom hook useForm debe funcionar correctamente', () => {
    
    const initialForm = {
        name: 'Victor',
        email: 'vic_thor@hotmail.com'
    };

    test('Debe de regresar un formulario por defecto ', () => {
        // 1 argumento debe ser igual a mi initialForm
        // 2, 3 argumento edben ser funciones.

        const { result } = renderHook( ()=> useForm( initialForm ) );
        const [ formValues, handleInputChange, reset ] = result.current;

        expect( formValues ).toEqual( initialForm );
        expect( typeof handleInputChange).toBe('function');
        expect( typeof reset).toBe('function');
    });

    test('Debe de cambiar el valor del formulario', () => {
        // Cambiar el nombre --> handleInputChange

        const { result } = renderHook( ()=> useForm( initialForm ) );
        const [ , handleInputChange, ] = result.current;

        const initialForm2 = {
            name: 'Manuel',
            email: 'vic_thor@hotmail.com'
            // manuel@gmail.com
        };

        // Está función nos permite modificar las propiedades del objeto,
        // recibe un { target }.
        act( ()=> {
            handleInputChange({ target: {
                // Aqui referenciamos mediante name, que propiedad deseamos
                // cambiar de nuestro initialForm, el name o el email
                name: 'name',
                //name: 'email',
                value: 'Manuel'
                // value: 'manuel@gmail.com'
            }});
        });

        // Aquí extraemos el estado/values mediante corchetes ya que es un
        // arreglo.
        const [ values ] = result.current;
        console.log(values)

        expect( values ).toEqual( initialForm2 );
        expect( values ).toEqual({ ...initialForm, name:'Manuel'});
    });
    
    test('Debe de restablecer el formulario  ', () => {

        const { result } = renderHook( ()=> useForm( initialForm ) );
        const [ , handleInputChange, reset ] = result.current;

        const initialForm2 = {
            name: 'Manuel',
            email: 'vic_thor@hotmail.com'
            // manuel@gmail.com
        };

        act( ()=> {
            // Está función nos permite modificar las propiedades del objeto,
            // recibe un { target }.
            handleInputChange({ target: {
                // Aqui referenciamos mediante name, que propiedad deseamos
                // cambiar de nuestro initialForm, el name o el email
                name: 'name',
                //name: 'email',
                value: 'Manuel'
                // value: 'manuel@gmail.com'
            }});
            // Usamos está función para recetear los cambios echos por handleInputChange
            // y así asegurarnos que vuelva al esatdo inicial.
            reset()
        });

        // Aquí extraemos el estado/values mediante corchetes ya que es un
        // arreglo.
        const [ values ] = result.current;
        console.log(values)

        // Evaluamos que despues de las modificasiones allá vuelto al estado inicial
        // tras usar reset()
        expect( values ).toEqual( initialForm );
    });
});
