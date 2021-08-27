import React from 'react';
import useFetch from '../../hooks/useFetch';
import useCounter from '../../hooks/useCounter';

import '../02-useEffect/effects.css';

const MultipleCustomHook = () => {

    const { counter, increment} = useCounter(1)

    const { loading, data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${counter}` )
    // Aquí evaluamos si es que data existe, y hasta que no exista, no se
    // podra extraer la data en la pocisión 0, y ahora si podras usar  ambas variables.

    // Hacemos esta validación puesto que al traer la data de la URL, tarda en caragar,
    // y durante un moemento no existe data, hasta que no carge completamente la obtención 
    // de data.
    const { author, quote } = !!data && data[0];

    // const { author, quote } = data[0];
    // console.log(data)

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr></hr>

            {   // Miesntras loading sea falso, mostrara el panel de cargando
                loading ? (
                    <div className="alert alert-info text-center">Loading...</div>
                ): 
                // Pero cuado sea lo contario, es decir cuando cargue la información
                // la mostrara
                (
                    <blockquote className="blockquote text-right" >
                        <p className="mb-0">{ quote }</p><br></br>
                        <footer className="blockquote-footer">{ author }</footer>
                    </blockquote>
                )
            }

            <button 
                className="btn btn-primary"
                onClick={ ()=> increment(1) }
            >
                Cargar siguiente quote
            </button>
        </div>
    )
}

export default MultipleCustomHook;
