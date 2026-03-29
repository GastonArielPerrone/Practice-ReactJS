import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';
import Main from '../components/Main';

describe("Main", () => {
  test("render products", () => {
    render(<Main />)

    expect(screen.getByText("1kg de Manzana")).toBeInTheDocument()
    expect(screen.getByText("6 Bananas")).toBeInTheDocument()
    expect(screen.getByText("1kg de Uvas")).toBeInTheDocument()
  })
});