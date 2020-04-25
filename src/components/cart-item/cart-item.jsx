import React from 'react';

import './cart-item.scss';

export const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <div className="cart-item">
        <img src={imageUrl} alt="Item" />
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">
                {quantity} x £{price}
            </span>
        </div>
    </div>
);

export default CartItem;
