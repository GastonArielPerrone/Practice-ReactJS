import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from '../components/Header';

describe('Header', () => {
    it('renders the header with logo', () => {
        render(<Header />);
        const img = screen.getByAltText('Logo Price Poster');
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('width', '300');
    });
});