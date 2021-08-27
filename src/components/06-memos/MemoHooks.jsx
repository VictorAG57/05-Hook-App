import React, { Fragment, useState, useMemo } from 'react';
import useCounter from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';

import '../02-useEffect/effects.css';

const MemoHook = () => {

    const { counter, increment} = useCounter( 2000 );
    const [ show, setShow ] = useState(true);

    // useMemo() recibe un callBack/función, y las depependencias, es decir, si algo cambia
    // quiero que vuelvas a ejecutar useMemo, en este caso, que vuelvas a memorizar la función
    // recibida, en esté caso solo si el contador cambia, mismo argumento que lleva la función
    // volvera a memorizar la función, ya que el argumento cambio y necesita renderizarse de nuevo
    // muuy similar a como funciona React.memo() pero en hook.
    // De está manera evitamos que nuestra función se ejecute nuevamente si es que el argumento/valor
    // no a cambiado o no tiene la necesidad de renderizarse de nuevo.

    // Si counter (prop) cambia, necesitamos que se memorize nuevamente la función.
    const memoProcesoPesado = useMemo(() => procesoPesado( counter ), [ counter ])

    return (
        <Fragment>
            <h1>MemoHook</h1>
            <hr></hr>
           
           <h2>Counter: <small>{ counter }</small></h2>

           {/* <h2>Counter: <small>{ counter }</small></h2> */}
           <p>{ memoProcesoPesado }</p>
           
            <button 
                className="btn btn-primary"
                onClick={ ()=> increment(1) }
            >
                +1        
            </button>

            <button 
                className="btn btn-primary"
                onClick={ ()=> {
                    setShow(!show)
                }}
            >
                show { JSON.stringify( show ) }
            </button>
            
        </Fragment>
    );
};

export default MemoHook;
