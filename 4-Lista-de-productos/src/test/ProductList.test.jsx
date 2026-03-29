import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ProductList from '../components/ProductList'

describe('ProductList', () => {
  it('renders the list of products', () => {
    render(<ProductList />)
    expect(screen.getByText('🍎 Manzana')).toBeInTheDocument()
    expect(screen.getByText('🍌 Banana')).toBeInTheDocument()
    expect(screen.getByText('🍊 Naranja')).toBeInTheDocument()
    expect(screen.getByText('🍐 Pera')).toBeInTheDocument()
  })
})