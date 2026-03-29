import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import UserCard from '../components/UserCard'

describe('UserCard', () => {
  it('renders user information correctly', () => {
    const user = {
      name: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      avatar: './public/avatar.png',
      profession: 'Software Engineer'
    }
    render(<UserCard {...user} />)
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Email: john.doe@example.com')).toBeInTheDocument()
    expect(screen.getByText('Profession: Software Engineer')).toBeInTheDocument()
    const img = screen.getByAltText('John Doe')
    expect(img).toBeInTheDocument()
  })
})