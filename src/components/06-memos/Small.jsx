import React from 'react'

// Usamos React.memo() para decirle al componente que solo se renderizara
// nuevamente cuando sus props-propiedades cambien, y así evitas usar memoria 
// de manera inesesaria, ya que en ocasiones al usar componentes con props,
// se vuelven a renderizar aunque sus props no allán cambiado.
const Small = React.memo(({ value }) => {
    console.log('Me volvi a disparar')
    return (
        <small> { value }</small>
        
    );
});
export default Small
