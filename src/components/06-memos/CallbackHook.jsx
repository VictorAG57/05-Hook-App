import React, { useState, useCallback } from 'react';
import ShowIncrement from './ShowIncrement';

import '../02-useEffect/effects.css';


const CallbackHook = () => {

    const [ counter, setCounter ] = useState(1);


    // const increment = ()=>{
    //     setCounter( counter + 1)
    // }

    // useCallback es usado para memorizar una función mientras que useMemo
    // es para memorizar una fucnión y su valor, su prop, es lo que las diferencia
    // useCallback memorizara la función, y react sabra si cambio la función 
    // con la dependencia, pero esta dependencia puede ser la funció´n, no un valor como
    // en useMemo.

    // En resumen usaras useCallback solo para memorizar funciones, y useMemo para 
    // memoriza la función y el argumento, es decir nos memoriza el valor.

    // UseCallback retorna una función
    const increment = useCallback( () => {
            // En lugar de setCounter( counter + 1) usamos la línea de abajo
            // ya que así evitamos depender de counter y se memorizara la función
            // y solo se reacrgara cuando la función cambie.
            setCounter( c => c + 1)
        }, [ setCounter ],
    );

    // En esté aco también podriamos usar un useCallback, cunado usemos un useEffect.
    // Lo usamos aquí cuando useEffect tiene una dependecia, y esa dependencia es una función
    // usamos useCallback, y así nuestra función memorizada por use callback no se dispararia
    // cada que se renderiza el componente de nuevo, ya que la función no cambiara, de lo contrario
    // se dispararia cada que se renderizara el componente. 

    // useEffect(() => {
    //     // Lógica 
    // }, [ funcion ])

    return (
        <div>
            <h1>useCallback Hook: { counter }</h1>
            <hr></hr>

            <ShowIncrement increment={ increment }></ShowIncrement>
        </div>
    );
};

export default CallbackHook;
