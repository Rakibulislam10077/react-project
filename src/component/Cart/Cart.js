import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props.cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of props.cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;

    return (
        <div className='cart'>
            <h1>Order Summary</h1>
            <h4>selected product: {quantity}</h4>
            <h4>Total Price: ${total}</h4>
            <h4>Total Shipping Charge: ${shipping}</h4>
            <h4>Tax: ${tax}</h4>
            <h3>Grand Total: ${grandTotal}</h3>
            {props.children}
        </div>
    );
};

export default Cart;