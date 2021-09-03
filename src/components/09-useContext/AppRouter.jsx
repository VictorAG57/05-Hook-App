import React from 'react';

// Importaciones de React Router
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom"; 

// Nuestras importaciones
import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import NavBar from './NavBar';

// Esté componente se encargara de manejar mis rutas de la librería
// React Router, de está manera cada ruta que creemos la estaremos
// viendo acá.

const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar></NavBar>
                <Switch>
                    { /** Página inicial */}
                    <Route exact path="/" component={ HomeScreen }></Route>

                    <Route exact path="/login" component={ LoginScreen }></Route>
                    <Route exact path="/about" component={ AboutScreen }></Route>

                    <Redirect to="/"></Redirect>
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;
