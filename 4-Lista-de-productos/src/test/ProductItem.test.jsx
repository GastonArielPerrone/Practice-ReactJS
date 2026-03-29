import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ProductItem from '../components/ProductItem'

describe('ProductItem', () => {
  it('renders the product name', () => {
    render(<ProductItem productName="🍎 Manzana" />)
    expect(screen.getByText('🍎 Manzana')).toBeInTheDocument()
  })
})