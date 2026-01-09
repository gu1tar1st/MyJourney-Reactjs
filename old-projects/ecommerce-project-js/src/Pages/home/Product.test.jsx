import { it, expect, describe, vi, beforeEach } from 'vitest';
import { Product } from './Product';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios'; // fake version of axios

vi.mock('axios'); // Mock axios to prevent actual API calls

// unit test -> using expect
// integration test -> using render

// "vi" create a mock function of Product to prevent actual rendering

// "render" to render the component in a virtual DOM for testing
// "screen" to check what is rendered

// "userEvent" to simulate user interactions

describe('Label: Product Component Integration Tests', () => {
    let product = {
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

    let loadCart = vi.fn(); // Fake function that does nothing

    // test hook
    beforeEach(() => {
        product = {
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

        loadCart = vi.fn(); // reset fake function before each test
    })

    it('displays the product details correctly', async () => {
        render(<Product product={product} loadCartItems={loadCart} />);

        const user = userEvent.setup();
        const addToCartButton = screen.getByTestId('add-to-cart-button');
        await user.click(addToCartButton); // takes time, so await

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


        expect(axios.post).toHaveBeenCalledWith(
            '/api/cart-items',
            {
                productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                quantity: 1
            }
        )

        expect(loadCart).toHaveBeenCalled(); // check if loadCart called
    });
})