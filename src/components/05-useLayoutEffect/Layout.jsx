import React, { useState, useLayoutEffect, useRef } from 'react';
import useFetch from '../../hooks/useFetch';
import useCounter from '../../hooks/useCounter';

import '../02-useEffect/effects.css';
import './layout.css'


const Layout = () => {

    const { counter, increment} = useCounter(1)
    const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${counter}` )

    const { quote } = !!data && data[0];

    const [ boxSize, setBoxSize ] = useState({})

    // Nos permite tomar una referencia. --> ref={ pTag }
    const pTag = useRef()

    // useLayoutEffect nos sirve para sacar mediciones de cajas, elementos renderizados
    // etc, después de que se allá renderizado algo cambiara, algo que se ejecuta déspues del
    // useEffect, funcionan igual pero es mucho mejor usar useEffect, ya que useLayaoutEffect
    // se usa más para ver comportamientos depés de algo ser renderizado, evitemos usarlo de ser
    // necesario.
    useLayoutEffect(() => {
        // con cualquiere de las siguientes dos líneas de codigo, veremos
        // como cambia el tamaño de la caja donde se renderiza la frase que emos
        // traido, y así podemos ver un uso de useLayoutEffect, vemos comportamientos
        //despés de que se renderiza o cambia algo.
        
        // console.log(pTag.current.getBoundingClientRect())
        setBoxSize( pTag.current.getBoundingClientRect() )

        return () => {

        };
    }, [quote])


    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr></hr>

            <blockquote className="blockquote text-right" >
                <p className="mb-0" ref={ pTag }>{ quote }</p><br></br>
            </blockquote>

            <pre>
                {
                    JSON.stringify( boxSize, null, 3)
                }
            </pre>

            <button 
                className="btn btn-primary"
                onClick={ ()=> increment(1) }
            >
                Cargar siguiente quote
            </button>
        </div>
    )
}

export default Layout;