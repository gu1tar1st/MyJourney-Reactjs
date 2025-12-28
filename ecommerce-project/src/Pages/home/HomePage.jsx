import './HomePage.css';
import { Header } from '../../components/Header';
// import { products } from '../../../starting-code/data/products';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { formatMoney } from '../../utils/money';
import { ProductsGrid } from '../home/ProductsGrid';

export function HomePage({ products, cart }) {
    // Requests
    // fetch('http://localhost:3000/api/products') // Return a promise
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((data) => {
            
    //     });

    // const [products, setProducts] = useState([]);
    // const [cartItems, setCartItems] = useState([]);

    // // Run only once
    // // Config localhost:3000 shortcut in vite config
    // useEffect(() => {
    //     axios.get('/api/products') // The same as fetch
    //     .then((response) => {
    //         setProducts(response.data);
    //     });

    //     axios.get('/api/cart-items')
    //     .then ((response) => {
    //         setCartItems(response.data);
    //     })
    // }, []);
    

    return (
        <>
            <title>Home Page</title>

            <Header cart={cart} />

            <div className="home-page">
                <ProductsGrid products={products} />
            </div>
        </>
    );
}