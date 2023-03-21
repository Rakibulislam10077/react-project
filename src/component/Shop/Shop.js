import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProduct';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products] = useProducts()
    const [cart, setCart] = useCart(products);

    const handleAddToCart = (selectProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectProduct.id);
        if (!exists) {
            selectProduct.quantity = 1;
            newCart = [...cart, selectProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectProduct.id)
    }
    return (
        <div className='shop_container'>
            <div className='products_container'>
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className='cart_container'>
                <Cart cart={cart}>
                    <Link to='/orders'>
                        <button>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;