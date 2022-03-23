import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        console.log("products load before fetch");
        fetch("products.json")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                
            })
    }, [])

    useEffect(() => {
        console.log('local storage first line', products)
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
                
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                console.log(addedProduct);
                savedCart.push(addedProduct);
            }     
        } 
        setCart(savedCart);
    },[products])
    
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);


        // add data to local storage
        addToDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart = {handleAddToCart}
                        >
                        
                        </Product>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;