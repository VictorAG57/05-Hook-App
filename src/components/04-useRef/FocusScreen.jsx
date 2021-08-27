import React, { Fragment, useRef } from 'react';
import '../02-useEffect/effects.css'

const FocusScreen = () => {

    // UseRef nos puede servir para detectar la referencia así un objrto,
    // por ejemplo lo escrito por el usuario --> inputRef.current.value,
    // claro useRef tiene muchisimo más usos.
    // debemos colocarle al input --> ref={inputRef}

    const inputRef = useRef()

    // const handleClick = ()=> {
    //     document.querySelector('input').select(); 
    // }

    const handleClick = ()=> {
        inputRef.current.select(); 
        console.log(inputRef.current.value)
    }

    return (
        <Fragment>
            <h1>Hola mundo</h1>

            <input 
                ref={inputRef}
                className="form--control"
                placeholder="Nombre">
            </input><br></br>

            <button
                className="btn btn-outline-primary mt-5"
                onClick={ handleClick }>
                Focus
            </button>
            
        </Fragment>
    );
};

export default FocusScreen;
