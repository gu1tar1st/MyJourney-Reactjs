import './checkout.css';
import './checkout-header.css';
import { Header } from '../../components/Header';
import { formatMoney } from '../../utils/money';
import dayjs from 'dayjs';
import axion from 'axios';
import { useEffect, useState } from 'react';
import { OrderSummary } from './OrderSummary';
import { PaymentSummary } from './PaymentSummary';

export function CheckoutPage({ cart }) {

    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState(null);

    useEffect(() => {
        axion.get('/api/delivery-options?expand=estimatedDeliveryTime')
            .then((response) => {
                setDeliveryOptions(response.data);
            })

        axion.get('/api/payment-summary')
            .then((response) => {
                setPaymentSummary(response.data);
            })
    }, []);

    return (
        <>
            <title>Checkout</title>

            <Header cart={cart} />

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary cart={cart} deliveryOptions={deliveryOptions}/>

                    <PaymentSummary paymentSummary={paymentSummary} />
                </div>
            </div>
        </>
    );
}