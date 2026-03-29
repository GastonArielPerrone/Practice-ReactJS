import { describe, it, expect } from 'vitest'
import saludo, { numeroAleatorio } from '../js/saludo'

describe('Función saludo', () => {
  it('devuelve el saludo correctamente', () => {
    const resultado = saludo('Gastón')
    expect(resultado).toBe('Hola, Gastón! 😉 ')
  })
})

describe('numeroAleatorio', () => {
  it('devuelve un número entre 1 y 100', () => {
    const num = numeroAleatorio()

    expect(num).toBeGreaterThanOrEqual(1)
    expect(num).toBeLessThanOrEqual(100)
  })
})
