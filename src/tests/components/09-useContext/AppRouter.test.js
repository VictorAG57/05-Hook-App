import { mount } from "enzyme";
import AppRouter from "../../../components/09-useContext/AppRouter";
import { UserContext } from "../../../components/09-useContext/UserContex";

describe('Pruebas en <AppRouter></AppRouter>', () => {

    // Pruebas en en la librería <Router></Router>
    // solamente hacemos un snapshot, en pruebas futuras
    // evaluaremos cosas más importantes, es necesario usar
    // UserContext.Provider ya que router necesita del argumento
    // 'user', mismo que es partse del UserContext, por ello creamos
    // user e implementamos <UserContext></UserContext>

    const user = {
        id: 1,
        name: 'Victor'
    }

    const wrapper = mount(
        <UserContext.Provider value={{ user }}>
            <AppRouter />
        </UserContext.Provider>
    );

    test('Debe de mostrarse correctamente ', () => {
        expect( wrapper ).toMatchSnapshot();
        
    });
});
