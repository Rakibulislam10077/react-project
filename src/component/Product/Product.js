import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ({ product, handleAddToCart }) => {
    const { img, name, price, ratings, seller, shipping } = product

    return (
        <div className='product_details'>
            <div className='product_img'>
                <img src={img} alt="this is product pic" />
            </div>
            <div className='product_data'>
                <h3 className='name'>Name: {name}</h3>
                <p>Price: ${price}</p>
                <div style={{ margin: '45px 0 0 0' }}>
                    <p><small>Seller: {seller}</small> </p>
                    <p><small>Ratings: {ratings} stars</small> </p>
                    <p><small>shipping cost: {shipping}</small></p>
                </div>
            </div>
            <button onClick={() => handleAddToCart(product)}>Add to cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;