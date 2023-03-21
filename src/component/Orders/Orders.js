import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProduct';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products] = useProducts()
    const [cart, setCart] = useCart(products)
    const handleRemoveToCart = product => {
        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest);
        removeFromDb(product.id)
    }
    return (
        <div className='shop_container'>
            <div style={{ width: '60%', marginTop: '120px', height: '100vh', overflow: 'auto', margin: '0 auto' }}>
                {
                    cart.map(product => <ReviewItem key={product.id} handleRemoveToCart={handleRemoveToCart} product={product}></ReviewItem>)
                }
            </div>
            <div className='cart_container'>
                <Cart cart={cart}>
                    <Link to='/Inventory'>
                        <button>Product</button>
                    </Link>
                    <br />
                    <Link to='/shop'>
                        <button>back shop</button>
                    </Link>
                </Cart>
            </div>
        </div >
    );
};

export default Orders;