
export const todoReducer = ( state = [], action ) => {

    switch ( action.type ) {
        case 'add':
            // La acción add me permite enviar un nuevo estado con el las 
            // pripedades del estado anterior más la nueva tarea (action.payload).
            return [ ...state, action.payload ];

        case 'delete':
            // La acción delete me permite borrar una tarea según su id.
            // .filter me permitira filtrar el estado y enviar uno nuevo state
            // pero sin la tara/toDo que le emos indicado a travez del id.
            // Es decir nos borrara del estado la tarea con id que le allamos 
            // indicado.

            // state.filter( todo => todo.id !== action.payload); -->
            //    Regresame en un arreglo con tados aquellos toDos/tareas que no
            //    sean iguales a este id (action.payload)
            return state.filter( todo => todo.id !== action.payload);   
    
        case 'toggleAlternativaDeCodigoLargo':
            return state.map( todo => {
                if ( todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }else{
                    return todo;
                }
            })
        case 'toggle':
            return state.map( todo =>
                ( todo.id === action.payload )
                    // retornamos toda la información anterior (...todo) más
                    // marcar lo contrario (done: !todo.done) de la 
                    // propiedad done (true/false) false
                    ? { ...todo, done: !todo.done }
                    // de lo contrario retornamos el mismo estado
                    : { todo }
            )
        default:
            return state;
    };
};