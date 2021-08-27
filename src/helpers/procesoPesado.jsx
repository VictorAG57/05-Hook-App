// Función de proceso pesado, se usa en el componente <MemoHook />
// Es un simple ciclo for que se ejecutara 2000 veces, pero es pesado para
// la computadora, por ello no se debe ejecutar si no es necesario.

export const procesoPesado = ( iteraciones )=> {
    for(let i = 0; i < iteraciones; i++){
        console.log('Ahi vamos ...')
    };
    return `${ iteraciones } iteraciones realizadas.`
};