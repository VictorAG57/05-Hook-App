import React, { useContext } from 'react'
import { UserContext } from './UserContex';

const HomeScreen = () => {

    // Hacemos uso del useContext, para tener acceso a la
    // información almacenada dentro de ella y tener poder
    // modificar o usar su información.
    // En esté caso usaremos la información a mutado <LoginScreen />
    // y creamos la comunicación entre componentes sin necesidad de 
    // props o que los componentes sean hijos.
    const { user } = useContext( UserContext );

    return (
        <div>
            <h1>Home Screen - Página inicial</h1>
            <hr></hr>

            <pre>
                { JSON.stringify( user, null, 3 )}
            </pre>
        </div>
    );
};

export default HomeScreen;
