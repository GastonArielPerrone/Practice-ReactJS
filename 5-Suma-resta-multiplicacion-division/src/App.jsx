import './App.css'
import { sumar, restar, multiplicar, dividir } from '../js/utils'

function App() {

  return (
    <>
      <h1>Calculadora</h1>
      <p>Suma: {sumar(5, 3)} <span>(5 + 3)</span></p>
      <p>Resta: {restar(5, 3)} <span>(5 - 3)</span></p>
      <p>Multiplicación: {multiplicar(5, 3)} <span>(5 * 3)</span></p>
      <p>División: {dividir(5, 3)} <span>(5 / 3)</span></p>
    </>
  );
}

export default App
