import { createContext } from 'react';

// Primero necesitamos crear un context, para ello usamos el createContext
// y lo guardamos dentro de una variable, y dentro de esá variable es con la
// que manejaremos el context en otros componentes pata compartir la información 
// entre ellos.
export const UserContext = createContext( null );