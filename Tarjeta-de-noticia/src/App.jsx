import './App.css'
import Card from './components/Card'

function App() {
 
  return (
    <>
      <Card>
        <img src="/public/practica_seleccion_arg.jpg" alt="Entrenamiento Argentina"/>
        <figcaption>Entrenamiento de la selección argentina</figcaption>
        <h2>La selección de Argentina entrena para enfrentarse a Mauritania</h2>
        <p>El equipo nacional de fútbol argentino se prepara para su próximo partido contra Mauritania en el día 
          de hoy que servirá para prepararse antes del Mundial de Estados Unidos, Canadá y México 2026. El entrenador Lionel Scaloni ha convocado a los jugadores para una sesión de entrenamiento intensiva, enfocándose en mejorar la cohesión del equipo y la estrategia de juego. 
          Se espera que esta preparación ayude a la selección argentina a afinar su rendimiento y fortalecer su posición en el ranking mundial de fútbol.
        </p>
      </Card>
    </>
  )
}

export default App
