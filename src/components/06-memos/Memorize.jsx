import React, { Fragment, useState } from 'react';
import useCounter from '../../hooks/useCounter';
import Small from './Small';
import '../02-useEffect/effects.css';

// Estructura que usamos como ejemplo para usar React.memo() en 
// el componente <Small></Small>

const Memorize = () => {

    const { counter, increment} = useCounter( 10 );
    const [show, setShow] = useState(true)

    return (
        <Fragment>
            <h1>Memorize</h1>
            <hr></hr>
            {
                // Aquí usamos el componente <Small></Small> con React.memo()
            }
            <h2>Counter: <Small value={ counter }></Small></h2>
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
                show { JSON.stringify(show) }
            </button>
            
        </Fragment>
    );
};

export default Memorize;
