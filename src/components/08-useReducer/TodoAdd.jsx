import React, { Fragment } from 'react'
import useForm from '../../hooks/useForm';

const TodoAdd = ({ handleAddTodo }) => {

    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });

        // En el momento que se envíe el formulario -->
        const handleSubmit = ( e ) => {
            // Evitamos que se refresque la página
            e.preventDefault()
    
            if (description.trim().length <= 1){
                return ;
            }
    
            // Creamos la nueva tarea a agregar al estado
            const newTodo = {
                id: new Date().getTime(),
                desc: description,
                done: false
            };
            
            // Y enviamos esa acción mediante el dispatch
            handleAddTodo( newTodo );
    
            // Me permite resetear el formulario depues de agregar una tarea.
            reset()
        };

    return (
        <Fragment>
            <h3>Agregar TODO</h3>
                    <hr></hr>
                    <form onSubmit={ handleSubmit }>
                        <input
                            type="text"
                            name="description"
                            placeholder="descripción..."
                            className="form-control"
                            value={ description }
                            onChange={ handleInputChange }
                        >
                        </input>

                        <button 
                            className="btn btn-primary mt-1 form-control"
                            type="submit"
                        >
                            Agregar
                        </button>
                    </form>
        </Fragment>
    );
};

export default TodoAdd
