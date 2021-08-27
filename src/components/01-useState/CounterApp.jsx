import React, { Fragment, useState } from 'react';
import './counter.css';

const CounterApp = () => {

    const [ counter, setCounter ] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
        counter5: 50
    });

    // Podemos extraer las propiedades del estado de forma independiente,
    // y así poder usar el spratOpreator "..." o demás funciónes
    const { counter1, counter2 } = counter;

    return (
        <Fragment>
            <h1>Counter1 { counter1 } </h1>
            <h1>Counter2 { counter2 } </h1>
            
            <hr></hr>
            <button 
                className="btn btn-primary"
                onClick={ ()=> {
                    setCounter({
                        // Nos permite guardar las propiedades anteriores
                        ...counter,
                        counter1: counter1 + 1
                    }); 
                }}>
                +1
            </button>
        </Fragment>
    )
}

export default CounterApp
