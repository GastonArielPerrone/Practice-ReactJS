import { useEffect, useState } from 'react';
import './Contador.css';

export const Contador = () => {
    const [contador, setContador] = useState(0)

    useEffect(() => {
        console.log('El contador ha cambiado:', contador);
    },[contador]);

    const incrementar = () => {
        setContador(contador + 1)
    }

    const decrementar = () => {
        setContador(contador - 1)
    }

    return (
        <div>
            <h1>Contador</h1>
            <p className='number-container'>{contador}</p>
            <button onClick={incrementar}>+</button>
            <button onClick={decrementar}>-</button>
        </div>
    )
}