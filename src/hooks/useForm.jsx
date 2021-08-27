import React, { useState } from 'react'

// Ese custom Hook nos permite referenciar el valor de algun input,
// en este caso esta echos espesificamente para ser usado referenciando al
// nombre del input, sea igual al valor escrito en ese input, por lo cual, 
// nos permitira usar lo escrito por el usuario.

const useForm = ( initialState = {}) => {

    const [values, setValues] = useState(initialState)

    // handleInputChange --> manejar el cambio de entrada
    const handleInputChange = ({ target }) => {
        // Con setValues cambiamos el estado inicial, por lo escrito
        // por el usuario en cada caja de texto
        setValues({
            ...values,
            [target.name]: target.value,
        });
    };

    // retornamos el estado, y mi función, y así podemos usar nuestro
    // custom Hook en alguna otra aplicasión
    return [
        values, 
        handleInputChange
    ];
};

export default useForm
