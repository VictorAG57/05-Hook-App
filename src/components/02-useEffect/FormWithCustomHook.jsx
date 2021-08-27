import React, { Fragment, useEffect, useState } from 'react';
import useForm from '../../hooks/useForm';
import './effects.css';
// import Message from './Message';


const FormWithCustomHook = () => {


    // Llamamos a nuestro custom Hook. formValues --> state(values)
    // nuestro custom Hook no es mas que una función manejar el cambio
    // de entrada de la caja de texto, y su estado.
    const [ formValues, handleInputChange ] = useForm({
        name:  '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    useEffect( ()=> {

    });
    
    // Prevenimos que pueda ejecutar el submit por default, y imprimiremos
    // el estado en consola
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formValues)
    }

    return (
        // Se ejecutara está función cuando de guardar al bóton de la parte baja.
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
            <hr></hr>

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Escribe tu nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                >
                </input>
            </div>

            <div className='form-group'>
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Escribe tu email"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                >
                </input>
            </div>

            <div className='form-group'>
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="*****"
                    autoComplete="off"
                    value={ password }
                    onChange={ handleInputChange }
                >
                </input>
            </div>

            <button type="submit" className="btn btn-primary">
                Guardar
            </button>
        </form>
    );
};

export default FormWithCustomHook;
