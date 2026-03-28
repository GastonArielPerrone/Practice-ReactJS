import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Main from '../components/Main'

describe('Main', () => {
  it('renders the list of users', () => {
    render(<Main />)
    expect(screen.getByText('Credentials lists')).toBeInTheDocument()
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
    expect(screen.getByText('Bob Johnson')).toBeInTheDocument()
  })
})