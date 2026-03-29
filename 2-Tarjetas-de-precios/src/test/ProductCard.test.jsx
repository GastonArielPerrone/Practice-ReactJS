import { render, screen } from "@testing-library/react"
import ProductCard from "../components/ProductCard"
import '@testing-library/jest-dom'

describe("ProductCard", () => {
  it("renders the product name and price", () => {
    render(<ProductCard tittle="🍎 Manzana" price="1.00" />)

    expect(screen.getByText("🍎 Manzana")).toBeInTheDocument()
    expect(screen.getByText("$1.00")).toBeInTheDocument()
  })
});