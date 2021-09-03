import { mount } from "enzyme";
import LoginScreen from "../../../components/09-useContext/LoginScreen";
import { UserContext } from "../../../components/09-useContext/UserContex";

describe('Pruebas en <loginScreen />', () => {

    // Definimos la función que queremos simular.
    const setUser = jest.fn();

    // Medinate mount, hacemos el proceso para hacer pruebas con 
    // useContext(), es con mount(), y va envuelto el componente
    // como si fuera un context.

    // Enviamos como valor del context nuestra función para poder
    // provarla, ya que al mandarla como argumento, se podra
    // usar em <LoginScreen></LoginScreen> para pruebas.
    const wrapper = mount( 
        <UserContext.Provider value={{ setUser }}>
            <LoginScreen ></LoginScreen> 
        </UserContext.Provider>
    );
    
    test('Debe de mostrarse correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de ejecutar el setUser con el argumento esperado', () => {

        // Parametros con los que esperamos que sea llamada la fución
        // setUser()
        const user1 = {
            id: 123,
            name: 'Victor'
        };
    
        wrapper.find('button').simulate('click');
        // Segundo método de simulación -->
        // wrapper.find('button').prop('onClick')();

        // Evaluamos que sea llamada la función junto con el argumento
        // epsreado.
        expect( setUser ).toHaveBeenCalled();
        expect( setUser ).toHaveBeenCalledWith( user1 );
    });
});
