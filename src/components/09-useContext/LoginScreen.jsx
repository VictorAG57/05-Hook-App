import React, { useContext } from 'react';
// Es necesario importar el context.
import { UserContext } from './UserContex';

const LoginScreen = () => {
    // Haremos una comunicación entre componentes, mediante <LoginScreen></LoginScreen>
    // cambiaremoes el estado de UserContext con un bóton, dicha información
    // se renderizara en otro componente: <HomeScreen></HomeScreen>, de está
    // manera hacemos uso de useContext con la comunicación de componentes, 
    // cambiamos el estado en una, y se renderizara en otra, toda esto sin usar
    // props, y así compartimos info sn nesecidad de que los componetes sean hijos.

    // 1. Obtener la referencia a de mi UserContext
    const { user, setUser } = useContext( UserContext );

    // 2. establecer el objeto o valor nuevo
    const user1 = {
        id: 123,
        name: 'Victor'
    };
    
    // 3. Con el siguiente bónton cambios el estado y hará que se renderize la info
    // en el componente <HomeScreen></HomeScreen>
    return (
        <div>
            <h1>Login Screen</h1>
            <hr></hr>

            <button 
                className="btn btn-primary"
                onClick={ ()=> setUser( user1 )}
            >
                Login
            </button>
        </div>
    );
};

export default LoginScreen;
