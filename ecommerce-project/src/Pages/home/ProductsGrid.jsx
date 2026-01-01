import { formatMoney } from '../../utils/money';
import axios from 'axios';
import { useState } from 'react';
import { Product } from './Product.jsx';

export function ProductsGrid({ products, loadCartItems }) {
    return (
        <>
            <div className="products-grid">
                {
                    // For each product in the products array
                    products.map((product) => {
                        return (
                            <Product key={product.id} product={product} loadCartItems={loadCartItems} />
                        );
                    })
                }
            </div>
        </>
    )
}