import React, { Fragment, useState, useEffect } from 'react';
import './effects.css';
import Message from './Message';

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name:  '',
        email: ''
    });

    const { name, email } = formState;

    useEffect( ()=> {
        console.log('name')
    }, [name]);

    useEffect( ()=> {
        console.log('email')
    }, [email]);

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value,
        });
    };

    return (
        <Fragment>
            <h1>useEffect</h1>
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
            {
                (name === '123') && <Message></Message>
            }
        </Fragment>
    );
};

export default SimpleForm;
