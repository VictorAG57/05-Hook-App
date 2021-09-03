import { mount, shallow } from "enzyme";
import HomeScreen from "../../../components/09-useContext/HomeScreen";
import { UserContext } from "../../../components/09-useContext/UserContex";

describe('Pruebas en <HomeScreen />', () => {

    // Haremos como si simularamos useContext para que funcione la prueba.
    const user = {
        name: 'Victor',
        email: 'victor@gmail.com'
    };

    // mount() lo suaremos cuando necesitamos renderizar todo en general
    // en vez de shallow(), en el caso de hacer .toMatchSnapshot() cuando haces
    // pruebas con useContext usaremos mount().

    // --> Pruebas con useContext usaremos mount(), no shallow().

    // Para que nuestro wrapper funcione con useContext, es nesesario envolver 
    // dentro al componente que deseamos renderizar, dentro del useContext,
    // como si fueramos usar useContext normalmente, esto para que el snapshot
    // funcione realmente.
    const wrapper = mount( 
        <UserContext.Provider value= {{ user }}>
            <HomeScreen></HomeScreen>
        </UserContext.Provider>
    );
    test('Debe mostrarse correctamente ', () => {

        expect( wrapper ).toMatchSnapshot();
    });
});
