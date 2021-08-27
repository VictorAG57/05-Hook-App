import React from 'react'

const ShowIncrement = ({ increment }) => {

    console.log('Me volvi a generar')

    return (
        <button 
            className="btn btn-primary"
            onClick={ ()=> {
                increment()
            }}
        >
            Incrementar
        </button>
    )
}

export default ShowIncrement
