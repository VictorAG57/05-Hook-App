import React, { useState } from 'react';
import AppRouter from './AppRouter';
// Es necesario importar nuestro context
import { UserContext } from './UserContex';

const MainApp = () => {

    // Mediante el useState oidremos cambiar la información dentro del useContext
    // y así al comunicarse entre componentes pueden manejar y modificar esá información
    // dentro del context y se actualizara en todos los componentes, haciendo
    // muy facil el cambio y comunicación de información y componentes.
    const [user, setUser] = useState({ })

    // Es necesario que una vez creado nuestro useContext, lo importemos
    // a nuestro archivo principal, en esté caso el 'MainApp.jsx', dónde 
    // envolveremos el componente por defecto de está aplicación en nuestro
    // <UserContext.Provider></UserContext.Provider>, agregamos el .Provider para
    // que funcione correctamente.
    // Esté useContext nos permitira enviar ciertas funciones, métodos, arays, etc
    // entre componentes de manera directa, sin tenerlos que enviar mediante las propiedades
    // consecutivamente, es un archivo de orden superior donde podras consultar la
    // información o datos que allás guardado.

    // value -->
    // Mediante la propiedad value podemos enviar esá información que queremos envíar
    // entre componentes. En esté caso enviaremos un objeto dentro del value,
    // nuestro estato, que contendra toda la información actual, y el setState
    // que me permitira cambiar la información del context y actualizarla.
    return (
        <UserContext.Provider value={ {
            user,
            setUser
        } }>
            <AppRouter></AppRouter>
        </UserContext.Provider>
    );
};

export default MainApp;
 