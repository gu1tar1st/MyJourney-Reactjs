import { it, expect, describe, vi } from 'vitest';
import { Product } from './Product';
import { render, screen } from '@testing-library/react';

// unit test -> using expect
// integration test -> using render

// "vi" create a mock function of Product to prevent actual rendering

// "render" to render the component in a virtual DOM for testing
// "screen" to check what is rendered

describe('Label: Product Component Integration Tests', () => {

    it('displays the product details correctly', () => {
        const product = {
            id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            image: "images/products/athletic-cotton-socks-6-pairs.jpg",
            name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
            rating: {
                stars: 4.5,
                count: 87
            },
            priceCents: 1090,
            keywords: ["socks", "sports", "apparel"]
        }

        const loadCart = vi.fn(); // Fake function that does nothing

        render(<Product product={product} loadCart={loadCart} />);

        // toBeInTheDocument() is from jest-dom
        expect(
            screen.getByText('Black and Gray Athletic Cotton Socks - 6 Pairs')
        ).toBeInTheDocument() // check name
        expect(
            screen.getByText('$10.90')
        ).toBeInTheDocument() // check price
        // check image
        expect(
            screen.getByTestId('product-image')
        ).toHaveAttribute("src", "images/products/athletic-cotton-socks-6-pairs.jpg")
        // check stars
        expect(
            screen.getByTestId('product-rating-stars')
        ).toHaveAttribute("src", "images/ratings/rating-45.png")
        // check rating count
        expect(
            screen.getByTestId('product-rating-count')
        ).toHaveTextContent("87")
    });
})