import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Card from '../components/Card'
import { expect } from 'vitest'

describe('Componente Card', () => {

  test('renderiza children y aplica clase correctamente', () => {
    const { container } = render(
      <Card>
        <img src="/public/practica_seleccion_arg.jpg" alt="Entrenamiento Argentina"/>
        <figcaption>Entrenamiento de la selección argentina</figcaption>
        <h2>La selección de Argentina entrena para enfrentarse a Mauritania</h2>
        <p>El equipo nacional de fútbol argentino se prepara para su próximo partido contra Mauritania en el día 
          de hoy que servirá para prepararse antes del Mundial de Estados Unidos, Canadá y México 2026. El entrenador Lionel Scaloni ha convocado a los jugadores para una sesión de entrenamiento intensiva, enfocándose en mejorar la cohesión del equipo y la estrategia de juego. 
          Se espera que esta preparación ayude a la selección argentina a afinar su rendimiento y fortalecer su posición en el ranking mundial de fútbol.
        </p>
      </Card>
    )

    expect(screen.getByText('Entrenamiento de la selección argentina')).toBeInTheDocument()
    expect(screen.getByText('La selección de Argentina entrena para enfrentarse a Mauritania')).toBeInTheDocument()
    expect(screen.getByText(/El equipo nacional de fútbol argentino se prepara/)).toBeInTheDocument()
    const img = screen.getByAltText('Entrenamiento Argentina')
    expect(img).toBeInTheDocument()
    expect(container.firstChild).toHaveClass('card')
  })

})
