import { it, expect, describe, vi, beforeEach } from 'vitest';
import { HomePage } from './HomePage';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios'; // fake version of axios
import { MemoryRouter } from 'react-router'; // specifically for testing

vi.mock('axios'); // Mock axios to prevent actual API calls

let loadCart;

const mockProducts = [
    {
        id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        image: "images/products/athletic-cotton-socks-6-pairs.jpg",
        name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
        rating: {
            stars: 4.5,
            count: 87
        },
        priceCents: 1090,
        keywords: ["socks", "sports", "apparel"]
    },
    {
        id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        image: "images/products/intermediate-composite-basketball.jpg",
        name: "Intermediate Size Basketball",
        rating: {
            stars: 4,
            count: 127
        },
        priceCents: 2095,
        keywords: ["sports", "basketballs"]
    }
]

beforeEach(() => {
    loadCart = vi.fn(); // reset fake function before each test

    // since the mocked axios literally has no implementation, we need to provide one
    axios.get.mockImplementation(async(urlPath) => {
        if (urlPath === '/api/products') {
            return {
                data: [
                    {
                        id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                        image: "images/products/athletic-cotton-socks-6-pairs.jpg",
                        name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
                        rating: {
                            stars: 4.5,
                            count: 87
                        },
                        priceCents: 1090,
                        keywords: ["socks", "sports", "apparel"]
                    },
                    {
                        id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                        image: "images/products/intermediate-composite-basketball.jpg",
                        name: "Intermediate Size Basketball",
                        rating: {
                            stars: 4,
                            count: 127
                        },
                        priceCents: 2095,
                        keywords: ["sports", "basketballs"]
                    }
                ]
            }
        }
    })
})

describe('Label: HomePage Component Integration Tests', () => {
    it('displays the products grid correctly', async () => {
        render(
            <MemoryRouter>
                <HomePage products={mockProducts} cart={[]} loadCartItems={loadCart} />
            </MemoryRouter>
        );
        // screen.getAllByTestId('product-container'); // just check if rendered
        // better asynchronous way
        const productContainers = await screen.findAllByTestId('product-container') // returns a promise
    
        expect(productContainers.length).toBe(2); // we have 2 products in mock    

        expect(
            within(productContainers[0]).getByText('Black and Gray Athletic Cotton Socks - 6 Pairs')
        ).toBeInTheDocument() // check name of first product

        expect(
            within(productContainers[1]).getByText('Intermediate Size Basketball')
        ).toBeInTheDocument() // check name of second product
    });
});