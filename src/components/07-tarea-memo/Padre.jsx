import React from 'react';
import { Hijo } from './Hijo';
import { useState, useCallback } from 'react';

import '../02-useEffect/effects.css';
// En está tarea tenemos que memorizar la función incrementar
// para evitar que se consuma la memoria cada que presionamos 
// un botón, evitamos que se ejecute la función incrementar cada
// qu epulsamos el botón, ya que no hay necesidad puesto que la 
// función nunca cambía, por lo tanto no ay que ejecutarla de nuevo.

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    // función a memorizar = useCallback
    // const incrementar = ( num ) => {
    //     setValor( valor + num )
    // }

    const incrementar = useCallback( ( num ) => {
        // valor (v) es igual al valor anterior (v) mas (+) el número (num)
        setValor( v => v + num)
    }, [ setValor ],); 


    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
