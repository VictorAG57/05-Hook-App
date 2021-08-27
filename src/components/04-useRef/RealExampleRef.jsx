import React, { Fragment, useState } from 'react';
import '../02-useEffect/effects.css'
import MultipleCustomHook from '../03-examples/MultipleCustomHook';

const RealExampleRef = () => {


    const [show, setShow] = useState(false)

    return (
        <Fragment>
            <h1>Real custom hook</h1>
            <hr />

            { show && <MultipleCustomHook></MultipleCustomHook> }

            <button 
                className="btn btn-primary"
                onClick={
                    ()=> setShow( !show )
                }
                >
                    Show
            </button>
            
        </Fragment>
    )
}

export default RealExampleRef
