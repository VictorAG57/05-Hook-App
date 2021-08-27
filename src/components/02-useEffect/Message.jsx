import React, { Fragment, useEffect, useState } from 'react'

const Message = () => {

    const [ coords, setCoords ] = useState({ x:0, y:0 });
    // Extraemos (desestructuramos) los valores del estado (coords)
    const { x, y } = coords;

    useEffect(() => {
        
        const mouseMove = (e) =>{
            // Asignamos el nuevo valor a nuestro estado, el cual sera
            // las cordenadas según la posición de nuestro mause (e.x, e.y).
            const coords2 = { x: e.x, y: e.y };
            setCoords(coords2);
            
            /**
             *  setCoords({
                    x: e.x,
                    y: e.y
                })
            */
        }
        // En vez de usar un callBack en el addEventListener de forma tradicional, 
        // lo guardamos en una varieable.
        window.addEventListener('mousemove', mouseMove);

        // Este return sirve para limpiar los eventos o efectos secundarios
        // echos por nuestro useEffect
        return () => {
            //Aquí removemos nuestro addEventListener
            window.removeEventListener('mousemove', mouseMove);
        };
    }, []);

    return (
        <Fragment>
            <h3>Cordenadas</h3>
            <p> x: { x } y: { y }</p>
        </Fragment>
    );
};

export default Message
