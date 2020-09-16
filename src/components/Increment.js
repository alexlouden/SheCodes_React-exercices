import React, {useState,} from 'react'

function Increment () {
    const [value, setValue] = useState(0)
    let currentValue = value
    const handleChange = (event) => setValue(Number(event.target.value))
    const handleDecrement = () => setValue( currentValue + 1 )
    const handleIncrement = () => setValue( currentValue - 1 )
    console.log(value)

    return(
        <div>
        <h2>Exercice 1: Increment or decrement a number</h2>
        <p>Enter a value</p>
        <button onClick={handleIncrement}>-</button>
        <input type="number" value={value} onChange={handleChange} />
        <button onClick={handleDecrement}>+</button>
        </div>
    )
};

export default Increment