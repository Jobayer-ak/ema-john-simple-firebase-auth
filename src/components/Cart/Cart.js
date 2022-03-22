import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            
            <p>Selected Items: {cart.length}</p>
        </div>
    );
};

export default Cart;