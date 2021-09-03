import { shallow } from "enzyme";
import TodoAdd from "../../../components/08-useReducer/TodoAdd";

describe('Pruebas en <TodoAdd />', () => {

    const handleAddTodo = jest.fn();

    const wrapper = shallow(
        <TodoAdd
            handleAddTodo={ handleAddTodo }
        >
        </TodoAdd>
    );
    test('Debe de mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
    });

    test('No debe de llamar handleAddTodo', () => {

        // Está es una alternativa a .simulate(), solo que usamos 
        // . prop('acción').
        const formSubmit = wrapper.find('form').prop('onSubmit');

        // Y aquí lo que queremos hacer, que es prevenir que se pueda enviar
        // el formulario sin que tenga contenido la caja de texto, y en esté 
        // caso no hemos puesto ningún valor en la caja de texto.
        formSubmit({ preventDefault(){} });

        // Esperamos que la función sea llamada 0 veces.
        expect( handleAddTodo ).toHaveBeenCalledTimes(0);
    });

    test('Debe de llamar la acción handleAddTodo', () => {

        const input = wrapper.find('input');
        const value = "Hola mundo"

        // Aquí lo que hacemos es cambiar el valor de la caja de texto,
        // esto lo hacemos referenciando al input, haciendo un simulación y 
        // a travez del target, le necesitamos pasar el valor que llevara la caja de 
        // texto (que ya hemos asignado), y el nombre de la caja de texto que deseamos
        // cambiar (name: 'description')
        input.simulate('change', { target: { value, name: 'description' }});

        // Y aquí al dar submit, simulamos el preventDefault()
        wrapper.find("form").simulate("submit", { preventDefault(){} })
        // --> Segundo método para simular - funciona exactamente igual
        // const formSubmit = wrapper.find('form').prop('onSubmit');
        // formSubmit({ preventDefault(){} });

        // Esperamos que allá sido llamada la función
        // Aquí ya puede ser llamada la función ya que el input ya tiene un valor.
        // de lo contrario no s epodría llamar.
        expect( handleAddTodo ).toHaveBeenCalled();

        // Aquí esperamos que la función allá sido llamada con cualquier objeto.
        expect( handleAddTodo ).toHaveBeenCalledWith( expect.any(Object));

        // y aquí hacemo slo mismo pero espesificando cada parte del objeto resivido.
        expect( handleAddTodo ).toHaveBeenCalledWith( {
            desc: value,
            done: false,
            // el ID al ser una fecha, esperamos que sea cualquier número.
            id: expect.any(Number)
        });

        // Y po último comprovamos que se alla ejecutado la función reset()
        // a travez e lo que está funcion hara, es decir, dejar el valor del
        // input en vacio ('');
        expect( wrapper.find('input').prop('value')).toBe('');

    });
});
