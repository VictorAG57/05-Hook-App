import React, {Fragment} from 'react';
import useCounter from '../../hooks/useCounter';
import './counter.css';

const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter()

    return (
        <Fragment>
            <h1>Conter with Hook: { state } </h1>
            <hr></hr>

            <button 
                className="btn btn-primary"
                // Podemos establecer el factor de crecimineto en el argumento
                onClick={ ()=> increment(2) }
            >+1
            </button>
            <button 
                className="btn btn-primary"
                // Podemos establecer el factor de decremento en el argumento
                onClick={ ()=> decrement(2) }
            >-1
            </button>
            <button 
                className="btn btn-primary"
                // Podemos establecer el factor de decremento en el argumento
                onClick={ reset }
            >Reset
            </button>
            
        </Fragment>
    )
};

export default CounterWithCustomHook
