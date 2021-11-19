import React, { useState } from "react";
import PropTypes  from "prop-types";

/* para usar el hook useState debemos importarlo */

const CounterApp = ({ value = 10 }) => {

    /* useState es un array recibe dos parametros primero una variable
    segundo una función */
    const [ counter, setCounter ] = useState ( value );

    // funcion para manejar eventos, en este caso un onclick
    const handleAdd = () => setCounter( counter + 1 );

    const handleSubtract = () => setCounter( counter - 1 );
    
    const handleReset = () =>  setCounter( value );

    return (
        <>
            <h1> Counter App </h1>
            <h2> { counter } </h2>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubtract }>-1</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp