import React, { Fragment } from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ state, handleDelete, handleToggle }) => {
    return (
        <Fragment>
            <ul className="list-group list-group-flush">
                    {
                        state.map( ( todo, i ) => (
                            <TodoListItem 
                                key={ todo.id }
                                todo={ todo } 
                                i={ i } 
                                handleDelete={ handleDelete }
                                handleToggle={ handleToggle } 
                            >
                            </TodoListItem>
                        ))
                    }
                </ul>
        </Fragment>
    );
};

export default TodoList;
