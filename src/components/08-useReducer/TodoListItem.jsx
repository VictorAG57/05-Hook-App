import React, { Fragment } from 'react'

const TodoListItem = ({ todo, i, handleDelete, handleToggle }) => {
    return (
        <Fragment>
            <li
                key={ todo.id }
                className="list-group-item"
            > 
                <p 
                    className={`${ todo.done && 'complete'}`}
                    onClick={ ()=> handleToggle( todo.id )}
                >
                    { i + 1 }. { todo.desc }
                </p> 
                <button 
                    className="btn btn-danger"
                    onClick= { () => handleDelete(todo.id) }
                >
                    Borrar
                </button>
            </li>
        </Fragment>
    );
};

export default TodoListItem
