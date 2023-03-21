import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ReviewItem = ({ product, handleRemoveToCart }) => {
    const { name, price, img, shipping } = product;
    return (
        <div style={{ height: '100px', display: 'flex', justifyContent: 'between', alignItems: 'center', marginBottom: '20px', width: '70%', border: '1px solid gray', padding: '10px', borderRadius: '15px', }}>
            <div style={{ display: 'flex', width: '100%', height: '100px', }}>
                <img style={{ width: '20%', height: 'auto', borderRadius: '10px' }} src={img} alt="" />
                <div style={{ marginLeft: '10px' }}>
                    <h3 style={{ margin: '8px 0' }} title={name}>Name: {name.length > 15 ? name.slice(0, 20) + '...' : name}</h3>
                    <h5 style={{ fontSize: '12px', fontWeight: '400', margin: '8px 0' }}>Price: {price}</h5>
                    <h5 style={{ fontSize: '12px', fontWeight: '400', margin: '8px 0' }}>Shipping charge: {shipping}</h5>
                </div>
            </div>
            <div>
                <button onClick={() => handleRemoveToCart(product)} style={{ background: 'bisque', border: '0', borderRadius: '50%', padding: '14px', color: 'white', fontSize: '17px', cursor: 'pointer', marginRight: '20px' }}>
                    <FontAwesomeIcon style={{ color: 'red', }} icon={faTrashAlt}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default ReviewItem;