
// --------------------------------------------
// --> Función reducer() del hook useReducer()
// --------------------------------------------

const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

// 1. Usualmente lleva dos argumentos --> state, action
// 2. Las acciones siempre modifican el state
// 3. useReducer por defecto siempre retorna un estado
// 4. no usar .push() ya que modifica el estado, y la idea de useReducer
//    es crear un state nuevo, no modificarlo. En general lo mejor es 
//    no usar .push() en react.
// 5. Para añadir un nuevo elemento al useReducer, lo enviaras mediante 
//    la acción

const todoReducer = ( state = initialState, action ) => {

    // Evaluamos si es que la acción existe (action?), de ser así evaluamos
    // si su type/función es igual a la esperada.

    if( action?.type === 'agregar' ){

        // Para crear el nuevo estado no usaremos .push(), por razones
        // ya explicadas, por ello creamos uno nuevo, treyyendo las propiedades
        // anteriores, mas la nueva acción que está dentro de payload.

        // Esté objeto sera el nuevo state echo con useReducer
        return [ ...state, action.payload]
    };

    // La acción devolvera el estado.
    // toDos === state
    return state;
};

// guardamos dentro de nuestra variable toDos nuestra Reducer
// con solamente el estado inicial.
// No agregamos ningún argumento.
let toDos = todoReducer(); // --> toDos === state

const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
};

const newAction = {

    // Es un estandar que la acción siempre lleve un type
    // para saver que hara esa acción.
    // type define que tipo de acción es. El nombre con el que evaluaremos.
    type: 'agregar',

    // Es recomendable que al agregar la nueva acción o estado creado,
    // se le nombre peyload más la nueva acción. Es un stadar para identificarlo
    // facilmiente, nosotros y lode demás desarrolladores.
    payload: newTodo // --> Nueva acción = payload
    // newTodo: newTodo
}

// Acá agregamos el estado inicial nuevamente, pero colocamos la función dentro
// de toDos para no inizializarla de nuevo, y como segundo argumento la nueva acción
// a ejecutar DENTRO de useReducer.
// --> toDos === state, newAction === acción a realizar[]
toDos = todoReducer( toDos, newAction);
console.log( toDos );