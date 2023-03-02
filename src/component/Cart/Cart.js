import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h1>Order Summary</h1>
            <h4>selected product: {cart.length}</h4>
            <h4>Total Price: $</h4>
            <h4>Total Shipping Charge: $</h4>
            <h4>Tax: $</h4>
            <h3>Grand Total: $</h3>
            <div className='all_btn'>
                <button style={{
                    width: '90%',
                    height: '48px',
                    background: '#FF3030',
                    borderRadius: '4px',
                    border: 'none',
                    color: '#fff',
                    cursor: 'pointer'
                }}>Clear Cart </button>
                <button style={{
                    width: '90%',
                    height: '48px',
                    background: '#FF9900',
                    borderRadius: '4px',
                    border: 'none',
                    margin: '16px 0 0 0',
                    color: '#fff',
                    cursor: 'pointer'
                }}>Review Order </button>
            </div>
        </div>
    );
};

export default Cart;