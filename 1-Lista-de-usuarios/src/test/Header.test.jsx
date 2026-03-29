import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from '../components/Header'

describe('Header', () => {
  it('renders the header with logo', () => {
    render(<Header />)
    const img = screen.getByAltText('Identification Systems')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('width', '300')
  })
})